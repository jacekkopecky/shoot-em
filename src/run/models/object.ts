import * as THREE from 'three';

import * as dim from '#dimensions';

import { shrinkToGone } from '../three/animations';
import { setSpriteMaterial } from '../three/materials';
import { createSpriteObject, getDyingMaterial, markAsDying } from '../three/resources';

export function createObject(type: string): THREE.Object3D {
  return createSpriteObject(type, { dataType: 'object' });
}

export function killObject(obj: THREE.Object3D) {
  markAsDying(obj);
  setSpriteMaterial(obj, getDyingMaterial(obj));
  shrinkToGone(obj, dim.objectDyingDuration);
}
