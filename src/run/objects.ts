import * as THREE from 'three';

import { shrinkToGone } from './utils/animations';
import * as dim from '../dimensions';
import { resetGroup } from '../three';
import { setSpriteMaterial } from '../three-materials';
import { createObject } from '../three-resources';
import { getObjectData, type ObjectData } from '../types';

import { giveAward } from './awards';
import { removeGroupChildrenBehindCamera } from './utils/tools';

export const objectsGroup = new THREE.Group();

export function setupObjects() {
  resetGroup(objectsGroup);

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

    const obj = createObject(type, { dataType: 'object' });
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
        oData.depth *= 2;
        oData.width *= 2;
        break;
      default:
        oData.hitPoints = dim.objectHitPoints;
    }

    objectsGroup.add(obj);
  }
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
  setSpriteMaterial(obj, oData.dyingMaterial);
  oData.dying = true;
  shrinkToGone(obj, dim.objectDyingDuration);
}
