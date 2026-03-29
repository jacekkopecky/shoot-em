import * as THREE from 'three';
import { betweener } from '../run/three/animations';

interface LegSizeOptions {
  length: number;
  radius: number;
  maxStride?: number;
  segmentCount?: number;
  sides?: number;
  strideDuration?: number;
}

type LegSize = Required<LegSizeOptions>;

export class Legs {
  public readonly object: THREE.Group;
  private actions: THREE.AnimationAction[];
  private mixer: THREE.AnimationMixer;

  private walking = false;

  constructor(sizeOptions: LegSizeOptions, hipWidth: number, material: THREE.Material) {
    const size: LegSize = {
      ...sizeOptions,
      segmentCount: sizeOptions.segmentCount ?? 5,
      sides: sizeOptions.sides ?? 4,
      maxStride: sizeOptions.maxStride ?? sizeOptions.length * 1,
      strideDuration: sizeOptions.strideDuration ?? 1.2,
    };

    this.object = new THREE.Group();

    const leftLegBones = createBones(size);
    this.object.add(
      createMesh(createLegGeometry(size), leftLegBones, material, -hipWidth / 2 + size.radius),
    );

    const rightLegBones = createBones(size);
    this.object.add(
      createMesh(createLegGeometry(size), rightLegBones, material, hipWidth / 2 - size.radius),
    );

    // the clip is the same for both legs
    const legClip = createWalkingClip(size.strideDuration, size.maxStride, rightLegBones[1]!);

    this.mixer = new THREE.AnimationMixer(this.object);
    this.actions = [
      this.mixer.clipAction(legClip, leftLegBones[1]),
      this.mixer.clipAction(legClip, rightLegBones[1]),
    ];

    const torso = new THREE.Mesh(
      createTorsoGeometry(hipWidth, size.radius * 2, size.length * 0.8) //
        .translate(0, size.length, 0),
      material,
    );
    this.object.add(torso);

    const bobHeight = (size.length - Math.sqrt(size.length ** 2 - (size.maxStride / 2) ** 2)) / 2;
    const bobAngle = (size.maxStride / size.length) * 0.15;
    const torsoBobClip = createBobClip(size.strideDuration, bobHeight, -bobAngle);
    this.actions.push(this.mixer.clipAction(torsoBobClip, torso));

    const headRadius = hipWidth * 0.4;
    const head = new THREE.Mesh(
      new THREE.OctahedronGeometry(headRadius, 1).translate(0, size.length * 1.85 + headRadius, 0),
      material,
    );
    this.object.add(head);
    const headBobClip = createBobClip(size.strideDuration, bobHeight, 0);
    this.actions.push(this.mixer.clipAction(headBobClip, head));
  }

  // todo add a speed parameter?
  startWalking() {
    if (!this.walking) {
      this.walking = true;
      for (const action of this.actions) {
        action.reset();
        if (action === this.actions[0]) {
          // start one leg halfway through a stride
          action.time = action.getClip().duration / 2;
        }
        action.fadeIn(action.getClip().duration / 2);
        action.loop = THREE.LoopRepeat;
        action.enabled = true;
        action.play();
      }
    }
  }

  stopWalking() {
    if (this.walking) {
      this.walking = false;
      for (const action of this.actions) {
        action.fadeOut(0.5);
      }
    }
  }

  update(time: number) {
    this.mixer.update(time);
  }
}

const _vector = new THREE.Vector3();

function createLegGeometry(size: LegSize) {
  const r = size.radius;
  const geometry = new THREE.CylinderGeometry(r, r, size.length, size.sides, size.segmentCount)
    .translate(0, size.length / 2, 0)
    .rotateY(Math.PI / size.sides);

  const position = geometry.attributes.position!;

  const skinIndices = [];
  const skinWeights = [];

  for (let i = 0; i < position.count; i++) {
    _vector.fromBufferAttribute(position, i);
    const higherBoneSkinWeight = _vector.y / size.length;

    // first bone is hip, second foot (there is no knee)
    skinIndices.push(0, 1, 0, 0);
    // hip is higher
    skinWeights.push(higherBoneSkinWeight, 1 - higherBoneSkinWeight, 0, 0);
  }

  geometry.setAttribute('skinIndex', new THREE.Uint16BufferAttribute(skinIndices, 4));
  geometry.setAttribute('skinWeight', new THREE.Float32BufferAttribute(skinWeights, 4));

  return geometry;
}

function createBones(size: LegSize) {
  const hip = new THREE.Bone();
  hip.position.y = size.length;

  const foot = new THREE.Bone();
  foot.position.z = size.radius;
  foot.position.y = -size.length;
  hip.add(foot);

  return [hip, foot] as [THREE.Bone, THREE.Bone];
}

function createMesh(
  geometry: THREE.BufferGeometry,
  bones: THREE.Bone[],
  material: THREE.Material,
  posX: number,
) {
  const mesh = new THREE.SkinnedMesh(geometry, material);
  const skeleton = new THREE.Skeleton(bones);

  mesh.add(bones[0]!);
  mesh.bind(skeleton);

  mesh.position.x = posX;

  return mesh;
}

function createWalkingClip(duration: number, strideLength: number, foot: THREE.Bone) {
  const durations = betweener(0, duration);
  const heights = betweener(foot.position.y, foot.position.y * 0.85);
  const lengths = betweener(foot.position.z - strideLength / 2, foot.position.z + strideLength / 2);

  return new THREE.AnimationClip('walk', duration, [
    new THREE.KeyframeTrack(
      '.rotation[x]',
      durations(0, 0.15, 0.45, 0.75, 1),
      [0, 0, 0.7, 0, 0],
      THREE.InterpolateLinear,
    ),
    new THREE.KeyframeTrack(
      '.position[z]',
      durations(0, 0.25, 0.75, 1),
      lengths(0.5, 0, 1, 0.5),
      THREE.InterpolateLinear,
    ),
    new THREE.KeyframeTrack(
      '.position[y]',
      durations(0, 0.25, 0.4, 0.75, 1),
      heights(0, 0, 1, 0, 0),
      THREE.InterpolateLinear,
    ),
  ]);
}

function createBobClip(duration: number, height: number, angle: number) {
  const durations = betweener(0, duration);
  const heights = betweener(-height, 0);
  const angles = betweener(0, angle);

  return new THREE.AnimationClip('bob', duration, [
    new THREE.KeyframeTrack(
      '.rotation[y]',
      durations(0, 0.25, 0.75, 1),
      angles(0, -1, 1, 0),
      THREE.InterpolateLinear,
    ),
    new THREE.KeyframeTrack(
      '.position[y]',
      durations(0, 0.25, 0.5, 0.75, 1),
      heights(1, 0, 1, 0, 1),
      THREE.InterpolateLinear,
    ),
  ]);
}

function createTorsoGeometry(width: number, depth: number, length: number) {
  const shape = new THREE.Shape();
  shape.moveTo(-width / 2, -depth / 2);
  shape.lineTo(-width / 2, depth / 2);
  shape.lineTo(width / 2, depth / 2);
  shape.lineTo(width / 2, -depth / 2);
  shape.closePath();

  const geometry = new THREE.ExtrudeGeometry(shape, {
    depth: length,
    bevelSize: length / 7,
    bevelEnabled: true,
    bevelOffset: -length / 7,
    bevelSegments: 1,
    bevelThickness: length / 10,
  });
  geometry.rotateX(-Math.PI / 2);
  return geometry;
}
