import * as THREE from 'three';

import { disposeAnimations, shrinkToGone, updateAnimations } from './animations.js';
import * as dim from './dimensions.js';
import { logFps } from './log.js';
import { showMainScreen } from './main-screen.js';
import { getObjectX, getObjectZ, isSprite, render, scene, timer } from './three.js';
import { getSpriteMaterial } from './three-materials.js';
import {
  createObject,
  createTrack,
  createTrackDecorations,
  doObjectsOverlapInX,
  getObjectWidth,
  moveTrackDecorations,
} from './three-resources.js';
import { TouchHandler } from './touch-handler.js';
import {
  getBulletData,
  getObjectData,
  getPlayerData,
  getPlayerGroupData,
  type BulletData,
} from './types.js';

let handler: TouchHandler;
let objectsGroup: THREE.Group;
let playerGroup: THREE.Group;
let bulletsGroup: THREE.Group;
let trackDecorationsGroup: THREE.Group;

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
    speedUp: 1 + dim.FINGER_WIDTH_PERCENT / 100,
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
  scene.background = new THREE.Color(0xb0c0d0);

  scene.fog = new THREE.Fog(
    scene.background,
    dim.cameraToTrackEndLength - dim.trackLength * 0.2,
    dim.cameraToTrackEndLength,
  );

  scene.add(createTrack());
  trackDecorationsGroup = createTrackDecorations();
  scene.add(trackDecorationsGroup);

  // lights
  const skylight = new THREE.HemisphereLight(0xffffff, 0xb97a20, 1);
  scene.add(skylight);

  const sunlight = new THREE.DirectionalLight(0xffffff, 3);
  sunlight.position.set(10, 10, 5);
  scene.add(sunlight);
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
  handler.setCurrentX(50);
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
  }

  playerGroup = new THREE.Group();
  playerGroup.userData.type = 'playerGroup';

  const player = createObject('player');
  const pData = getPlayerData(player);
  pData.shotTime = dim.playerShotTime;
  pData.remainingShotTime = dim.playerShotTime / 2;
  pData.range = dim.playerBulletRange;
  pData.bulletLength = dim.playerBulletLength;
  playerGroup.add(player);

  const pgData = getPlayerGroupData(playerGroup);
  pgData.width = pData.width;

  scene.add(playerGroup);
}

function setupBullets() {
  if (bulletsGroup) {
    scene.remove(bulletsGroup);
  }

  bulletsGroup = new THREE.Group();
  scene.add(bulletsGroup);
}

function setupObjects() {
  if (objectsGroup) {
    scene.remove(objectsGroup);
  }

  objectsGroup = new THREE.Group();
  scene.add(objectsGroup);

  for (let i = 0; i < dim.N; i++) {
    const x = Math.random() * 80 - 40;
    const y = -(dim.trackLength / dim.N) * i + dim.startDistance;

    const obj = createObject('object');
    const oData = getObjectData(obj);
    obj.position.x = x;
    obj.position.z = y;
    oData.hitPoints = dim.objectHitPoints;
    objectsGroup.add(obj);
  }
}

function updatePlayerPosition(playerPercent: number) {
  let x = ((playerPercent - 50) * dim.trackWidth) / 100;
  const bound = (dim.trackWidth - getObjectWidth(playerGroup)) / 2;
  if (x < -bound) x = -bound;
  if (x > bound) x = bound;
  playerGroup.position.x = x;
}

function moveObjects(delta: number) {
  const deltaZ = dim.objectSpeedPerSecond * delta;
  objectsGroup.position.z += deltaZ;

  // remove objects that are now behind the camera
  for (const child of objectsGroup.children) {
    if (getObjectZ(child) > dim.behindCamera) {
      child.removeFromParent();
    } else {
      // the objects are sorted front-to-back so no more will be behind camera
      break;
    }
  }
}

function hitObject(obj: THREE.Object3D, bData: BulletData): boolean {
  const oData = getObjectData(obj);
  if (oData.dying) return false;

  oData.hitPoints -= bData.hitPoints;

  if (oData.hitPoints <= 0) {
    if (!isSprite(obj)) throw new TypeError('cannot kill object that is not a sprite');
    obj.material = getSpriteMaterial('objectDying');
    oData.dying = true;
    shrinkToGone(obj, dim.objectDyingDuration);
  }

  return true;
}

/**
 * With this bullet having moved deltaZ in the last step, check if it's hit any object.
 */
function checkBulletHit(bullet: THREE.Object3D, deltaZ: number) {
  const bData = getBulletData(bullet);

  const bulletButt = getObjectZ(bullet);
  const bulletTip = bulletButt - bData.length - deltaZ;

  // check all objects
  for (const obj of objectsGroup.children) {
    const objZ = getObjectZ(obj);
    if (objZ < bulletTip) return; // we're done, remaining objects are too far for this bullet to hit

    if (objZ < bulletButt && doObjectsOverlapInX(obj, bullet)) {
      const isHit = hitObject(obj, bData);
      if (isHit) {
        bullet.removeFromParent();
        return;
      }
    }
  }
}

function moveBullets(delta: number) {
  const deltaZ = dim.playerBulletSpeed * delta;

  for (const bullet of bulletsGroup.children) {
    checkBulletHit(bullet, deltaZ);
  }

  bulletsGroup.position.z -= deltaZ;
  const bulletsZ = bulletsGroup.position.z;

  // remove bullets that are now past their range
  for (const bullet of bulletsGroup.children) {
    const bData = getBulletData(bullet);
    if (bulletsZ < bData.minZ) {
      bullet.removeFromParent();
    } else {
      // the bullets are sorted by minZ so no further bullets will be removed
      break;
    }
  }
}

function shoot(delta: number) {
  for (const player of playerGroup.children) {
    const pData = getPlayerData(player);
    pData.remainingShotTime -= delta;
    if (pData.remainingShotTime <= 0) {
      pData.remainingShotTime += pData.shotTime;

      const bullet = createObject('bullet');
      const bData = getBulletData(bullet);
      bData.minZ = bulletsGroup.position.z - pData.range;
      bData.length = pData.bulletLength;
      bData.hitPoints = dim.playerBulletHitPoints;
      bData.width = 0; // let bullets just graze the target without hitting it
      bullet.position.z = -bulletsGroup.position.z;
      bullet.position.y = player.position.y;
      bullet.position.x = getObjectX(player);

      bulletsGroup.add(bullet);
    }
  }
}

function isGameFinished() {
  return objectsGroup.children.length === 0;
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
    shoot(delta);
    moveBullets(delta);

    if (isGameFinished()) {
      endRun();
    }
  }
  render();
  logFps(ms, `${objectsGroup.children.length}: `);
}
