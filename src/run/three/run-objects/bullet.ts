import * as THREE from 'three';

import * as dim from '#dimensions';

import { createSpriteObject, markAsDying } from '../resources';
import { createBulletModel } from '../models';
import { Circle } from '../../types';

export function createBullet(player: THREE.Object3D): THREE.Object3D {
  const bullet = createBulletModel();
  bullet.userData.extent2d = new Circle(undefined, dim.modelSizes.bullet[1] / 2);
  bullet.userData.type = 'bullet';
  bullet.translateY(player.userData.gunHeight ?? dim.modelSizes.player[1] / 2);
  return bullet;
}

export function killBullet(bullet: THREE.Object3D) {
  const explosion = createSpriteObject('bulletDying', { dataType: 'bullet', y: 0 });
  explosion.position.copy(bullet.position);
  explosion.position.z += bullet.userData.extent2d.max.y;
  markAsDying(explosion);
  bullet.parent!.add(explosion);
  bullet.removeFromParent();
  setTimeout(() => explosion.removeFromParent(), dim.playerBulletDyingDuration * 1000);
}
