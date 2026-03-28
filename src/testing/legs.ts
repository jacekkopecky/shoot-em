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
      sides: sizeOptions.sides ?? 8,
      maxStride: sizeOptions.maxStride ?? sizeOptions.length,
      strideDuration: sizeOptions.strideDuration ?? 1.2,
    };

    this.object = new THREE.Group();

    const leftBones = createBones(size);
    this.object.add(
      createMesh(createLegGeometry(size), leftBones, material, -hipWidth / 2 + size.radius),
    );

    const rightBones = createBones(size);
    this.object.add(
      createMesh(createLegGeometry(size), rightBones, material, hipWidth / 2 - size.radius),
    );

    const feet = [leftBones[1]!, rightBones[1]!];

    // the clip is the same for both legs
    const clip = createWalkingClip(size.strideDuration, size.maxStride, rightBones[1]!);

    this.mixer = new THREE.AnimationMixer(this.object);
    this.actions = feet.map((foot) => this.mixer.clipAction(clip, foot));
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
  const geometry = new THREE.CylinderGeometry(
    size.radius, // radiusTop
    size.radius, // radiusBottom
    size.length, // height
    size.sides, // radiusSegments
    size.segmentCount, // heightSegments
    false, // openEnded
  ).translate(0, size.length / 2, 0);

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

  return [hip, foot];
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
