import * as THREE from 'three';

import * as dim from '#dimensions';
import { random } from '#utils';

import { rotateAwayAndShrinkToGone } from '../animations';

import { createConiferTree, createDeadConiferTree } from './tree-coniferous';
import { createBroadLeafTree, createDeadBroadLeafTree } from './tree-broadleaf';

export function createRandomTree(isConifer = random() < 0.5): THREE.Object3D {
  const retval = isConifer ? createConiferTree() : createBroadLeafTree();
  retval.userData._createRandomTree_isConifer = isConifer;
  return retval;
}

export function killTree(obj: THREE.Object3D) {
  const deadTree = obj.userData._createRandomTree_isConifer
    ? createDeadConiferTree()
    : createDeadBroadLeafTree();
  deadTree.position.copy(obj.position);
  deadTree.scale.copy(obj.scale);
  deadTree.rotation.copy(obj.rotation);
  deadTree.userData = obj.userData;
  rotateAwayAndShrinkToGone(deadTree, dim.objectDyingDuration);
  obj.parent!.add(deadTree);
  obj.removeFromParent();
}

export { createConiferTree, createBroadLeafTree, createDeadConiferTree, createDeadBroadLeafTree };
