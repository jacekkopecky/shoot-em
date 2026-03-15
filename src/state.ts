import type { Currency } from './types';
import { Wallet, type ReadonlyWallet } from './wallet';

const LOCAL_STORAGE_KEY = 'jacekkopecky-shoot-em-state';

let state = createInitialState();

type ReadonlyState = Omit<Readonly<typeof state>, 'wallet'> & { wallet: ReadonlyWallet };

function createInitialState() {
  return {
    wallet: new Wallet(),
    level: 1,
    played: 0,
  };
}

export function initState() {
  loadState();
}

export function resetState() {
  state = createInitialState();
  saveState();
}

export function addAward({ type, amount }: Currency) {
  state.wallet.add(type, amount);
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

function saveState() {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state));
}

function loadState() {
  try {
    const data = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || '{}');

    const wallet = new Wallet(data.wallet);
    const level = getNumber(data.level, 1);
    const played = getNumber(data.played, 0);

    state = { wallet, level, played };
  } catch (e) {
    console.warn('cannot read state', e);
  }
}

function getNumber(value: unknown, defaultValue?: number): number {
  if (typeof value === 'number') return value;
  if (value == null && defaultValue != null) return defaultValue;

  throw new TypeError(`expected number, got ${value}`);
}
