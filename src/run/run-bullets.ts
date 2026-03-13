import * as THREE from 'three';

import * as dim from '../dimensions.js';
import { getObjectX, getObjectZ, resetGroup } from '../three.js';
import { createObject, doObjectsOverlapInX } from '../three-resources.js';
import { getBulletData, type PlayerData } from '../types.js';

import { hitObject, objectsGroup } from './run-objects.js';

export const bulletsGroup = new THREE.Group();

export function setupBullets() {
  resetGroup(bulletsGroup);
}

export function createPlayerBullet(
  player: THREE.Object3D<THREE.Object3DEventMap>,
  pData: PlayerData,
) {
  const bullet = createObject('bullet', { y: player.scale.y / 2 });
  const bData = getBulletData(bullet);
  bData.minZ = bulletsGroup.position.z - pData.range;
  bData.length = pData.bulletLength;
  bData.hitPoints = dim.playerBulletHitPoints;
  bData.width = 0; // let bullets just graze the target without hitting it

  // bullets start in front of the player
  bullet.position.z = -bulletsGroup.position.z - pData.depth;
  bullet.position.x = getObjectX(player);

  bulletsGroup.add(bullet);
}

export function movePlayerBullets(delta: number) {
  const deltaZ = dim.playerBulletSpeed * delta;

  const toRemove = [];
  for (const bullet of bulletsGroup.children) {
    if (checkBulletHit(bullet, deltaZ)) {
      toRemove.push(bullet);
    }
  }

  bulletsGroup.position.z -= deltaZ;
  const bulletsZ = bulletsGroup.position.z;

  // remove bullets that are now past their range
  for (const bullet of bulletsGroup.children) {
    const bData = getBulletData(bullet);
    if (bulletsZ < bData.minZ) {
      toRemove.push(bullet);
    } else {
      // the bullets are sorted by minZ so no further bullets will be removed
      break;
    }
  }

  // sweep dying bullets to remove them outside loops going through bullets
  for (const bullet of toRemove) {
    bullet.removeFromParent();
  }
}

/**
 * With this bullet having moved deltaZ in the last step, check if it's hit any object.
 */
function checkBulletHit(bullet: THREE.Object3D, deltaZ: number): boolean {
  const bData = getBulletData(bullet);

  const bulletButt = getObjectZ(bullet);
  const bulletTip = bulletButt - bData.length - deltaZ;

  // check all objects
  for (const obj of objectsGroup.children) {
    const objZ = getObjectZ(obj);
    if (objZ < bulletTip) return false; // we're done, remaining objects are too far for this bullet to hit

    if (objZ < bulletButt && doObjectsOverlapInX(obj, bullet)) {
      const isHit = hitObject(obj, bData.hitPoints);
      if (isHit) {
        return true;
      }
    }
  }
  return false;
}
