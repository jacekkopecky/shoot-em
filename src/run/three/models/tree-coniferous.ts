import * as THREE from 'three';

import * as dim from '#dimensions';
import { random, randomItem, range } from '#utils';

import { Circle } from '../../types';
import * as mat from '../materials';

const greens = [mat.colorMaterials.green3, mat.colorMaterials.green2];
const trunkMaterial = mat.colorMaterials.brown3;

const coniferSegments = 5;
const coniferTrunkFraction = 0.2;

const [coniferDiameter, coniferHeight] = dim.modelSizes.conifer;

const coniferVariations = 5;

const coniferTrunkRadius = (coniferDiameter / 2) * 0.3;
const coniferMinCrownHeight = coniferHeight * (1 - coniferTrunkFraction);
const coniferCrowns = [
  ...range(coniferVariations).map((i) => {
    const height = coniferMinCrownHeight * 1.11 ** i;

    return [
      ...range(coniferSegments).map((j) => {
        const distanceFromTop = height * (1 - 0.9 ** (coniferSegments - 1 - j));
        const ratio = 0.8 ** j;
        const r = (coniferDiameter / 2) * ratio ** 0.55;
        const h = height * ratio - distanceFromTop;
        const bottom = height - distanceFromTop - h;
        return new THREE.ConeGeometry(r, h, 4, 1, j > 0).translate(0, h / 2 + bottom, 0);
      }),
    ];
  }),
];

const coniferDeadBranches = [
  ...range(coniferSegments * 2).map((i) => {
    const height = coniferMinCrownHeight;
    const distanceFromTop = height * (1 - 0.9 ** (coniferSegments - 1 - i));
    const ratio = 0.8 ** i;
    const r = (coniferDiameter / 2) * ratio ** 0.55;
    const h = height * ratio - distanceFromTop;
    const bottom = height - distanceFromTop - h;

    const thickness = Math.min(
      coniferTrunkRadius * (1 - bottom / height) * 0.8,
      coniferTrunkRadius / 2,
    );

    return new THREE.CylinderGeometry(thickness, thickness / 3, r, 4, 1)
      .rotateY(Math.PI / 4)
      .rotateZ(Math.PI / 2)
      .translate(r / 2, bottom, 0)
      .rotateY(((Math.PI * 4) / coniferSegments) * i);
  }),
];

const coniferTrunk = new THREE.ConeGeometry(coniferTrunkRadius, coniferHeight, 4) //
  .translate(0, coniferHeight / 2, 0);

export function createConiferTree(isRandom = true) {
  const retval = new THREE.Group();
  if (isRandom) retval.rotation.y = random() * Math.PI;

  const crownGeometries = isRandom ? randomItem(coniferCrowns) : coniferCrowns[0]!;

  for (let i = 0; i < crownGeometries.length; i += 1) {
    const material = greens[i % greens.length]!;
    const obj = new THREE.Mesh(crownGeometries[i], material);
    obj.position.y = coniferHeight * coniferTrunkFraction;
    retval.add(obj);
  }

  // trunk
  retval.add(new THREE.Mesh(coniferTrunk, trunkMaterial));

  retval.userData.extent2d = new Circle(undefined, coniferDiameter / 2);
  retval.userData.type = 'object';

  return retval;
}

export function createDeadConiferTree() {
  const retval = new THREE.Group();

  for (const branchGeo of coniferDeadBranches) {
    const obj = new THREE.Mesh(branchGeo, trunkMaterial);
    obj.position.y = coniferHeight * coniferTrunkFraction;
    retval.add(obj);
  }

  retval.add(new THREE.Mesh(coniferTrunk, trunkMaterial));

  retval.userData.extent2d = new Circle(undefined, coniferDiameter / 2);
  retval.userData.type = 'object';

  return retval;
}
