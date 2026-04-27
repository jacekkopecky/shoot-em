import * as THREE from 'three';

import * as dim from '#dimensions';

import { shrinkToGone } from '../animations';
import { colorFlatMaterials } from '../materials';
import { createBoulderModel } from '../models';

const boulderColors = [
  colorFlatMaterials.beige1,
  colorFlatMaterials.brown1,
  colorFlatMaterials.brown3,
];

export function createEndBlock(stageFraction: number) {
  const material =
    boulderColors[
      Math.min(boulderColors.length - 1, Math.floor(stageFraction * boulderColors.length))
    ];
  const block = createBoulderModel(material);
  const [w] = dim.modelSizes.boulder;
  console.log(w);

  block.userData.extent2d = new THREE.Box2(
    new THREE.Vector2(-w / 2, -w / 2),
    new THREE.Vector2(w / 2, w / 2),
  );
  block.userData.type = 'object';

  return block;
}

export function killEndBlock(obj: THREE.Object3D) {
  shrinkToGone(obj, dim.objectDyingDuration);
}
