import * as THREE from 'three';

import * as dim from '#dimensions';
import { random } from '#utils';

import { shrinkToGone, rotateAlways } from '../animations';
import { createGem } from '../models';
import { Circle } from '../../types';

export function createGemObject() {
  const gem = createGem();

  gem.userData.extent2d = new Circle(undefined, dim.modelSizes.gem[0] / 2);
  gem.userData.type = 'object';

  gem.rotateY(random() * Math.PI);
  gem.castShadow = true;

  // tweak position so bullet hits look good
  gem.translateY(dim.modelSizes.player[1] / 2);

  const action = rotateAlways(gem, dim.gemRotationsPerSecond, 'y');
  gem.addEventListener('removed', () => action.stop());

  return gem;
}

export function killGem(obj: THREE.Object3D, givingAward = false) {
  if (!givingAward) {
    shrinkToGone(obj, dim.objectDyingDuration);
  }
  // else it will be used for giving the award so do nothing to it
}
