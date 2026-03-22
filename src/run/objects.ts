import * as THREE from 'three';

import * as dim from '#dimensions';
import { getObjectData, type ObjectData } from './types';

import { giveAward } from './awards';

import { setSpriteMaterial } from './three/materials';
import { createSpriteObject, scaleExtent } from './three/resources';
import { resetGroup, removeGroupChildrenBehindCamera } from './three/tools';
import { shrinkToGone } from './utils/animations';

export const objectsGroup = new THREE.Group();

export function setupObjects() {
  resetGroup(objectsGroup);

  const objects: THREE.Object3D[] = [];
  for (let i = 0; i < dim.N; i++) {
    const x = Math.random() * 80 - 40;
    const y = -(dim.trackLength / dim.N) * i + dim.startDistance;

    const r = Math.random();
    const type =
      r < dim.gemProbability
        ? 'gems'
        : r < dim.gemProbability + dim.coinProbability
          ? 'coins'
          : Math.random() < 0.5
            ? 'tree1'
            : 'tree2';

    const obj = createSpriteObject(type, { dataType: 'object' });
    const oData = getObjectData(obj);
    obj.position.x = x;
    obj.position.z = y;

    switch (type) {
      case 'gems':
        oData.hitPoints = dim.gemHitPoints;
        oData.benign = true;
        oData.award = { type: 'gem', amount: 1 };
        break;
      case 'coins':
        oData.collectible = true;
        oData.award = { type: 'coin', amount: Math.floor(Math.random() * dim.coinAwardMax + 1) };
        // make the reach of coins bigger to be easier to collect
        scaleExtent(oData.extent2d, 2);
        break;
      default:
        oData.hitPoints = dim.objectHitPoints;
        // let the player "rub shoulders" with the object
        scaleExtent(oData.extent2d, 0.8);
    }
    obj.userData.maxZ = obj.position.z + oData.extent2d.max.y;
    objects.push(obj);
  }

  objects.sort(compareByMaxZ);

  for (const obj of objects) {
    objectsGroup.add(obj);
  }
}

// order by maxZ from largest to smallest
function compareByMaxZ(a: THREE.Object3D, b: THREE.Object3D) {
  return b.userData.maxZ - a.userData.maxZ;
}

export function moveObjects(delta: number) {
  const deltaZ = dim.objectSpeedPerSecond * delta;
  objectsGroup.position.z += deltaZ;

  removeGroupChildrenBehindCamera(objectsGroup);
}

export function hitObject(obj: THREE.Object3D, hitPoints: number, playerHit = false): boolean {
  const oData = getObjectData(obj);
  if (oData.dying) return false;

  // cannot shoot a collectible
  if (!playerHit && oData.collectible) return false;

  oData.hitPoints -= hitPoints;

  if (oData.collectible || oData.hitPoints <= 0) {
    killObject(obj, oData);

    // give the award, but not from benign objects when we walk into them
    if (oData.award && !(oData.benign && playerHit)) giveAward(oData.award, obj);
  }

  return true;
}

function killObject(obj: THREE.Object3D, oData: ObjectData) {
  oData.dying = true;
  setSpriteMaterial(obj, oData.dyingMaterial);
  shrinkToGone(obj, dim.objectDyingDuration);
}
