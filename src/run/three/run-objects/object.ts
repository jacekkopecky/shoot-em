import * as THREE from 'three';

import { markAsDying } from '../resources';

import { createGate, killGate } from './gate';
import { createGem, killGem } from './gems';
import { createBag, killBag } from './money';
import { createRandomTree, killTree } from './tree';
import { createEndBlock, killEndBlock } from './end-blocks';

const typeFns = {
  tree: [createRandomTree, killTree],
  gems: [createGem, killGem],
  coins: [createBag, killBag],
  gate: [createGate, killGate],
  endBlock: [createEndBlock, killEndBlock],
} as const;

export function createObject<T extends keyof typeof typeFns>(
  type: T,
  ...args: Parameters<(typeof typeFns)[T][0]>
): THREE.Object3D {
  // @ts-expect-error ...args complains about the spread but it's OK
  const retval = typeFns[type][0](...args);
  retval.userData._createObject_type = type;
  return retval;
}

export function killObject(obj: THREE.Object3D, givingAward = false) {
  const type = obj.userData._createObject_type as keyof typeof typeFns;

  markAsDying(obj);
  typeFns[type][1](obj, givingAward);
}
