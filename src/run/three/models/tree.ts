import * as THREE from 'three';
import * as dim from '#dimensions';

import * as mat from '../materials';

export function createTree(conifer = Math.random() < 0.5): THREE.Object3D {
  return conifer ? createConiferTree() : createBroadLeafTree();
}

const greens = [mat.colorMaterials.green3, mat.colorMaterials.green2];

const coniferSegments = 5;
const trunkFraction = 0.2;
const trunkRadiusFraction = 0.3;

function createConiferTree() {
  const retval = new THREE.Group();
  retval.rotation.y = Math.random() * Math.PI;

  const [diameter, fullHeight] = dim.modelSizes.conifer;
  const radius = diameter / 2;

  const height = fullHeight * (1 - trunkFraction);

  for (let i = 0; i < coniferSegments; i += 1) {
    const material = greens[i % greens.length]!;
    const ratio = 0.85 ** i;
    let h = height * ratio - i * (height / coniferSegments / 6);
    const bottom = fullHeight - h;
    h *= 0.9 ** (coniferSegments - 1 - i);
    const r = radius * ratio ** 0.7;
    const coneHeightSegments = 1; // i === coniferSegments - 1 ? 2 : 1;
    retval.add(
      new THREE.Mesh(
        new THREE.ConeGeometry(r, h, 4, coneHeightSegments, i > 0).translate(0, h / 2 + bottom, 0),
        material,
      ),
    );
  }

  // trunk
  retval.add(
    new THREE.Mesh(
      new THREE.ConeGeometry(radius * trunkRadiusFraction, fullHeight, 4).translate(
        0,
        fullHeight / 2,
        0,
      ),
      mat.colorMaterials.brown3,
    ),
  );

  retval.userData.extent2d = new THREE.Box2(
    new THREE.Vector2(-radius, -radius),
    new THREE.Vector2(radius, radius),
  );
  retval.userData.type = 'object';

  return retval;
}

function createBroadLeafTree() {
  return createConiferTree();
}
