import * as THREE from 'three';

import * as dim from '../dimensions';
import { type Currency, type CurrencyType } from '../types';
import { formatCurrencyNumber } from '../utils';
import { Wallet } from '../wallet';
import { getScreenCoordinates } from '../three';
import { createObject } from '../three-resources';

import { flyToTargetAndShrink } from './utils/animations';
import { AnimatedCount } from './utils/animated-count';

const el = {
  endRunScreen: document.querySelector('#endRunScreen')!,
  endRunScreenCoins: document.querySelector('#endRunScreen .value.coin')!,
  endRunScreenGems: document.querySelector('#endRunScreen .value.gem')!,
  inRun: {
    gem: document.querySelector('#inRunWallet .value.gem')!,
    coin: document.querySelector('#inRunWallet .value.coin')!,
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
    valueEl.textContent = '';
  }
}

export async function giveAward({ type, amount }: Currency, fromObj: THREE.Object3D) {
  wallet.add(type, amount);

  const targetCoords = getScreenCoordinates(
    dim.runAwardsTargetDepth,
    ...dim.runAwardsTargetCoordinates,
  );

  const position = new THREE.Vector3();
  fromObj.getWorldPosition(position);

  const subAwards = splitAward(amount);
  let first = true;
  for (const subAmount of subAwards) {
    if (!first) {
      await new Promise((resolve) => setTimeout(resolve, 100));
    }

    const obj = createObject(type);
    obj.position.copy(position);
    if (!first) {
      obj.position.x += (Math.random() - 0.5) * dim.sizes.defaultSize![0];
    }
    flyToTargetAndShrink(obj, targetCoords, dim.runAwardsFlyTime);
    awardsGroup.add(obj);

    obj.addEventListener('removed', () => {
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
    if (countup) valueEl.textContent = String(showing);
  }
  // todo update in-run awards view
  // this is called on animation frame so remember what we show, see how much we have, make sure all
  // is shown within 200ms? with slowing down...
}

export function toggleEndRunScreen(value?: boolean) {
  el.endRunScreen.classList.toggle('visible', value);
}

export function updateEndRunScreen() {
  el.endRunScreenCoins.textContent = formatCurrencyNumber(wallet.read('coin'));
  el.endRunScreenGems.textContent = formatCurrencyNumber(wallet.read('gem'));
}
