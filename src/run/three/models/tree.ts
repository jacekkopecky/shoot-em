import * as THREE from 'three';

import { random } from '#utils';

import { createConiferTree } from './tree-coniferous';
import { createBroadLeafTree } from './tree-broadleaf';

export function createRandomTree(conifer = random() < 0.5): THREE.Object3D {
  return conifer ? createConiferTree() : createBroadLeafTree();
}

export { createConiferTree, createBroadLeafTree };
