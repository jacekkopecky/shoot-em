import * as THREE from 'three';
import * as dim from '#dimensions';

import * as mat from '../materials';
import { Circle } from '../../types';

export function createTree(conifer = Math.random() < 0.5): THREE.Object3D {
  return conifer ? createConiferTree() : createBroadLeafTree();
}

const greens = [mat.colorMaterials.green3, mat.colorMaterials.green2];

const coniferSegments = 5;
const trunkFraction = 0.2;
const trunkRadiusFraction = 0.3;

export function createConiferTree(random = true) {
  const retval = new THREE.Group();
  if (random) retval.rotation.y = Math.random() * Math.PI;

  const [x, y] = dim.modelSizes.conifer;
  const radius = x / 2;

  // vary the height between 0.95 and 1.05
  const heightVariation = random ? Math.random() / 10 + 0.95 : 1;
  const fullHeight = y * heightVariation;
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

  retval.userData.extent2d = new Circle(undefined, radius);
  retval.userData.type = 'object';

  return retval;
}

export function createBroadLeafTree(random = true) {
  return createConiferTree(random);
}
