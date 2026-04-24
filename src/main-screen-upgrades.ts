import { formatNumber } from '#utils';

import { updateMainScreen } from './main-screen';
import { prepareRun } from './run';
import {
  type ReadonlyState,
  readState,
  setCurrentLevelUpgrade,
  pay,
  isUpgradeAllowed,
} from './state';
import type { UpgradeFn, UpgradeType } from './upgrades';

const el = {
  upgradeButtons: document.querySelector<HTMLElement>('#upgradeButtons')!,
  upgrades: {
    player: document.querySelector<HTMLElement>('#upgradeButtons > .player')!,
    rate: document.querySelector<HTMLElement>('#upgradeButtons > .rate')!,
    damage: document.querySelector<HTMLElement>('#upgradeButtons > .damage')!,
  },
};

export function initUpgrades() {
  el.upgrades.player.addEventListener('click', upgradeHandler(upgradePlayer));
  el.upgrades.rate.addEventListener('click', upgradeHandler(upgradeRate));
  el.upgrades.damage.addEventListener('click', upgradeHandler(upgradeDamage));
}

type ButtonUpgrade = keyof typeof el.upgrades;

export function updateUpgrades(state: ReadonlyState) {
  // only allow upgrades depending on state
  for (const upgradeType of Object.keys(el.upgrades) as ButtonUpgrade[]) {
    el.upgrades[upgradeType].classList.toggle('hidden', isUpgradeAllowed(upgradeType, state));
    updatePriceAndLevel(upgradeType, state);
  }
}

function updatePriceAndLevel(type: ButtonUpgrade, state: ReadonlyState) {
  const [currentLevel, nextLevel] = lookupCurrentUpgradeLevel(
    type,
    state.currentLevelUpgrades[type]?.value,
  );

  const price = nextLevel?.price ?? 0;
  const canAfford = state.wallet.read('coin') >= price;
  const isMax = nextLevel == null;

  const buttonEl = el.upgrades[type];

  const disabled = !canAfford || isMax;
  buttonEl.classList.toggle('disabled', disabled);
  buttonEl.classList.toggle('unaffordable', !canAfford);
  buttonEl.classList.toggle('max', isMax);

  const costEl = buttonEl.querySelector<HTMLElement>('.cost .value')!;
  costEl.textContent = price ? formatNumber(price) : '—';

  const levelEl = buttonEl.querySelector<HTMLElement>('.level .value')!;
  levelEl.textContent = isMax ? 'MAX' : `Level ${currentLevel}`;
}

function upgradeHandler(fn: () => void): (e: PointerEvent) => void {
  return (e) => {
    if (e.currentTarget instanceof HTMLElement && !e.currentTarget.classList.contains('disabled')) {
      fn();
      prepareRun();
      updateMainScreen();
    }
  };
}

interface UpgradeLevel {
  price: number;
  value: number;
}

const upgradeLevels: Partial<Record<UpgradeType, UpgradeLevel[]>> = {
  rate: [
    { value: 12, price: 1 },
    { value: 26, price: 2 },
    { value: 41, price: 4 },
    { value: 59, price: 6 },
    { value: 78, price: 8 },
    { value: 100, price: 10 },
  ],
  player: [
    { value: 1, price: 0 }, // was 30, 40…
    { value: 2, price: 0 },
    { value: 3, price: 0 },
    { value: 4, price: 0 },
    { value: 5, price: 0 },
  ],
  damage: [
    { value: 12, price: 1 },
    { value: 26, price: 2 },
    { value: 41, price: 4 },
    { value: 59, price: 6 },
    { value: 78, price: 8 },
    { value: 100, price: 10 },
  ],
} as const;

export function lookupCurrentUpgradeLevel(
  type: UpgradeType,
  value?: number,
): [currentLevel: number, nextLevel: UpgradeLevel | null] {
  const levels = upgradeLevels[type];
  if (!levels?.length) {
    return [1, null];
  }

  if (!value) return [1, levels[0]!];

  // find first level we _haven't_ reached
  // return level starting with 1
  for (let i = 0; i < levels.length; i += 1) {
    const nextLevel = levels[i];
    if (nextLevel != null && value < nextLevel.value) return [i + 1, nextLevel];
  }

  // we're at the top level
  return [levels.length + 1, null];
}

function upgradeRate() {
  upgradeWithFn('rate', 'addPercent');
}

function upgradeDamage() {
  upgradeWithFn('damage', 'addPercent');
}

function upgradePlayer() {
  upgradeWithFn('player', 'add');
}

function upgradeWithFn(type: UpgradeType, fn: UpgradeFn) {
  const state = readState();
  const currentValue = state.currentLevelUpgrades[type]?.value;
  const [_, nextLevel] = lookupCurrentUpgradeLevel(type, currentValue);

  if (nextLevel == null) return; // at max level

  if (state.wallet.read('coin') < nextLevel.price) return; // cannot afford

  pay('coin', nextLevel.price);
  setCurrentLevelUpgrade(type, { fn, value: nextLevel.value });
}
