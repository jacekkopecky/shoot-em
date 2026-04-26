import * as THREE from 'three';

import * as dim from '#dimensions';
import { random } from '#utils';

import { giveAward } from './awards';
import { getObjectData } from './types';

import { createObject, killObject } from './three/run-objects';
import { isDying, scaleExtent } from './three/resources';
import { resetGroup, removeGroupChildrenBehindCamera } from './three/tools';

export const objectsGroup = new THREE.Group();

export function setupObjects(opts: { onFinish: () => void }) {
  resetGroup(objectsGroup);

  const objects: THREE.Object3D[] = [];
  for (let i = 0; i < dim.N; i++) {
    const x = random() * 80 - 40;
    const y = -(dim.trackLength / dim.N) * i - dim.startDistance;

    const r = random();
    const type =
      r < dim.gemProbability
        ? 'gems'
        : r < dim.gemProbability + dim.coinProbability
          ? 'coins'
          : 'tree';

    const obj = createObject(type);
    const oData = getObjectData(obj);
    obj.position.x = x;
    obj.position.z = y;

    switch (type) {
      case 'gems':
        oData.hitPoints = dim.gemHitPoints;
        oData.benign = true;
        oData.award = { type: 'gem', amount: 1 };
        oData.useForAward = true;
        break;
      case 'coins':
        oData.collectible = true;
        oData.award = { type: 'coin', amount: Math.floor(random() * dim.coinAwardMax + 1) };
        // make the reach of coins bigger to be easier to collect
        scaleExtent(oData.extent2d, 3);
        break;
      default:
        oData.hitPoints = dim.objectHitPoints;
        // let the player "rub shoulders" with the object
        scaleExtent(oData.extent2d, 0.9);
    }
    obj.userData.maxZ = obj.position.z + oData.extent2d.max.y;
    objects.push(obj);
  }

  const endGate = createObject('gate', 'end', opts.onFinish);
  endGate.userData.maxZ = -(dim.trackLength + dim.startDistance + dim.endDistance);
  endGate.translateZ(endGate.userData.maxZ);
  getObjectData(endGate).hitPoints = Infinity; // make the gate swallow bullets
  objects.push(endGate);

  const otherGate = createObject('gate', 'other', () => {});
  otherGate.userData.maxZ = -dim.trackLength / 4;
  otherGate.translateZ(otherGate.userData.maxZ);
  getObjectData(otherGate).collectible = true;
  objects.push(otherGate);

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
  if (isDying(obj)) return false;

  const oData = getObjectData(obj);

  // cannot shoot a collectible
  if (!playerHit && oData.collectible) return false;

  oData.hitPoints -= hitPoints;

  if (
    oData.collectible ||
    oData.hitPoints <= 0 ||
    (oData.benign && playerHit && oData.hitPoints !== Infinity)
  ) {
    const givingAward = oData.award && !(oData.benign && playerHit);
    killObject(obj, givingAward);

    // give the award, but not from benign objects when we walk into them
    if (givingAward) giveAward(obj, oData);
  }

  return true;
}
