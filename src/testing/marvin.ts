import * as THREE from 'three';
import { betweener } from '../run/three/animations';

export interface MarvinSizeOptions {
  length: number;
  radius: number;
  hipWidth: number;
  maxStride?: number;
  segmentCount?: number;
  sides?: number;
  strideDuration?: number;
}

type Size = Required<MarvinSizeOptions>;

export class Marvin {
  public readonly object: THREE.Group;
  private actions: THREE.AnimationAction[];
  private mixer: THREE.AnimationMixer;

  private walking = false;

  constructor(sizeOptions: MarvinSizeOptions, material: THREE.Material) {
    const size: Size = {
      ...sizeOptions,
      segmentCount: sizeOptions.segmentCount ?? 5,
      sides: sizeOptions.sides ?? 4,
      maxStride: sizeOptions.maxStride ?? sizeOptions.length * 1,
      strideDuration: sizeOptions.strideDuration ?? 1.2,
    };

    const fullObject = new THREE.Group();
    this.object = fullObject;

    const allBones: THREE.Bone[] = [
      ...createLegBones(size, 'left'),
      ...createLegBones(size, 'right'),
    ];
    const skeleton = new THREE.Skeleton(allBones);

    function addLeg(prefix: 'left' | 'right', xMultiplier: 1 | -1) {
      const legMesh = createLegMesh(
        createLegGeometry(size, indexByName(allBones, prefix + 'Hip')),
        getByName(allBones, prefix + 'Hip'),
        material,
        xMultiplier * (size.hipWidth / 2 - size.radius),
      );
      fullObject.add(legMesh);
      legMesh.bind(skeleton);
    }

    addLeg('left', -1);
    addLeg('right', 1);

    // the clip is the same for both legs
    const legClip = createWalkingClip(
      size.strideDuration,
      size.maxStride,
      getByName(allBones, 'leftFoot'),
    );

    this.mixer = new THREE.AnimationMixer(fullObject);
    this.actions = [
      this.mixer.clipAction(legClip, getByName(allBones, 'leftFoot')),
      this.mixer.clipAction(legClip, getByName(allBones, 'rightFoot')),
    ];

    const torso = new THREE.Mesh(
      createTorsoGeometry(size.hipWidth, size.radius * 2, size.length * 0.8) //
        .translate(0, size.length, 0),
      material,
    );
    fullObject.add(torso);

    const bobHeight = (size.length - Math.sqrt(size.length ** 2 - (size.maxStride / 2) ** 2)) / 2;
    const bobAngle = (size.maxStride / size.length) * 0.15;
    const torsoBobClip = createBobClip(size.strideDuration, bobHeight, -bobAngle);
    this.actions.push(this.mixer.clipAction(torsoBobClip, torso));

    const headRadius = size.hipWidth * 0.4;
    const head = new THREE.Mesh(
      new THREE.OctahedronGeometry(headRadius, 1).translate(0, size.length * 1.85 + headRadius, 0),
      material,
    );
    fullObject.add(head);
    const headBobClip = createBobClip(size.strideDuration, bobHeight, 0);
    this.actions.push(this.mixer.clipAction(headBobClip, head));
  }

  // todo add a speed parameter?
  startWalking() {
    if (!this.walking) {
      this.walking = true;
      const dur = this.actions[0]!.getClip().duration;
      const randomGait = dur * Math.random();

      for (const action of this.actions) {
        action.reset();
        if (action.getRoot().name.startsWith('left')) {
          // start left leg halfway through a stride
          action.time = action.getClip().duration / 2;
        }
        action.time += randomGait;
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

function createLegGeometry(size: Size, boneOffset: number) {
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
    skinIndices.push(boneOffset, boneOffset + 1, 0, 0);
    // hip is higher
    skinWeights.push(higherBoneSkinWeight, 1 - higherBoneSkinWeight, 0, 0);
  }

  geometry.setAttribute('skinIndex', new THREE.Uint16BufferAttribute(skinIndices, 4));
  geometry.setAttribute('skinWeight', new THREE.Float32BufferAttribute(skinWeights, 4));

  return geometry;
}

function createLegBones(size: Size, prefix: string) {
  const hip = new THREE.Bone();
  hip.name = prefix + 'Hip';
  hip.position.y = size.length;

  const foot = new THREE.Bone();
  foot.name = prefix + 'Foot';
  foot.position.z = size.radius;
  foot.position.y = -size.length;
  hip.add(foot);

  // hip must be the first returned bone, other things depend on it
  return [hip, foot] as [THREE.Bone, THREE.Bone];
}

function createLegMesh(
  geometry: THREE.BufferGeometry,
  hipBone: THREE.Bone,
  material: THREE.Material,
  posX: number,
) {
  const mesh = new THREE.SkinnedMesh(geometry, material);

  mesh.add(hipBone);
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

function getByName<T extends THREE.Object3D>(objects: T[], name: string) {
  const retval = objects.find((obj) => obj.name === name);
  if (!retval) {
    throw new Error(`cannot find object with name "${name}"`);
  }
  return retval;
}

function indexByName<T extends THREE.Object3D>(objects: T[], name: string) {
  const retval = objects.findIndex((obj) => obj.name === name);
  if (retval < 0) {
    throw new Error(`cannot find object with name "${name}"`);
  }
  return retval;
}
