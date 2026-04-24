import * as THREE from 'three';

import * as dim from '#dimensions';

import { createGateModel } from '../models';

export function createGate(type: dim.Gate, callback: (player?: THREE.Object3D) => void) {
  const { w, color } = dim.gateTypes[type];
  const gate = createGateModel(w, color);

  gate.userData.extent2d = new THREE.Box2(
    new THREE.Vector2(-w / 2, -1),
    new THREE.Vector2(w / 2, 1),
  );
  gate.userData.type = 'object';
  gate.userData.callback = callback;
  gate.userData.benign = true;

  return gate;
}
