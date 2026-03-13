import * as THREE from 'three';

import {
  disposeAnimations,
  pulseAndShrinkToGone,
  shrinkToGone,
  updateAnimations,
} from '../animations.js';
import * as dim from '../dimensions.js';
import { logFps } from '../log.js';
import { getObjectZ, render, resetGroup, scene, timer } from '../three.js';
import { setSpriteMaterial } from '../three-materials.js';
import {
  createObject,
  createTrack,
  createTrackDecorations,
  doObjectsOverlapInX,
  getObjectWidth,
  moveTrackDecorations,
} from '../three-resources.js';
import { TouchHandler } from '../touch-handler.js';
import { getObjectData, getPlayerData, getPlayerGroupData, type PlayerData } from '../types.js';

import { setupAwards, toggleEndRunScreen, updateEndRunScreen } from './run-awards.js';
import {
  bulletsGroup,
  createPlayerBullet,
  movePlayerBullets,
  setupBullets,
} from './run-bullets.js';
import { hitObject, moveObjects, objectsGroup, setupObjects } from './run-objects.js';
import { removeGroupChildrenBehindCamera } from './run-tools.js';

let handler: TouchHandler;

const playersGroup = new THREE.Group();
playersGroup.userData.type = 'playersGroup';
const dyingGroup = new THREE.Group();
const trackDecorationsGroup = new THREE.Group();

let playing = false;
let ending = false;
let fullscreenPaused = false;

const el = {
  main: document.querySelector('main')!,
  canvas: document.querySelector<HTMLCanvasElement>('#webgl-canvas')!,
  exitBtn: document.querySelector('#exitBtn')!,
};

/**
 * First-time initialization.
 */
export function init() {
  setupScene();

  handler = new TouchHandler(el.canvas, {
    initialX: 0.5,
    speedUp: 1 + dim.FINGER_WIDTH_PERCENT / 100,
    onMove: updatePlayerPosition,
  });
  updateTouchHandlerEnabled();

  el.main.addEventListener('fullscreenchange', () => {
    toggleFullscreenPause(document.fullscreenElement == null);
  });

  el.exitBtn.addEventListener('click', (e) => {
    if (playing) {
      endRun();
      e.stopImmediatePropagation();
      e.stopPropagation();
      e.preventDefault();
    }
  });
}

function updateTouchHandlerEnabled() {
  handler.toggle(playing && !ending && !fullscreenPaused);
}

function setupScene() {
  scene.clear();
  scene.background = new THREE.Color(0xb0c0d0);

  scene.fog = new THREE.Fog(
    scene.background,
    dim.cameraToTrackEndLength - dim.trackLength * 0.2,
    dim.cameraToTrackEndLength,
  );

  // lights
  const skylight = new THREE.HemisphereLight(0xffffff, 0xb97a20, 1);
  scene.add(skylight);

  const sunlight = new THREE.DirectionalLight(0xffffff, 3);
  sunlight.position.set(10, 10, 5);
  scene.add(sunlight);

  scene.add(objectsGroup);
  scene.add(playersGroup);
  scene.add(bulletsGroup);
  scene.add(dyingGroup);
  scene.add(trackDecorationsGroup);

  scene.add(createTrack());
  createTrackDecorations(trackDecorationsGroup);
}

/**
 * make objects, reset in-run scores, show
 */
export function prepareRun() {
  disposeAnimations();

  setupAwards();
  setupObjects();
  setupPlayers();
  setupBullets();
  resetGroup(dyingGroup);

  playing = false;
  updateTouchHandlerEnabled();

  render();
}

export function startRun() {
  playing = true;
  ending = false;
  updateTouchHandlerEnabled();
  handler.setCurrentX(0.5);
  animationFrame();
}

function endRun() {
  if (!playing || ending) return;
  ending = true;
  updateTouchHandlerEnabled();
  updateEndRunScreen();

  setTimeout(() => {
    toggleEndRunScreen(true);

    setTimeout(() => {
      playing = false;
    }, 1000);
  }, 1000);
}

function toggleFullscreenPause(value: boolean) {
  fullscreenPaused = value;
  updateTouchHandlerEnabled();
  // update timer so if we're restarting animation, only a bit of time will have passed
  timer.update();
}

function setupPlayers() {
  resetGroup(playersGroup);

  const player = createObject('player');
  const pData = getPlayerData(player);
  pData.shotTime = dim.playerShotTime;
  pData.remainingShotTime = dim.playerShotTime / 2;
  pData.range = dim.playerBulletRange;
  pData.bulletLength = dim.playerBulletLength;
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

function updatePlayerPosition(playerPosFraction: number) {
  const availableWidth = dim.trackWidth - getObjectWidth(playersGroup);
  const x = (playerPosFraction - 0.5) * availableWidth;
  playersGroup.position.x = x;
}

function moveDyingGroup(delta: number) {
  const deltaZ = dim.objectSpeedPerSecond * delta;
  dyingGroup.position.z += deltaZ;

  removeGroupChildrenBehindCamera(dyingGroup, false);
}

function killPlayer(player: THREE.Object3D, pData: PlayerData) {
  pData.dying = true;
  setSpriteMaterial(player, pData.dyingMaterial);
  shrinkToGone(player, dim.playerDyingDuration / 2);

  // the player will be swept into the dying group after all updates

  // add fire for extra effect
  const fire = createObject('fire');
  pulseAndShrinkToGone(fire, dim.playerDyingDuration);
  dyingGroup.add(fire);
  fire.position.copy(player.position);
  fire.position.z += 0.01; // in front of the player
  fire.position.add(playersGroup.position);
  fire.position.sub(dyingGroup.position);
}

function playerShoot(delta: number) {
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

function checkPlayersHit() {
  for (const player of playersGroup.children) {
    checkPlayerHit(player);
  }
}

// move dying objects into a separate group so we don't have to deal with them afterwards
function sweepDyingObjects() {
  // first gather the objects so we don't remove them while going through the collections
  const dyingStuff = [
    ...Iterator.from(objectsGroup.children).filter((obj) => obj.userData.dying),
    ...Iterator.from(playersGroup.children).filter((obj) => obj.userData.dying),
  ];

  for (const obj of dyingStuff) {
    obj.position.add(obj.parent!.position);
    dyingGroup.add(obj);
    obj.position.sub(dyingGroup.position);
  }
}

function isGameFinished() {
  return (
    objectsGroup.children.length === 0 ||
    (playersGroup.children.length === 0 && dyingGroup.children.length === 0)
  );
}

// const fpsDivider = 10;
// let fpsLimiter = fpsDivider - 1;

function animationFrame(ms?: number) {
  if (playing) requestAnimationFrame(animationFrame);

  // fpsLimiter = (fpsLimiter + 1) % fpsDivider;
  // if (fpsLimiter > 0) return;

  timer.update(ms);
  if (fullscreenPaused) return;

  if (ms != null) {
    const delta = timer.getDelta();
    updateAnimations(delta);
    moveObjects(delta);
    moveTrackDecorations(trackDecorationsGroup, delta);
    moveDyingGroup(delta);
    checkPlayersHit();
    playerShoot(delta);
    movePlayerBullets(delta);
    sweepDyingObjects();

    if (isGameFinished()) {
      endRun();
    }
  }
  render();
  logFps(ms, `${objectsGroup.children.length}: `);
}
