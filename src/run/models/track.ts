import * as THREE from 'three';

import * as dim from '../../dimensions';
import * as mat from '../three/materials';

export function createTrack(): THREE.Object3D {
  const material = mat.trackMaterial;

  const geometry = new THREE.PlaneGeometry(dim.trackWidth, dim.trackLength * 2);
  geometry.rotateX(-Math.PI / 2);

  const track = new THREE.Mesh(geometry, material);
  return track;
}

export function createTrackDecorations(group: THREE.Group): void {
  const dist = dim.trackLength / dim.trackDecorationN;

  const length = dim.trackDecorationLength;
  const thickness = dim.trackDecorationThickness;

  const leftGeometry = makeHalfCubeGeometry(false, thickness, thickness, length);
  const rightGeometry = makeHalfCubeGeometry(true, thickness, thickness, length);

  let z = dim.behindCamera + length / 2;
  while (z >= -dim.trackLength - dist * 2) {
    const left = new THREE.Mesh(leftGeometry, mat.trackDecorationsMaterial);
    const right = new THREE.Mesh(rightGeometry, mat.trackDecorationsMaterial);

    left.position.set(-dim.trackWidth / 2 + thickness / 2, thickness / 2, z);
    right.position.set(dim.trackWidth / 2 - thickness / 2, thickness / 2, z);

    group.add(left);
    group.add(right);

    z -= dist;
  }

  group.userData.dist = dist;
  group.userData.nextZ = z;
}

export function moveTrackDecorations(decoGroup: THREE.Group, delta: number) {
  decoGroup.position.z += delta * dim.objectSpeedPerSecond;
  const maxZ = dim.behindCamera - decoGroup.position.z;
  const nextZ: number = decoGroup.userData.nextZ;

  let moved = false;
  for (const decoration of decoGroup.children) {
    if (decoration.position.z > maxZ) {
      decoration.position.z = nextZ;
      moved = true;
    }
  }

  if (moved) {
    decoGroup.userData.nextZ -= decoGroup.userData.dist;
  }
}

// a cube with only three sides, only visible from the outside
// useful for boxes that are only visible from one direction
function makeHalfCubeGeometry(hasLeftSide: boolean, w = 1, h = 1, d = 1): THREE.BufferGeometry {
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

  return geometry;
}
