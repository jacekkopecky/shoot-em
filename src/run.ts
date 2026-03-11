import * as THREE from 'three';

import { disposeAnimations, shrinkToGone, updateAnimations } from './animations.js';
import {
  behindCamera,
  cameraToTrackEndLength,
  FINGER_WIDTH_PERCENT,
  N,
  objectDyingDuration,
  objectSpeedPerSecond,
  playerBulletLength,
  playerBulletRange,
  playerBulletSpeed,
  playerShotTime,
  startDistance,
  trackLength,
  trackWidth,
} from './dimensions.js';
import { logFps } from './log.js';
import { showMainScreen } from './main-screen.js';
import { dispose, getObjectX, getObjectZ, isSprite, render, scene, timer } from './three.js';
import { createObject, createTrack, getSpriteMaterial } from './three-resources.js';
import { TouchHandler } from './touch-handler.js';
import { getBulletData, getPlayerData, getPlayerGroupData } from './types.js';

let handler: TouchHandler;
let objectsGroup: THREE.Group;
let playerGroup: THREE.Group;
let bulletsGroup: THREE.Group;

let playing = false;
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
    initialX: 50,
    speedUp: 1 + FINGER_WIDTH_PERCENT / 100,
    onMove: updatePlayerPosition,
  });
  toggleTouchHandler();

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

function toggleTouchHandler() {
  handler.toggle(playing && !fullscreenPaused);
}

function setupScene() {
  scene.clear();
  scene.background = new THREE.Color(0xb0b0b0);

  scene.fog = new THREE.Fog(
    scene.background,
    cameraToTrackEndLength - trackLength * 0.2,
    cameraToTrackEndLength,
  );

  scene.add(createTrack());
}

/**
 * make objects, reset in-run scores, show
 */
export function prepareRun() {
  disposeAnimations();

  setupObjects();
  setupPlayer();
  setupBullets();

  playing = false;
  toggleTouchHandler();

  render();
}

export function startRun() {
  playing = true;
  toggleTouchHandler();
  animationFrame();
}

function endRun() {
  if (!playing) return;

  playing = false;
  toggleTouchHandler();

  // todo
  // show final stats of this run - gained currencies
  // when the user confirms that, move back to main screen

  setTimeout(showMainScreen, 1000);
}

function toggleFullscreenPause(value: boolean) {
  fullscreenPaused = value;
  toggleTouchHandler();
  // update timer so if we're restarting animation, only a bit of time will have passed
  timer.update();
}

function setupPlayer() {
  if (playerGroup) {
    scene.remove(playerGroup);
    dispose(playerGroup);
  }

  playerGroup = new THREE.Group();
  playerGroup.userData.type = 'playerGroup';

  const player = createObject('player');
  const pData = getPlayerData(player);
  pData.shotTime = playerShotTime;
  pData.remainingShotTime = playerShotTime / 2;
  pData.range = playerBulletRange;
  pData.bulletLength = playerBulletLength;
  playerGroup.add(player);

  const pgData = getPlayerGroupData(playerGroup);
  pgData.width = pData.width;

  scene.add(playerGroup);
}

function setupBullets() {
  if (bulletsGroup) {
    scene.remove(bulletsGroup);
    dispose(bulletsGroup);
  }

  bulletsGroup = new THREE.Group();
  scene.add(bulletsGroup);
}

function setupObjects() {
  if (objectsGroup) {
    scene.remove(objectsGroup);
    dispose(objectsGroup);
  }

  objectsGroup = new THREE.Group();
  scene.add(objectsGroup);

  for (let i = 0; i < N; i++) {
    const x = Math.random() * 80 - 40;
    const y = -(trackLength / N) * i + startDistance;

    const obj = createObject('object');
    obj.position.x = x;
    obj.position.z = y;
    objectsGroup.add(obj);
  }
}

function updatePlayerPosition(playerPercent: number) {
  let x = ((playerPercent - 50) * trackWidth) / 100;
  const bound = (trackWidth - (getPlayerGroupData(playerGroup).width ?? 0)) / 2;
  if (x < -bound) x = -bound;
  if (x > bound) x = bound;
  playerGroup.position.x = x;
}

function moveObjects(delta: number) {
  const deltaZ = objectSpeedPerSecond * delta;
  objectsGroup.position.z += deltaZ;

  // remove objects that are now behind the camera
  for (const child of objectsGroup.children) {
    if (getObjectZ(child) > behindCamera) {
      child.removeFromParent();
    } else {
      // the objects are sorted front-to-back so no more will be behind camera
      break;
    }
  }
}

function moveBullets(delta: number) {
  const deltaZ = playerBulletSpeed * delta;
  // todo check for hits, with deltaZ added to each bullet's length, but only up to the bullet's minZ minus length

  bulletsGroup.position.z -= deltaZ;

  // remove bullets that are now past their range
  for (const bullet of bulletsGroup.children) {
    const bData = getBulletData(bullet);
    if (getObjectZ(bullet) < -bData.range) {
      bullet.removeFromParent();
    }
  }
}

function shoot(delta: number) {
  for (const player of playerGroup.children) {
    const pData = getPlayerData(player);
    pData.remainingShotTime -= delta;
    if (pData.remainingShotTime <= 0) {
      console.log(pData.remainingShotTime, pData.shotTime, delta);
      pData.remainingShotTime += pData.shotTime;

      const bullet = createObject('bullet');
      const bData = getBulletData(bullet);
      bData.range = pData.range;
      bData.length = pData.bulletLength;
      bullet.position.z = -bulletsGroup.position.z;
      bullet.position.y = player.position.y / 2;
      bullet.position.x = getObjectX(player);

      bulletsGroup.add(bullet);
    }
  }
}

function isGameFinished() {
  return objectsGroup.children.length === 0;
}

// temporary, will change when dealing with bullets
function isObjectBeforePlayer(obj: THREE.Object3D): boolean {
  return (
    getObjectZ(obj) < 0 &&
    Math.abs(obj.position.x - playerGroup.position.x) < (obj.userData.width / 2 || 1)
  );
}

function animationFrame(ms?: number) {
  timer.update(ms);
  if (playing) requestAnimationFrame(animationFrame);

  if (fullscreenPaused) return;

  if (ms != null) {
    const delta = timer.getDelta();
    updateAnimations(delta);
    moveObjects(delta);
    shoot(delta);
    moveBullets(delta);

    if (isGameFinished()) {
      endRun();
    }
  }
  render();
  logFps(ms, `${objectsGroup.children.length}: `);
}
