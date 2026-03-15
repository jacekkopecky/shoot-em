import type { Currency, CurrencyType, Upgrade, UpgradeBag, UpgradeType } from './types';
import { parseUpgrades } from './upgrades';
import { Wallet, type ReadonlyWallet } from './wallet';

const LOCAL_STORAGE_KEY = 'jacekkopecky-shoot-em-state';

function createInitialState() {
  const nextRunUpgrades: UpgradeBag = {};
  return {
    wallet: new Wallet(),
    level: 1,
    played: 0,
    nextRunUpgrades,
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
  saveState();
}

export function increasePlayed() {
  saveState();
}

export function readState(): ReadonlyState {
  return state;
}

export function setNextRunUpgrade(type: UpgradeType, upgrade: Upgrade) {
  state.nextRunUpgrades[type] = upgrade;
  saveState();
}

export function clearNextRunUpgrades() {
  state.nextRunUpgrades = {};
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
    const nextRunUpgrades = parseUpgrades(data.nextRunUpgrades);

    state = { wallet, level, played, nextRunUpgrades };
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
