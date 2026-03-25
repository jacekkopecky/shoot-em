import * as THREE from 'three';

import * as dim from '#dimensions';
import { random, randomItem, range } from '#utils';

import { Circle } from '../../types';
import * as mat from '../materials';

const [broadLeafDiameter, broadLeafHeight] = dim.modelSizes.broadLeaf;

const broadLeafTrunkFraction = 0.3;
const broadLeafMinCrownHeight = broadLeafHeight * (1 - broadLeafTrunkFraction);

const broadLeafVariations = 5;
const broadLeafCrowns = [
  ...range(broadLeafVariations).map((i) => {
    const height = (broadLeafMinCrownHeight / broadLeafDiameter) ** (1 - i);
    const geo = new THREE.IcosahedronGeometry(broadLeafDiameter / 2, 1).scale(1, height, 1);
    geo.computeBoundingBox();
    return geo;
  }),
];

const broadLeafTrunk = new THREE.ConeGeometry(
  (broadLeafDiameter / 2) * 0.35,
  broadLeafHeight,
  4,
).translate(0, broadLeafHeight / 2, 0);

export function createBroadLeafTree(isRandom = true) {
  // vary the height
  const crownGeometry = isRandom ? randomItem(broadLeafCrowns) : broadLeafCrowns[0]!;
  const bottom = broadLeafHeight * broadLeafTrunkFraction;

  const retval = new THREE.Group();
  if (isRandom) retval.rotation.y = random() * Math.PI;

  const crown = new THREE.Mesh(crownGeometry, mat.colorMaterials.green2);
  crown.position.set(0, bottom - crownGeometry.boundingBox!.min.y, 0);
  retval.add(crown);

  retval.add(new THREE.Mesh(broadLeafTrunk, mat.colorMaterials.brown3));

  retval.userData.extent2d = new Circle(undefined, broadLeafDiameter / 2);
  retval.userData.type = 'object';

  return retval;
}
