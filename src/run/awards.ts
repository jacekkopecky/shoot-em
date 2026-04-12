import * as THREE from 'three';

import * as dim from '#dimensions';
import { type CurrencyType, Wallet } from '#types';
import { fillOrHide, formatNumber, random } from '#utils';

import * as state from '../state';

import { flyToTarget } from './three/animations';
import { getScreenCoordinates } from './three/camera';
import { createSpriteObject } from './three/resources';
import { type ObjectData } from './types';
import { AnimatedCount } from './utils/animated-count';

const el = {
  endRunScreen: document.querySelector('#endRunScreen')!,
  endRunScreenCoins: document.querySelector('#endRunScreen .coin')!,
  endRunScreenGems: document.querySelector('#endRunScreen .gem')!,
  inRun: {
    gem: document.querySelector('#inRunWallet .gem .value')!,
    coin: document.querySelector('#inRunWallet .coin .value')!,
  },
};

const wallet = new Wallet();
const awardsShowing = new Map<CurrencyType, AnimatedCount>();

export const awardsGroup = new THREE.Group();

export function setupAwards() {
  awardsGroup.clear();
  wallet.reset();
  awardsShowing.clear();
  toggleEndRunScreen(false);
  for (const valueEl of Object.values(el.inRun)) {
    valueEl.textContent = ' ';
  }
}

export async function giveAward(fromObj: THREE.Object3D, oData: ObjectData) {
  if (!oData.award) return;

  const { type, amount } = oData.award;

  wallet.add(type, amount);
  state.addAward(oData.award);

  const targetCoords = getScreenCoordinates(
    dim.cameraToTrackEndLength,
    ...dim.runAwardsTargetCoordinates,
  );

  const position = new THREE.Vector3();
  fromObj.getWorldPosition(position);

  const obj = oData.useForAward ? fromObj : createSpriteObject(type);
  if (obj !== fromObj) {
    obj.position.copy(position);
  }

  const subAwards = splitAward(amount);
  let first = true;
  for (const subAmount of subAwards) {
    if (!first) {
      await new Promise((resolve) => setTimeout(resolve, 100));
    }

    const subObj = first ? obj : obj.clone();
    if (!first) {
      subObj.position.copy(position);
      subObj.position.x += (random() - 0.5) * subObj.userData.extent2d.max.x;
    }

    awardsGroup.attach(subObj);
    flyToTarget(subObj, targetCoords, dim.runAwardsFlyTime);

    subObj.addEventListener('removed', () => {
      addToShow(type, subAmount);
    });

    first = false;
  }
}

function addToShow(type: CurrencyType, amount: number) {
  const countup = awardsShowing.getOrInsertComputed(
    type,
    () => new AnimatedCount(dim.countupMaxTime),
  );
  countup.add(amount);
}

/**
 * If we're awarding more than 1 of something, we can show that in several flying coins, but not too many.
 */
function splitAward(n: number): number[] {
  if (n <= 1) return [n];
  if (n <= 2) return [n / 2, n / 2];
  if (n <= 3) return [n / 3, n / 3, n / 3];

  const len = Math.floor(Math.min(Math.log(n) + 3, 7));
  const retval = new Array(len);
  let remaining = n;
  for (let i = 0; i < len; i += 1) {
    const thisStep = Math.round(remaining / (len - i));
    retval[i] = thisStep;
    remaining -= thisStep;
  }
  return retval;
}

export function updateAwardsView(delta: number) {
  for (const [currencyType, countup] of awardsShowing.entries()) {
    const valueEl = el.inRun[currencyType];
    const showing = countup.updateShowing(delta);
    if (countup) valueEl.textContent = formatNumber(showing);
  }
}

export function toggleEndRunScreen(value?: boolean) {
  el.endRunScreen.classList.toggle('visible', value);
}

export function updateEndRunScreen() {
  fillOrHide(el.endRunScreenCoins, wallet.read('coin'));
  fillOrHide(el.endRunScreenGems, wallet.read('gem'));
}
