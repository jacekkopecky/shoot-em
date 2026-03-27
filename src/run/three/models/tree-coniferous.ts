import * as THREE from 'three';
import * as BufferGeometryUtils from 'three/addons/utils/BufferGeometryUtils.js';

import * as dim from '#dimensions';
import { random, randomItem, range } from '#utils';

import { Circle } from '../../types';
import * as mat from '../materials';

const greens = [mat.colorMaterials.green3, mat.colorMaterials.green2];
const trunkMaterial = mat.colorMaterials.brown3;

const crownSegments = 5;
const trunkFraction = 0.2;

const [crownDiameter, fullHeight] = dim.modelSizes.conifer;

const heightVariations = 5;

const trunkRadius = (crownDiameter / 2) * 0.3;
const minCrownHeight = fullHeight * (1 - trunkFraction);
const crownBottom = trunkFraction * fullHeight;
const crowns = [
  ...range(heightVariations).map((i) => {
    const height = minCrownHeight * 1.11 ** i;

    return [
      ...range(crownSegments).map((j) => {
        const distanceFromTop = height * (1 - 0.9 ** (crownSegments - 1 - j));
        const ratio = 0.8 ** j;
        const r = (crownDiameter / 2) * ratio ** 0.55;
        const h = height * ratio - distanceFromTop;
        const bottom = height - distanceFromTop - h;
        return new THREE.ConeGeometry(r, h, 4, 1, j > 0).translate(0, h / 2 + bottom, 0);
      }),
    ];
  }),
];

const trunk = new THREE.ConeGeometry(trunkRadius, fullHeight, 4) //
  .translate(0, fullHeight / 2, 0);

// make the deadTree as a single geometry with the branches and the trunk
const deadTree = BufferGeometryUtils.mergeGeometries([
  trunk,
  ...range(crownSegments * 2).map((i) => {
    const height = minCrownHeight;
    const distanceFromTop = height * (1 - 0.9 ** (crownSegments - 1 - i));
    const ratio = 0.8 ** i;
    const r = (crownDiameter / 2) * ratio ** 0.55;
    const h = height * ratio - distanceFromTop;
    const bottom = height - distanceFromTop - h;

    const thickness = Math.min(trunkRadius * (1 - bottom / height) * 0.8, trunkRadius / 2);

    return new THREE.CylinderGeometry(thickness, thickness / 3, r, 4, 1)
      .rotateY(Math.PI / 4)
      .rotateZ(Math.PI / 2)
      .translate(r / 2, bottom + crownBottom, 0)
      .rotateY(((Math.PI * 4) / crownSegments) * i);
  }),
]);

export function createConiferTree(isRandom = true) {
  const retval = new THREE.Group();
  if (isRandom) retval.rotation.y = random() * Math.PI;

  const crownGeometries = isRandom ? randomItem(crowns) : crowns[0]!;

  for (let i = 0; i < crownGeometries.length; i += 1) {
    const material = greens[i % greens.length]!;
    const obj = new THREE.Mesh(crownGeometries[i], material);
    obj.position.y = crownBottom;
    retval.add(obj);
  }

  // trunk
  retval.add(new THREE.Mesh(trunk, trunkMaterial));

  retval.userData.extent2d = new Circle(undefined, crownDiameter / 2);
  retval.userData.type = 'object';

  return retval;
}

export function createDeadConiferTree() {
  const retval = new THREE.Mesh(deadTree, trunkMaterial);

  retval.userData.extent2d = new Circle(undefined, crownDiameter / 2);
  retval.userData.type = 'object';

  return retval;
}
