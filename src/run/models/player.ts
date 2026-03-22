import * as THREE from 'three';

import * as dim from '#dimensions';

import { pulseAndShrinkToGone, shrinkToGone } from '../three/animations';
import { setSpriteMaterial } from '../three/materials';
import { createSpriteObject, getDyingMaterial, markAsDying } from '../three/resources';

export function createPlayer(): THREE.Object3D {
  return createSpriteObject('player');
}

export function killPlayer(player: THREE.Object3D) {
  markAsDying(player);
  setSpriteMaterial(player, getDyingMaterial(player));
  shrinkToGone(player, dim.playerDyingDuration / 2);

  // add fire for extra effect
  const fire = createSpriteObject('fire');
  pulseAndShrinkToGone(fire, dim.playerDyingDuration);
  fire.position.copy(player.position);
  fire.position.z += 0.01; // in front of the player
  markAsDying(fire);
  player.parent!.add(fire);
}
