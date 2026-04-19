import * as THREE from 'three';

import * as dim from '#dimensions';
import { logFps } from '#log';
import { resetRandom } from '#utils';

import * as state from '../state';

import {
  awardsGroup,
  setupAwards,
  toggleEndRunScreen,
  updateAwardsView,
  updateEndRunScreen,
} from './awards';
import { bulletsGroup, movePlayerBullets, setupBullets } from './bullets';
import { dyingGroup, moveAndSweepDyingGroup, setupDyingGroup } from './dying-group';
import { moveObjects, objectsGroup, setupObjects } from './objects';
import {
  checkPlayersHit,
  playersGroup,
  playerShoot,
  setPlayersWalking,
  setupPlayers,
  updatePlayerPosition,
} from './players';
import { moveTrack, setupTrack } from './track';

import { disposeAnimations, updateAnimations, timer } from './three/animations';
import { moveCamera } from './three/camera';
import { render, scene, init as initThree } from './three/main';
import { TouchHandler } from './utils/touch-handler';
import { showExtents } from './utils/extents';

let handler: TouchHandler;

let playing = false;
let ending = false;
let fullscreenPaused = false;

const el = {
  main: document.querySelector('main')!,
  canvas: document.querySelector<HTMLCanvasElement>('#webglCanvas')!,
  exitBtn: document.querySelector<HTMLButtonElement>('#exitBtn')!,
};

/**
 * First-time initialization.
 */
export function init() {
  initThree(el.main);
  setupScene();
  animationFrame();

  handler = new TouchHandler(el.canvas, {
    speedUp: 1 + dim.FINGER_WIDTH_PERCENT / 100,
    onMoveBy: updatePlayerPosition,
  });
  updateTouchHandlerEnabled();

  el.main.addEventListener('fullscreenchange', () => {
    toggleFullscreenPause(document.fullscreenElement == null);
  });

  el.exitBtn.addEventListener('click', (e) => {
    if (playing) {
      endRun(true);
      e.stopImmediatePropagation();
      e.stopPropagation();
      e.preventDefault();
      el.exitBtn.disabled = true;
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
  // if we change light position, we may need to update shadow camera below
  sunlight.position.set(40, 40, 20);
  scene.add(sunlight);

  if (dim.shadowsEnabled) {
    sunlight.castShadow = true;

    sunlight.shadow.camera.left = -dim.behindCamera;
    sunlight.shadow.camera.right = dim.trackLength;
    sunlight.shadow.camera.top = 40;
    sunlight.shadow.camera.bottom = -40;
    sunlight.shadow.camera.near = 1;
    sunlight.shadow.camera.far = 200;
    sunlight.shadow.bias = -0.01;
    sunlight.shadow.camera.up = new THREE.Vector3(-1, 1, 0).normalize();

    // set shadow texture size for crisper shadows
    sunlight.shadow.mapSize.set(2048, 256);
  }

  scene.add(awardsGroup);
  scene.add(objectsGroup);
  scene.add(playersGroup);
  scene.add(bulletsGroup);
  scene.add(dyingGroup);
  scene.add(setupTrack());
}

/**
 * make objects, reset in-run scores, show
 */
export function prepareRun() {
  resetRandom();

  disposeAnimations();

  setupAwards();
  setupObjects({ onFinish: () => endRun(true, true) });
  // set up players after objects so player upgrades, which may use randomness, don't affect object randomness
  setupPlayers();
  setupBullets();
  setupDyingGroup();

  playing = false;
  updateTouchHandlerEnabled();

  if (dim.options.showingExtents) {
    showExtents(playersGroup.children);
    showExtents(objectsGroup.children);
  }

  render(true);
}

export function startRun() {
  playing = true;
  ending = false;
  updateTouchHandlerEnabled();
  setPlayersWalking(true);
}

function endRun(immediate = false, win = false) {
  if (!playing || ending) return;

  ending = true;
  el.exitBtn.disabled = true;
  if (win) state.increaseLevel();

  updateTouchHandlerEnabled();
  updateEndRunScreen();

  setTimeout(
    () => {
      toggleEndRunScreen(true, win);

      setTimeout(() => {
        playing = false;
        setPlayersWalking(false);
      }, 1000);
    },
    immediate ? 0 : 1000,
  );

  state.increasePlayed();
}

function toggleFullscreenPause(value: boolean) {
  fullscreenPaused = value;
  updateTouchHandlerEnabled();
  // update timer so if we're restarting animation, only a bit of time will have passed
  timer.update();
}

function isGameFinished() {
  const lose = playersGroup.children.length === 0;
  const win = !lose && objectsGroup.children.length === 0 && dyingGroup.children.length === 0;

  return win ? 'win' : lose;
}

// const fpsDivider = 10;
// let fpsLimiter = fpsDivider - 1;

function animationFrame(ms?: number) {
  requestAnimationFrame(animationFrame);

  // fpsLimiter = (fpsLimiter + 1) % fpsDivider;
  // if (fpsLimiter > 0) return;

  timer.update(ms);
  if (fullscreenPaused) return;

  if (ms != null) {
    const delta = timer.getDelta();
    updateAnimations(delta);
    moveCamera();

    if (playing) {
      moveObjects(delta);
      moveTrack(delta);
      checkPlayersHit();
      playerShoot(delta);
      movePlayerBullets(delta);
      moveAndSweepDyingGroup(delta);
      updateAwardsView(delta);

      const finished = isGameFinished();
      if (finished) {
        endRun(false, finished === 'win');
      }
    }
  }
  render();

  if (playing && dim.options.fpsLogging) logFps(ms, `${objectsGroup.children.length}: `);
}
