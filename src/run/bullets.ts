import * as THREE from 'three';

import * as dim from '#dimensions';

import { hitObject, objectsGroup } from './objects';
import { Circle, getBulletData, getObjectData, type BulletData, type PlayerData } from './types';

import { setSpriteMaterial } from './three/materials';
import {
  createSpriteObject,
  getExtentTranslatedToPosition,
  intersects,
  scaleSpriteInPlace,
} from './three/resources';
import { getObjectX, getObjectZ, resetGroup } from './three/tools';

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

  // bullets start in front of the player
  bullet.position.z = -bulletsGroup.position.z + player.position.z + pData.extent2d.min.y;
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

const _box1 = new THREE.Box2();
const _box2 = new THREE.Box2();
const _circle1 = new Circle();
const _circle2 = new Circle();

/**
 * With this bullet having moved deltaZ in the last step, check if it's hit any object.
 */
function checkBulletHit(bullet: THREE.Object3D, deltaZ: number) {
  const bData = getBulletData(bullet);

  const bulletButt = getObjectZ(bullet);
  const bulletTip = bulletButt - bData.length - deltaZ;

  // check all objects
  for (const obj of objectsGroup.children) {
    const objCenterZ = getObjectZ(obj);
    const oData = getObjectData(obj);
    const objFar = objCenterZ + oData.extent2d.min.y;
    const objNear = objCenterZ + oData.extent2d.max.y;

    if (objNear < bulletTip) return; // we're done, remaining objects are too far for this bullet to hit

    if (
      objFar < bulletButt &&
      intersects(
        getExtentTranslatedToPosition(obj, oData.extent2d, _box1, _circle1),
        getExtentTranslatedToPosition(bullet, bData.extent2d, _box2, _circle2),
      )
    ) {
      const isHit = hitObject(obj, bData.hitPoints);
      if (isHit) {
        killBullet(bullet, bData);
      }
    }
  }
}

function killBullet(bullet: THREE.Object3D, bData: BulletData) {
  bData.dying = true;
  setSpriteMaterial(bullet, bData.dyingMaterial);
  scaleSpriteInPlace(bullet, 2);
  setTimeout(() => bullet.removeFromParent(), dim.playerBulletDyingDuration * 1000);
}
