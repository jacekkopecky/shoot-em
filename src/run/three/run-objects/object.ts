import * as THREE from 'three';

import * as dim from '#dimensions';

import { shrinkToGone } from '../animations';
import { setSpriteMaterial } from '../materials';
import { createSpriteObject, getDyingMaterial, markAsDying } from '../resources';
import { isSprite } from '../tools';

import { createGem, killGem } from './gems';
import { createRandomTree, killTree } from './tree';

export function createObject(type: string): THREE.Object3D {
  const retval =
    type === 'tree'
      ? createRandomTree()
      : type === 'gems'
        ? createGem()
        : createSpriteObject(type, { dataType: 'object' });
  retval.userData._createObject_type = type;
  return retval;
}

export function killObject(obj: THREE.Object3D, givingAward = false) {
  markAsDying(obj);
  if (isSprite(obj)) {
    setSpriteMaterial(obj, getDyingMaterial(obj));
    shrinkToGone(obj, dim.objectDyingDuration);
  } else if (obj.userData._createObject_type === 'tree') {
    killTree(obj);
  } else if (obj.userData._createObject_type === 'gems') {
    killGem(obj, givingAward);
  }
}
