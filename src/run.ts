import * as THREE from 'three';

import {
  disposeAnimations,
  pulseAndShrinkToGone,
  shrinkToGone,
  updateAnimations,
} from './animations.js';
import * as dim from './dimensions.js';
import { logFps } from './log.js';
import { getObjectX, getObjectZ, render, scene, timer } from './three.js';
import { setSpriteMaterial } from './three-materials.js';
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
  type Currency,
  type ObjectData,
  type PlayerData,
} from './types.js';
import { formatCurrencyNumber } from './utils.js';
import { Wallet } from './wallet.js';

let handler: TouchHandler;
let objectsGroup: THREE.Group;
let playersGroup: THREE.Group;
let dyingGroup: THREE.Group;
let bulletsGroup: THREE.Group;
let trackDecorationsGroup: THREE.Group;

let playing = false;
let ending = false;
let fullscreenPaused = false;
let wallet = new Wallet();

const el = {
  main: document.querySelector('main')!,
  canvas: document.querySelector<HTMLCanvasElement>('#webgl-canvas')!,
  exitBtn: document.querySelector('#exitBtn')!,
  endRunScreen: document.querySelector('#endRunScreen')!,
  endRunScreenCoins: document.querySelector('#endRunScreen .value.coin')!,
  endRunScreenGems: document.querySelector('#endRunScreen .value.gem')!,
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

  scene.add(createTrack());
  trackDecorationsGroup = createTrackDecorations();
  scene.add(trackDecorationsGroup);

  dyingGroup = new THREE.Group();
  scene.add(dyingGroup);

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
  setupPlayers();
  setupBullets();
  dyingGroup.clear();
  dyingGroup.position.z = 0;

  playing = false;
  toggleTouchHandler();

  wallet.reset();

  toggleEndRunScreen(false);

  render();
}

function toggleEndRunScreen(value?: boolean) {
  el.endRunScreen.classList.toggle('visible', value);
}

function giveAward(what: Currency) {
  wallet.add(what);
}

function updateEndRunScreen() {
  el.endRunScreenCoins.textContent = formatCurrencyNumber(wallet.read('coin'));
  el.endRunScreenGems.textContent = formatCurrencyNumber(wallet.read('gem'));
}

export function startRun() {
  playing = true;
  ending = false;
  toggleTouchHandler();
  handler.setCurrentX(50);
  animationFrame();
}

function endRun() {
  if (!playing || ending) return;
  ending = true;
  toggleTouchHandler();
  updateEndRunScreen();

  setTimeout(() => {
    toggleEndRunScreen(true);

    setTimeout(() => {
      playing = false;
    }, 1000);
  }, 1000);

  // todo
  // show final stats of this run - gained currencies
  // when the user confirms that, move back to main screen
}

function toggleFullscreenPause(value: boolean) {
  fullscreenPaused = value;
  toggleTouchHandler();
  // update timer so if we're restarting animation, only a bit of time will have passed
  timer.update();
}

function setupPlayers() {
  if (playersGroup) {
    scene.remove(playersGroup);
  }

  playersGroup = new THREE.Group();
  playersGroup.userData.type = 'playersGroup';

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

  scene.add(playersGroup);
}

function repositionPlayers() {
  // todo
  // give players (except dying ones) target X and Z, every time players move move them towards it
  // depending on the zone we are on:
  // normal: re-center the players in a group (and shift center?)
  // end-blocks: do not recenter
  // todo also run this function when we change zone
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

    const r = Math.random();
    const type =
      r < dim.gemProbability
        ? 'gem'
        : r < dim.gemProbability + dim.coinProbability
          ? 'coins'
          : 'object';

    const obj = createObject(type, 'object');
    const oData = getObjectData(obj);
    obj.position.x = x;
    obj.position.z = y;

    switch (type) {
      case 'gem':
        oData.hitPoints = dim.gemHitPoints;
        oData.benign = true;
        oData.award = { type: 'gem', amount: 1 };
        break;
      case 'coins':
        oData.collectible = true;
        oData.award = { type: 'coin', amount: Math.floor(Math.random() * dim.coinAwardMax + 1) };
        break;
      default:
        oData.hitPoints = dim.objectHitPoints;
    }

    objectsGroup.add(obj);
  }
}

function updatePlayerPosition(playerPercent: number) {
  let x = ((playerPercent - 50) * dim.trackWidth) / 100;
  const bound = (dim.trackWidth - getObjectWidth(playersGroup)) / 2;
  if (x < -bound) x = -bound;
  if (x > bound) x = bound;
  playersGroup.position.x = x;
}

function moveObjects(delta: number) {
  const deltaZ = dim.objectSpeedPerSecond * delta;
  objectsGroup.position.z += deltaZ;

  removeGroupChildrenBehindCamera(objectsGroup);
}

function hitObject(obj: THREE.Object3D, hitPoints: number, playerHit = false): boolean {
  const oData = getObjectData(obj);
  if (oData.dying) return false;

  // cannot shoot a collectible
  if (!playerHit && oData.collectible) return false;

  oData.hitPoints -= hitPoints;

  if (oData.collectible || oData.hitPoints <= 0) {
    killObject(obj, oData);

    // don't award from benign objects when we walk into them
    if (oData.award && !(oData.benign && playerHit)) giveAward(oData.award);
  }

  return true;
}

function moveDyingGroup(delta: number) {
  const deltaZ = dim.objectSpeedPerSecond * delta;
  dyingGroup.position.z += deltaZ;

  removeGroupChildrenBehindCamera(dyingGroup, false);
}

function removeGroupChildrenBehindCamera(group: THREE.Group, sortedInZ = true) {
  // remove objects that are now behind the camera
  for (const child of group.children) {
    if (getObjectZ(child) > dim.behindCamera) {
      child.removeFromParent();
    } else {
      // the objects are sorted front-to-back so no more will be behind camera
      if (sortedInZ) break;
    }
  }
}

function killObject(obj: THREE.Object3D, oData: ObjectData) {
  setSpriteMaterial(obj, oData.dyingMaterial);
  oData.dying = true;
  shrinkToGone(obj, dim.objectDyingDuration);
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
      const isHit = hitObject(obj, bData.hitPoints);
      if (isHit) {
        bullet.removeFromParent();
        return;
      }
    }
  }
}

function movePlayerBullets(delta: number) {
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

function playerShoot(delta: number) {
  for (const player of playersGroup.children) {
    const pData = getPlayerData(player);
    if (pData.dying) continue; // next player

    pData.remainingShotTime -= delta;
    if (pData.remainingShotTime <= 0) {
      pData.remainingShotTime += pData.shotTime;

      const bullet = createObject('bullet');
      const bData = getBulletData(bullet);
      bData.minZ = bulletsGroup.position.z - pData.range;
      bData.length = pData.bulletLength;
      bData.hitPoints = dim.playerBulletHitPoints;
      bData.width = 0; // let bullets just graze the target without hitting it

      // bullets start in front of the player
      bullet.position.z = -bulletsGroup.position.z - pData.depth;
      bullet.position.y = player.position.y;
      bullet.position.x = getObjectX(player);

      bulletsGroup.add(bullet);
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
function sweepDeadObjects() {
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
    sweepDeadObjects();

    if (isGameFinished()) {
      endRun();
    }
  }
  render();
  logFps(ms, `${objectsGroup.children.length}: `);
}
