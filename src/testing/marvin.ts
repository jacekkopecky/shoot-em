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
  armSegmentCount?: number;
  headRadius?: number;
  torsoOffset?: number;
  gunRadius?: number;
  gunLength?: number;
}

type Size = Required<MarvinSizeOptions>;

export class Marvin {
  public readonly object: THREE.Group;
  private actions: THREE.AnimationAction[];
  private mixer: THREE.AnimationMixer;

  private walking = false;

  constructor(sizeOptions: MarvinSizeOptions, material: THREE.Material, gunMaterial = material) {
    const sides = sizeOptions.sides ?? 4;
    const size: Size = {
      ...sizeOptions,
      legSegmentCount: sizeOptions.legSegmentCount ?? 5,
      sides,
      maxStride: sizeOptions.maxStride ?? sizeOptions.legLength * 1,
      strideDuration: sizeOptions.strideDuration ?? 1.2,
      armRadius: sizeOptions.armRadius ?? sizeOptions.legRadius * 0.6,
      armSegmentCount: sizeOptions.armSegmentCount ?? 20,
      headRadius: sizeOptions.headRadius ?? sizeOptions.legLength / 4,
      torsoOffset:
        sizeOptions.torsoOffset ?? sizeOptions.legRadius * (1 / Math.cos(Math.PI / sides) - 1),
      gunRadius: sizeOptions.gunRadius ?? sizeOptions.legRadius,
      gunLength: sizeOptions.gunLength ?? sizeOptions.hipWidth,
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

    const bobGroup = new THREE.Group();
    fullObject.add(bobGroup);

    const torso = new THREE.Mesh(
      createTorsoGeometry(
        size.hipWidth + 2 * size.torsoOffset,
        (size.legRadius + size.torsoOffset) * 2,
        size.legLength * 0.8,
      ).translate(0, size.legLength, 0),
      material,
    );
    bobGroup.add(torso);

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
    bobGroup.add(head);

    const headBobClip = createBobClip(size.strideDuration, bobHeight, 0);
    this.actions.push(this.mixer.clipAction(headBobClip, head));

    function addArm(side: 'right' | 'left') {
      const xMultiplier = side === 'right' ? 1 : -1;
      const rightArm = new THREE.Mesh(createArmGeometry(side, size), material);
      rightArm.position.y = size.legLength * 1.8 - size.armRadius;
      rightArm.position.x = xMultiplier * (size.hipWidth / 2 + size.torsoOffset);
      torso.add(rightArm);
    }

    addArm('left');
    addArm('right');

    const gun = new THREE.Mesh(
      new THREE.CylinderGeometry(size.gunRadius * 2.2, size.gunRadius, size.gunLength, 3, 1, false) //
        .rotateX(Math.PI / 2)
        .translate(
          0,
          size.legLength * 1.35,
          -size.gunLength / 2 - size.legRadius - size.torsoOffset * 2,
        ),
      gunMaterial,
    );
    torso.add(gun);
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

type V3Array = [number, number, number];
function v([x, y, z]: V3Array): THREE.Vector3 {
  return new THREE.Vector3(x, y, z);
}

function c(v0: V3Array, v1: V3Array, v2: V3Array, v3: V3Array) {
  return new THREE.CubicBezierCurve3(v(v0), v(v1), v(v2), v(v3));
}

function createArmGeometry(side: 'left' | 'right', size: Size) {
  const dir = side === 'right' ? 1 : -1;
  const r = size.armRadius;
  const midX = dir * (size.hipWidth / 2 + size.torsoOffset);
  const midY = size.legLength * 0.6;
  const path = new THREE.CurvePath<THREE.Vector3>();

  const bezPoints: V3Array[] = [
    [0, 0, 0],
    [dir * r, 0, 0],
    [dir * r * 2, -r, 0],
    [dir * r * 2, -r * 2, 0],
    [dir * r * 2, -r * 8, 0],
    [dir * r * 2, -midY, 0],
    [-midX, -midY, 0],
  ];
  for (let i = 0; i < bezPoints.length - 3; i += 3) {
    path.add(c(bezPoints[i]!, bezPoints[i + 1]!, bezPoints[i + 2]!, bezPoints[i + 3]!));
  }

  // have one arm raised a bit higher
  const rotation = (Math.PI / 180) * (40 - dir * 11);

  return new THREE.TubeGeometry(path, size.armSegmentCount, r, 8).rotateX(rotation);
}
