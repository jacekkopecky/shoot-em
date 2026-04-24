import * as THREE from 'three';

import * as dim from '#dimensions';

import { markAsDying } from '../resources';
import { createBulletModel, explosionTemplate } from '../models';
import { Circle } from '../../types';
import { rotateAlways } from '../animations';

export function createBullet(player: THREE.Object3D): THREE.Object3D {
  const bullet = createBulletModel();
  bullet.userData.extent2d = new Circle(undefined, dim.modelSizes.bullet[1] / 2);
  bullet.userData.type = 'bullet';
  bullet.translateY(player.userData.gunHeight ?? dim.modelSizes.player[1] / 2);

  const action = rotateAlways(bullet, dim.bulletRotationsPerSecond, 'z');
  bullet.addEventListener('removed', () => action.stop());

  return bullet;
}

export function killBullet(bullet: THREE.Object3D) {
  if (bullet instanceof THREE.Mesh) {
    bullet.geometry = explosionTemplate.geometry;
    bullet.material = explosionTemplate.material;
  }

  markAsDying(bullet);

  setTimeout(() => bullet.removeFromParent(), dim.playerBulletDyingDuration * 1000);
}
