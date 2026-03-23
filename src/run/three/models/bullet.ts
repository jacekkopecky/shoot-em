import * as THREE from 'three';

import * as dim from '#dimensions';

import { setSpriteMaterial } from '../materials';
import {
  createSpriteObject,
  getDyingMaterial,
  markAsDying,
  scaleSpriteInPlace,
} from '../resources';

export function createBullet(player: THREE.Object3D): THREE.Object3D {
  const bullet = createSpriteObject('bullet');
  bullet.translateY(player.scale.y / 2);
  return bullet;
}

export function killBullet(bullet: THREE.Object3D) {
  markAsDying(bullet);
  setSpriteMaterial(bullet, getDyingMaterial(bullet));
  scaleSpriteInPlace(bullet, 2);
  setTimeout(() => bullet.removeFromParent(), dim.playerBulletDyingDuration * 1000);
}
