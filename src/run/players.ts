import * as THREE from 'three';

import * as dim from '../dimensions';
import { readState } from '../state';
import { getObjectData, getPlayerData, getPlayerGroupData, type PlayerData } from '../types';
import { applyUpgrade } from '../upgrades';

import { createPlayerBullet } from './bullets';
import { dyingGroup } from './dying-group';
import { hitObject, objectsGroup } from './objects';

import { getObjectZ, resetGroup } from './three/three';
import { setSpriteMaterial } from './three/three-materials';
import { createSpriteObject, doObjectsOverlapInX, getObjectWidth } from './three/three-resources';
import { pulseAndShrinkToGone, shrinkToGone } from './utils/animations';

export const playersGroup = new THREE.Group();
playersGroup.userData.type = 'playersGroup';

export function setupPlayers() {
  resetGroup(playersGroup);

  const player = createSpriteObject('player');
  const pData = getPlayerData(player);

  const state = readState();
  const shotsPerSecond = applyUpgrade(dim.playerShotsPerSecond, state.nextRunUpgrades.rate);
  pData.shotTime = 1 / shotsPerSecond;
  pData.remainingShotTime = pData.shotTime / 2;

  pData.range = dim.playerBulletRange;
  pData.bulletLength = dim.playerBulletLength;
  pData.bulletHitPoints = applyUpgrade(dim.playerBulletHitPoints, state.nextRunUpgrades.damage);

  pData.hitPoints = dim.playerHitPoints;
  playersGroup.add(player);

  const pgData = getPlayerGroupData(playersGroup);
  pgData.width = pData.width;
}

function repositionPlayers() {
  // todo
  // depending on the zone we are on:
  // normal: re-center the players in a group (and shift center?)
  // end-blocks: do not recenter
  //
  // if recentering, give players (except dying ones) target X and Z, every time players move move them towards it
  // todo also run this function when we change zone
}

export function updatePlayerPosition(playerPosFraction: number) {
  const availableWidth = dim.trackWidth - getObjectWidth(playersGroup);
  const x = (playerPosFraction - 0.5) * availableWidth;
  playersGroup.position.x = x;
}

function killPlayer(player: THREE.Object3D, pData: PlayerData) {
  pData.dying = true;
  setSpriteMaterial(player, pData.dyingMaterial);
  shrinkToGone(player, dim.playerDyingDuration / 2);

  // the player will be swept into the dying group after all updates

  // add fire for extra effect
  const fire = createSpriteObject('fire');
  pulseAndShrinkToGone(fire, dim.playerDyingDuration);
  dyingGroup.add(fire);
  fire.position.copy(player.position);
  fire.position.z += 0.01; // in front of the player
  fire.position.add(playersGroup.position);
  fire.position.sub(dyingGroup.position);
}

export function playerShoot(delta: number) {
  for (const player of playersGroup.children) {
    const pData = getPlayerData(player);
    if (pData.dying) continue; // next player

    pData.remainingShotTime -= delta;
    if (pData.remainingShotTime <= 0) {
      pData.remainingShotTime += pData.shotTime;

      createPlayerBullet(player, pData);
    }
  }
}

function checkPlayerHit(player: THREE.Object3D) {
  const pData = getPlayerData(player);

  if (pData.dying) return;

  const playerNear = getObjectZ(player);
  const playerFar = playerNear - pData.depth;

  // check all objects
  for (const obj of objectsGroup.children) {
    const oData = getObjectData(obj);
    const objNear = getObjectZ(obj);
    const objFar = objNear - oData.depth;

    if (objNear < playerFar) return; // we're done, remaining objects are too far to hit this player

    // use 0.8 reach to allow the player to rub shoulders with objects
    if (objFar < playerNear && doObjectsOverlapInX(obj, player, 0.8)) {
      const objHP = oData.hitPoints;
      const isHit = hitObject(obj, pData.hitPoints, true);
      if (isHit && !oData.collectible && !oData.benign) {
        pData.hitPoints -= objHP;
      }

      if (pData.hitPoints <= 0) {
        killPlayer(player, pData);
        repositionPlayers();
        return; // this player is done
      }
    }
  }
}

export function checkPlayersHit() {
  for (const player of playersGroup.children) {
    checkPlayerHit(player);
  }
}
