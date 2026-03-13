import * as THREE from 'three';

import * as dim from './dimensions.js';
import { getObjectX } from './three.js';
import * as mat from './three-materials.js';

export function createObject(
  type: string,
  opts: { dataType?: string; y?: number } = {},
): THREE.Sprite {
  const { dataType = type, y = 0 } = opts;

  const material = mat.getSpriteMaterial(type, true);
  const size = dim.sizes[type as keyof typeof dim.sizes] ?? dim.sizes.defaultSize!;

  const sprite = new THREE.Sprite(material);
  sprite.scale.set(...size, 1);
  // make the object "stand" on the plane by moving its center down instead of moving its position up
  sprite.center.set(0.5, -y / size[1]);

  sprite.userData.width = size[0];
  sprite.userData.depth = size[0] / 3; // use the third of width as the depth
  sprite.userData.type = dataType;
  sprite.userData.dyingMaterial = `${type}Dying` in mat.sprites ? `${type}Dying` : type;
  return sprite;
}

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

export function doObjectsOverlapInX(
  obj1: THREE.Object3D,
  obj2: THREE.Object3D,
  reach = 1, // bigger reach - conflict occurs when they're farther away
): boolean {
  return (
    Math.abs(getObjectX(obj1) - getObjectX(obj2)) <
    ((getObjectWidth(obj1) + getObjectWidth(obj2)) / 2) * reach
  );
}

export function getObjectWidth(obj: THREE.Object3D): number {
  if (typeof obj.userData.width === 'number') {
    return obj.userData.width;
  } else {
    throw new TypeError('obj does not have a width');
  }
}

// a cube with only three sides, only visible from the outside
// useful for boxes that are only visible from one direction
function makeHalfCubeGeometry(hasLeftSide: boolean, w = 1, h = 1, d = 1): THREE.BufferGeometry {
  const geometry = new THREE.BufferGeometry();

  // prettier-ignore
  const vertices = new Float32Array([
    // front
    -1,-1,1, 1,-1,1, -1,1,1,
    -1, 1,1, 1,-1,1,  1,1,1,
    ...(hasLeftSide ?
      [
        // left
        -1,-1,-1, -1,-1,1, -1,1,-1,
        -1, 1,-1, -1,-1,1, -1,1, 1,
      ] : [
        // right
        1,-1,1, 1,-1,-1, 1,1, 1,
        1, 1,1, 1,-1,-1, 1,1,-1,
      ]
    ),
    // top
    1,1,-1, -1,1,-1,  1,1,1,
    1,1, 1, -1,1,-1, -1,1,1,
  ])

  geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));

  // the geometry starts as a 2x2x2 cube
  geometry.scale(w / 2, h / 2, d / 2);

  return geometry;
}
