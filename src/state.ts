import { Wallet, type ReadonlyWallet, type Currency, type CurrencyType } from '#types';

import { parseUpgrades, type Upgrade, type UpgradeBag, type UpgradeType } from './upgrades';

const LOCAL_STORAGE_KEY = 'jacekkopecky-shoot-em-state';

function createInitialState() {
  const currentLevelUpgrades: UpgradeBag = {};
  return {
    wallet: new Wallet(),
    level: 1,
    played: 0,
    currentLevelUpgrades,
  };
}

let state = createInitialState();

export type ReadonlyState = Omit<Readonly<typeof state>, 'wallet'> & { wallet: ReadonlyWallet };

export function initState() {
  loadState();
  (window as any).gameState = state;
}

export function resetState() {
  state = createInitialState();
  (window as any).gameState = state;
  saveState();
}

export function addAward({ type, amount }: Currency) {
  state.wallet.add(type, amount);
  saveState();
}

export function pay(type: CurrencyType, amount: number) {
  state.wallet.add(type, -amount);
  saveState();
}

export function increaseLevel() {
  state.level += 1;
  state.currentLevelUpgrades = {};
  saveState();
}

export function increasePlayed() {
  state.played += 1;
  saveState();
}

export function readState(): ReadonlyState {
  return state;
}

export function setCurrentLevelUpgrade(type: UpgradeType, upgrade: Upgrade) {
  state.currentLevelUpgrades[type] = upgrade;
  saveState();
}

function saveState() {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state));
}

function loadState() {
  const dataString = localStorage.getItem(LOCAL_STORAGE_KEY) || '{}';
  try {
    const data = JSON.parse(dataString);

    const wallet = new Wallet(data.wallet);
    const level = getNumber(data.level, 1);
    const played = getNumber(data.played, 0);
    const currentLevelUpgrades = parseUpgrades(data.currentLevelUpgrades);

    state = { wallet, level, played, currentLevelUpgrades };
  } catch (e) {
    const newKey = LOCAL_STORAGE_KEY + new Date().toISOString();
    localStorage.setItem(newKey, dataString);
    console.warn(`cannot read state, saving in "${newKey}"`, e);
  }
}

function getNumber(value: unknown, defaultValue?: number): number {
  if (typeof value === 'number') return value;
  if (value == null && defaultValue != null) return defaultValue;

  throw new TypeError(`expected number, got ${value}`);
}

export function isUpgradeAllowed(upgrade: UpgradeType, state: ReadonlyState): boolean {
  // hide upgrades when starting from scratch until played a bit
  switch (upgrade) {
    case 'rate':
      return state.level < 2;

    case 'damage':
      return state.level < 5;

    case 'player':
      return state.level < 10;
  }
}
