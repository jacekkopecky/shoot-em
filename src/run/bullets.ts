import * as THREE from 'three';

import * as dim from '../dimensions';
import { getBulletData, type BulletData, type PlayerData } from '../types';

import { getObjectX, getObjectZ, resetGroup } from './three/three';
import {
  createSpriteObject,
  doObjectsOverlapInX,
  scaleSpriteInPlace,
} from './three/three-resources';
import { setSpriteMaterial } from './three/three-materials';

import { hitObject, objectsGroup } from './objects';

export const bulletsGroup = new THREE.Group();

export function setupBullets() {
  resetGroup(bulletsGroup);
}

export function createPlayerBullet(
  player: THREE.Object3D<THREE.Object3DEventMap>,
  pData: PlayerData,
) {
  const bullet = createSpriteObject('bullet', { y: player.scale.y / 2 });
  const bData = getBulletData(bullet);
  bData.minZ = bulletsGroup.position.z - pData.range;
  bData.length = pData.bulletLength;
  bData.hitPoints = pData.bulletHitPoints;
  bData.width = 0; // let bullets just graze the target without hitting it

  // bullets start in front of the player
  bullet.position.z = -bulletsGroup.position.z - pData.depth;
  bullet.position.x = getObjectX(player);

  bulletsGroup.add(bullet);
}

export function movePlayerBullets(delta: number) {
  const deltaZ = dim.playerBulletSpeed * delta;

  for (const bullet of bulletsGroup.children) {
    checkBulletHit(bullet, deltaZ);
  }

  bulletsGroup.position.z -= deltaZ;
  const bulletsZ = bulletsGroup.position.z;

  // remove bullets that are now past their range
  const toRemove = [];
  for (const bullet of bulletsGroup.children) {
    const bData = getBulletData(bullet);
    if (bulletsZ >= bData.minZ) {
      // the bullets are sorted by minZ so no further bullets will be removed
      break;
    } else if (!bData.dying) {
      toRemove.push(bullet);
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
function checkBulletHit(bullet: THREE.Object3D, deltaZ: number) {
  const bData = getBulletData(bullet);

  const bulletButt = getObjectZ(bullet);
  const bulletTip = bulletButt - bData.length - deltaZ;

  // check all objects
  for (const obj of objectsGroup.children) {
    const objZ = getObjectZ(obj);
    if (objZ < bulletTip) return; // we're done, remaining objects are too far for this bullet to hit

    if (objZ < bulletButt && doObjectsOverlapInX(obj, bullet)) {
      const isHit = hitObject(obj, bData.hitPoints);
      if (isHit) {
        killBullet(bullet, bData);
      }
    }
  }
}

function killBullet(bullet: THREE.Object3D, bData: BulletData) {
  setSpriteMaterial(bullet, bData.dyingMaterial);
  scaleSpriteInPlace(bullet, 2);
  bData.dying = true;
  setTimeout(() => bullet.removeFromParent(), dim.playerBulletDyingDuration * 1000);
}
