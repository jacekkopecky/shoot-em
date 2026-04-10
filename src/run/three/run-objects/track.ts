import * as THREE from 'three';

import * as dim from '#dimensions';

import * as mat from '../materials';
import { createBrickSquare } from '../models/brick-plane';

const trackWidth = dim.trackWidth + 2 * dim.trackDecorationThickness;
const trackSegment = createBrickSquare(trackWidth, 15).rotateX(-Math.PI / 2);

function createTrack(group: THREE.Group): void {
  const segments = Math.ceil(dim.trackLength / trackWidth) * 2;

  let z = dim.behindCamera - trackWidth / 2;
  for (let i = 0; i < segments; i += 1) {
    const segment = trackSegment.clone();
    segment.position.z = z;
    segment.userData.type = 'track';

    group.add(segment);

    z -= trackWidth;
  }

  group.userData.trackDist = trackWidth;
  group.userData.trackNextZ = z;
}

export function createTrackDecorations(group: THREE.Group): void {
  createTrack(group);

  const dist = dim.trackLength / dim.trackDecorationN;

  const length = dim.trackDecorationLength;
  const thickness = dim.trackDecorationThickness;

  const leftGeometry = makeHalfCubeGeometry(false, thickness, thickness, length);
  const rightGeometry = makeHalfCubeGeometry(true, thickness, thickness, length);

  let z = dim.behindCamera + length / 2;
  while (z >= -dim.trackLength - dist * 2) {
    const left = new THREE.Mesh(leftGeometry, mat.colorFlatMaterials.brown2);
    const right = new THREE.Mesh(rightGeometry, mat.colorFlatMaterials.brown2);

    left.position.set(-trackWidth / 2 + thickness / 2, thickness / 2, z);
    right.position.set(trackWidth / 2 - thickness / 2, thickness / 2, z);

    left.userData.type = 'side';
    right.userData.type = 'side';

    left.receiveShadow = true;
    right.receiveShadow = true;
    left.castShadow = true;
    right.castShadow = true;

    group.add(left);
    group.add(right);

    z -= dist;
  }

  group.userData.sideDist = dist;
  group.userData.sideNextZ = z;
}

export function moveTrackDecorations(group: THREE.Group, delta: number) {
  group.position.z += delta * dim.objectSpeedPerSecond;
  const maxZ = dim.behindCamera - group.position.z;
  const sideNextZ: number = group.userData.sideNextZ;
  const trackNextZ: number = group.userData.trackNextZ;
  const maxTrackZ = maxZ + group.userData.trackDist / 2;

  let movedSide = false;
  let movedTrack = false;
  for (const part of [...group.children]) {
    if (part.userData.type === 'side' && part.position.z > maxZ) {
      part.position.z = sideNextZ;
      movedSide = true;
    } else if (part.userData.type === 'track' && part.position.z > maxTrackZ) {
      part.position.z = trackNextZ;
      movedTrack = true;
    }
  }

  if (movedSide) {
    group.userData.sideNextZ -= group.userData.sideDist;
  }
  if (movedTrack) {
    group.userData.trackNextZ -= group.userData.trackDist;
  }
}

// a cube with only three sides, only visible from the outside
// useful for boxes that are only visible from one direction
function makeHalfCubeGeometry(hasLeftSide: boolean, w = 1, h = 1, d = 1): THREE.BufferGeometry {
  return new THREE.BoxGeometry(w, h, d);

  // not using the stuff below because it doesn't properly cast shadows
  const geometry = new THREE.BufferGeometry();

  // points:
  //   4 -- 5
  //  /|    |
  // 7 |  6 |
  // | 0 -- 1
  // |/    /
  // 3 -- 2
  const p = [
    new THREE.Vector3(-1, 1, 1),
    new THREE.Vector3(1, 1, 1),
    new THREE.Vector3(1, -1, 1),
    new THREE.Vector3(-1, -1, 1),
    new THREE.Vector3(-1, 1, -1),
    new THREE.Vector3(1, 1, -1),
    new THREE.Vector3(1, -1, -1),
    new THREE.Vector3(-1, -1, -1),
  ] as const;

  // prettier-ignore
  const faces = [
    p[0],p[2],p[1], p[0],p[3],p[2],  // front
    ...(hasLeftSide
      ?  [ p[0],p[4],p[7], p[0],p[7],p[3] ]  // left
      :  [ p[1],p[2],p[6], p[1],p[6],p[5] ]  // right
    ),
    p[0],p[1],p[5], p[0],p[5],p[4], // top
  ]

  geometry.setFromPoints(faces);

  // the geometry starts as a 2x2x2 cube
  geometry.scale(w / 2, h / 2, d / 2);

  geometry.computeVertexNormals();

  return geometry;
}
