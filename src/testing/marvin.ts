import * as THREE from 'three';
import { getByName, indexByName } from '#utils';

import { betweener } from '../run/three/animations';

import { createBonyTubeGeometry } from './bony-tube';

export interface MarvinSizeOptions {
  legLength: number;
  legRadius: number;
  hipWidth: number;
  maxStride?: number;
  legSegmentCount?: number;
  sides?: number;
  strideDuration?: number;
  armRadius?: number;
  headRadius?: number;
  torsoOffset?: number;
}

type Size = Required<MarvinSizeOptions>;

export class Marvin {
  public readonly object: THREE.Group;
  private actions: THREE.AnimationAction[];
  private mixer: THREE.AnimationMixer;

  private walking = false;

  constructor(sizeOptions: MarvinSizeOptions, material: THREE.Material) {
    const sides = sizeOptions.sides ?? 4;
    const size: Size = {
      ...sizeOptions,
      legSegmentCount: sizeOptions.legSegmentCount ?? 5,
      sides,
      maxStride: sizeOptions.maxStride ?? sizeOptions.legLength * 1,
      strideDuration: sizeOptions.strideDuration ?? 1.2,
      armRadius: sizeOptions.armRadius ?? sizeOptions.legRadius / 2,
      headRadius: sizeOptions.headRadius ?? sizeOptions.legLength / 4,
      torsoOffset:
        sizeOptions.torsoOffset ?? sizeOptions.legRadius * (1 / Math.cos(Math.PI / sides) - 1),
    };

    const fullObject = new THREE.Group();
    this.object = fullObject;

    const allBones: THREE.Bone[] = [
      ...createLegBones(size, 'left'),
      ...createLegBones(size, 'right'),
    ];
    const skeleton = new THREE.Skeleton(allBones);

    function addLeg(prefix: 'left' | 'right') {
      const xMultiplier = prefix === 'right' ? 1 : -1;
      const legMesh = createLegMesh(
        createLegGeometry(size, indexByName(allBones, prefix + 'Hip')),
        getByName(allBones, prefix + 'Hip'),
        material,
        xMultiplier * (size.hipWidth / 2 - size.legRadius),
      );
      legMesh.position.y = size.legLength;
      legMesh.rotation.z = Math.PI;
      fullObject.add(legMesh);
      legMesh.bind(skeleton);
    }

    addLeg('left');
    addLeg('right');

    // the clip is the same for both legs
    const legClip = createLegWalkingClip(
      size.strideDuration,
      size.maxStride,
      getByName(allBones, 'rightFoot'),
    );

    this.mixer = new THREE.AnimationMixer(fullObject);
    this.actions = [
      this.mixer.clipAction(legClip, getByName(allBones, 'leftFoot')),
      this.mixer.clipAction(legClip, getByName(allBones, 'rightFoot')),
    ];

    const torso = new THREE.Mesh(
      createTorsoGeometry(
        size.hipWidth + 2 * size.torsoOffset,
        (size.legRadius + size.torsoOffset) * 2,
        size.legLength * 0.8,
      ).translate(0, size.legLength, 0),
      material,
    );
    fullObject.add(torso);

    const bobHeight =
      (size.legLength - Math.sqrt(size.legLength ** 2 - (size.maxStride / 2) ** 2)) / 2;
    const bobAngle = (size.maxStride / size.legLength) * 0.15;
    const torsoBobClip = createBobClip(size.strideDuration, bobHeight, bobAngle);
    this.actions.push(this.mixer.clipAction(torsoBobClip, torso));

    const head = new THREE.Mesh(
      new THREE.OctahedronGeometry(size.headRadius, 1) //
        .translate(0, size.legLength * 1.85 + size.headRadius, 0),
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

function createLegGeometry(size: Size, boneOffset: number) {
  const sides = 4;
  return createBonyTubeGeometry({
    boneCount: 2,
    boneOffset,
    length: size.legLength,
    radius: size.legRadius / Math.cos(Math.PI / sides),
    segmentsPerBone: size.legSegmentCount,
    sides,
  });
}

function createLegBones(size: Size, prefix: string) {
  const hip = new THREE.Bone();
  hip.name = prefix + 'Hip';

  const foot = new THREE.Bone();
  foot.name = prefix + 'Foot';
  foot.position.z = -size.legRadius;
  foot.position.y = size.legLength;
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

function createLegWalkingClip(duration: number, strideLength: number, foot: THREE.Bone) {
  const durations = betweener(0, duration);
  const heights = betweener(foot.parent!.position.y, foot.position.y);
  const lengths = betweener(foot.position.z + strideLength / 2, foot.position.z - strideLength / 2);

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
      heights(1, 1, 0.85, 1, 1),
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
