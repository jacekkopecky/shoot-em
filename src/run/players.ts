import * as THREE from 'three';

import * as dim from '#dimensions';

import { readState } from '../state';
import { applyUpgrade } from '../upgrades';

import { createPlayerBullet } from './bullets';
import { hitObject, objectsGroup } from './objects';
import { Circle, getObjectData, getPlayerData } from './types';

import { updateCameraPosition } from './three/camera';
import { getExtentTranslatedToPosition, intersects, isDying } from './three/resources';
import { createPlayer, killPlayer, setPlayerWalking, updatePlayer } from './three/run-objects';
import { getObjectZ, resetGroup } from './three/tools';

export const playersGroup = new THREE.Group();

export function setupPlayers() {
  resetGroup(playersGroup);

  const state = readState();
  const shotsPerSecond = applyUpgrade(dim.playerShotsPerSecond, state.nextRunUpgrades.rate);
  const players = applyUpgrade(1, state.nextRunUpgrades.player);

  for (let i = 0; i < players; i += 1) {
    const player = createPlayer();

    const { row, column } = generatePlayerPosition(i);
    player.position.z = row * 5;
    player.position.x = column * 12;

    const pData = getPlayerData(player);

    pData.shotTime = 1 / shotsPerSecond;
    pData.remainingShotTime = (pData.shotTime / players) * i + pData.shotTime / 2;

    pData.range = dim.playerBulletRange;
    pData.bulletHitPoints = applyUpgrade(dim.playerBulletHitPoints, state.nextRunUpgrades.damage);

    pData.hitPoints = dim.playerHitPoints;
    playersGroup.add(player);
  }

  computePlayersGroupMinMax(playersGroup);
  updateCameraPosition(0);
}

function generatePlayerPosition(i: number) {
  const row = Math.floor((Math.sqrt(1 + 8 * i) - 1) / 2);
  const inPreviousRows = row && (row * (row + 1)) / 2;
  const inCurrentRow = i + 1 - inPreviousRows;

  // start off-center in even rows
  const center = (row % 2) / 2;
  const awayFromCenter = Math.floor(inCurrentRow / 2) * ((inCurrentRow % 2) * 2 - 1);
  const column = center + awayFromCenter;

  return { row, column };
}

function computePlayersGroupMinMax(group: THREE.Group) {
  let minX = Infinity;
  let maxX = -Infinity;

  for (const player of group.children) {
    if (!isDying(player)) {
      const pmin = player.userData.extent2d.min.x + player.position.x;
      if (minX > pmin) minX = pmin;
      const pmax = player.userData.extent2d.max.x + player.position.x;
      if (maxX < pmax) maxX = pmax;
    }
  }

  if (minX < Infinity) {
    playersGroup.userData.minX = minX;
    playersGroup.userData.maxX = maxX;
  }
}

function repositionPlayers() {
  // todo
  // depending on the zone we are on:
  // normal: re-center the players in a group (and shift center?)
  // end-blocks: do not recenter
  //
  // if recentering, give players (except dying ones) target X and Z, every time players move move them towards it
  // todo also run this function when we change zone

  // for now, only recompute the width
  computePlayersGroupMinMax(playersGroup);
}

export function updatePlayerPosition(playerPosFraction: number) {
  const availableWidth = dim.trackWidth - playersGroup.userData.maxX + playersGroup.userData.minX;
  const x = playerPosFraction * availableWidth - dim.trackWidth / 2 - playersGroup.userData.minX;
  playersGroup.position.x = x;

  updateCameraPosition(x, true);
}

export function playerShoot(delta: number) {
  for (const player of playersGroup.children) {
    if (isDying(player)) continue; // next player

    const pData = getPlayerData(player);

    pData.remainingShotTime -= delta;
    if (pData.remainingShotTime <= 0) {
      pData.remainingShotTime += pData.shotTime;

      createPlayerBullet(player, pData);
    }
  }
}

const _box1 = new THREE.Box2();
const _box2 = new THREE.Box2();
const _circle1 = new Circle();
const _circle2 = new Circle();

function checkPlayerHit(player: THREE.Object3D) {
  const pData = getPlayerData(player);

  const playerCenter = getObjectZ(player);
  const playerNear = playerCenter + pData.extent2d.max.y;
  const playerFar = playerCenter + pData.extent2d.min.y;

  // check all objects
  for (const obj of [...objectsGroup.children]) {
    if (isDying(obj)) continue; // next object

    const objCenterZ = getObjectZ(obj);
    const oData = getObjectData(obj);
    const objFar = objCenterZ + oData.extent2d.min.y;
    const objNear = objCenterZ + oData.extent2d.max.y;

    if (objNear < playerFar) return; // we're done, remaining objects are too far to hit this player

    if (
      objFar < playerNear &&
      intersects(
        getExtentTranslatedToPosition(obj, oData.extent2d, _box1, _circle1),
        getExtentTranslatedToPosition(player, pData.extent2d, _box2, _circle2),
      )
    ) {
      const objHP = oData.hitPoints;
      const isHit = hitObject(obj, pData.hitPoints, true);
      if (isHit && !oData.collectible && !oData.benign) {
        pData.hitPoints -= objHP;
      }

      if (pData.hitPoints <= 0) {
        killPlayer(player);
        repositionPlayers();
        return; // this player is done
      }
    }
  }
}

export function checkPlayersHit() {
  for (const player of [...playersGroup.children]) {
    if (!isDying(player)) {
      checkPlayerHit(player);
    }
  }
}

export function movePlayers(delta: number) {
  for (const player of playersGroup.children) {
    updatePlayer(player, delta);
  }
}

export function setPlayersWalking(walking: boolean) {
  for (const player of playersGroup.children) {
    setPlayerWalking(player, walking);
  }
}
