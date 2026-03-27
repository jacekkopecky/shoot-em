import * as THREE from 'three';
import * as BufferGeometryUtils from 'three/addons/utils/BufferGeometryUtils.js';

import * as dim from '#dimensions';
import { random, randomItem, range } from '#utils';

import { Circle } from '../../types';
import * as mat from '../materials';

const [crownDiameter, fullHeight] = dim.modelSizes.broadLeaf;

const trunkFraction = 0.3;
const trunkRadius = (crownDiameter / 2) * 0.35;
const minCrownHeight = fullHeight * (1 - trunkFraction);

const trunkMaterial = mat.colorMaterials.brown3;

function height(i: number) {
  return (minCrownHeight / crownDiameter) ** (1 - i);
}

const heightVariations = 5;
const crowns = [
  ...range(heightVariations).map((i) => {
    const geo = new THREE.IcosahedronGeometry(crownDiameter / 2, 1).scale(1, height(i), 1);
    geo.computeBoundingBox();
    return geo;
  }),
];

// prettier-ignore
const branchDefinitions : BranchInfo = [
  0, fullHeight, trunkRadius, 0, 0, 0, [
  [ trunkFraction, fullHeight/2, trunkRadius/3, 0, 60, 90, [
    [0.3, fullHeight/4, trunkRadius/6, 0, 60, 140],
    [0.4, fullHeight/4, trunkRadius/6, 0, 80, -100],
  ]],
  [ trunkFraction+0.1, fullHeight/2, trunkRadius/3, 0, 60, -135, [
    [0.2, fullHeight/4, trunkRadius/5, 0, 40, -90],
    [0.4, fullHeight/4, trunkRadius/6, 0, 40, 150],
  ]],
  [ trunkFraction+0.1, fullHeight/2, trunkRadius/3, 0, 60, -20, [
    [0.3, fullHeight/4, trunkRadius/6, 0, 60, 90],
    [0.4, fullHeight/4, trunkRadius/7, 0, 70, -90],
  ]],
  [ 0.7, fullHeight/4, trunkRadius/5, 0, 80, 15],
  [ 0.75, fullHeight/5, trunkRadius/5, 0, 80, -105],
  [ 0.60, fullHeight/4, trunkRadius/5, 0, 70, 135],
]]

const deadTree = makeBranch(...branchDefinitions, true);

const trunk = new THREE.ConeGeometry(trunkRadius, fullHeight, 4) //
  .translate(0, fullHeight / 2, 0);

export function createBroadLeafTree(isRandom = true) {
  // vary the height
  const crownGeometry = isRandom ? randomItem(crowns) : crowns[0]!;
  const bottom = fullHeight * trunkFraction;

  const retval = new THREE.Group();
  if (isRandom) retval.rotation.y = random() * Math.PI;

  const crown = new THREE.Mesh(crownGeometry, mat.colorMaterials.green2);
  crown.position.set(0, bottom - crownGeometry.boundingBox!.min.y, 0);
  retval.add(crown);

  retval.add(new THREE.Mesh(trunk, mat.colorMaterials.brown3));

  retval.userData.extent2d = new Circle(undefined, crownDiameter / 2);
  retval.userData.type = 'object';

  retval.userData._crownIndex = crowns.indexOf(crownGeometry);

  return retval;
}

export function createDeadBroadLeafTree() {
  const retval = new THREE.Mesh(deadTree, trunkMaterial);

  retval.userData.extent2d = new Circle(undefined, crownDiameter / 2);
  retval.userData.type = 'object';

  return retval;
}

type BranchInfo = [
  posFraction: number,
  l: number,
  t1: number,
  t2: number,
  xRot: number,
  yRot: number,
  subBranches?: BranchInfo[],
];

function makeBranch(
  h: number,
  l: number,
  t1: number,
  t2: number,
  xRot: number,
  yRot: number,
  subBranches?: BranchInfo[],
  closedEnded = false,
): THREE.BufferGeometry {
  const branches = [];
  branches.push(new THREE.CylinderGeometry(t2, t1, l, 3, 1, !closedEnded).translate(0, l / 2, 0));

  if (subBranches) {
    for (const [posFraction, ...subData] of subBranches) {
      branches.push(makeBranch(l * posFraction, ...subData));
    }
  }

  return BufferGeometryUtils.mergeGeometries(branches)
    .rotateX((xRot / 180) * Math.PI)
    .rotateY((yRot / 180) * Math.PI)
    .translate(0, h, 0);
}
