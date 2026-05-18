import * as dim from '#dimensions';
import type {
  CardType,
  Currency,
  CurrencyType,
  CurrentLevelState,
  Feature,
  ReadonlyState,
  RunUpgradeType,
  State,
  UpgradablePermanentParameters,
} from '#types';
import { CARDS, CURRENCIES, Wallet } from '#types';
import { parseNumber, parseStringArray } from '#utils';

import { cardDefinitions, lookupLevelByNumberOfCards, minLevelForCards } from './cards';
import { parseUpgrades } from './main-screen-upgrades';

const LOCAL_STORAGE_KEY = 'jacekkopecky-shoot-em-state';

function createInitialState(): State {
  return {
    wallet: new Wallet(CURRENCIES),
    cards: new Wallet(CARDS),
    level: 1,
    played: 0,
    energy: Infinity,
    lastEnergyGiven: Date.now(),
    runUpgradeLevels: {},
    collectedGemIds: [],
  };
}

let state: State;

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

export function addCards(types: CardType[]) {
  for (const type of types) {
    state.cards.add(type, 1);
  }
  saveState();
}

export function pay(type: CurrencyType, amount: number) {
  state.wallet.add(type, -amount);
  saveState();
}

export function increaseLevel() {
  state.previousLevel = {
    level: state.level,
    runUpgradeLevels: state.runUpgradeLevels,
    collectedGemIds: state.collectedGemIds,
  };

  // make the type system tell us when we've forgotten to reset a new property
  const newLevelState: CurrentLevelState = {
    level: state.level + 1,
    runUpgradeLevels: {},
    collectedGemIds: [],
  };
  Object.assign(state, newLevelState);

  handleLevelChanges();
  saveState();
}

export function retryLevel() {
  if (state.previousLevel) {
    Object.assign(state, state.previousLevel);
    delete state.previousLevel;
    handleLevelChanges();
    saveState();
  }
}

export function increasePlayed() {
  state.played += 1;
  saveState();
}

export function readState(): ReadonlyState {
  return state;
}

export function setRunUpgradeLevel(type: RunUpgradeType, level: number) {
  state.runUpgradeLevels[type] = level;
  saveState();
}

function saveState() {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state));
}

function loadState() {
  const dataString = localStorage.getItem(LOCAL_STORAGE_KEY) || '{}';
  try {
    const data = JSON.parse(dataString);

    state = {
      wallet: new Wallet(CURRENCIES, data.wallet),
      cards: new Wallet(CARDS, data.cards),
      level: parseNumber(data.level, 1),
      played: parseNumber(data.played, 0),
      energy: parseNumber(data.energy, Infinity),
      lastEnergyGiven: parseNumber(data.lastEnergyGiven, Date.now()),
      runUpgradeLevels: parseUpgrades(data.runUpgradeLevels),
      collectedGemIds: parseStringArray(data.collectedGemIds),
    };
  } catch (e) {
    const newKey = LOCAL_STORAGE_KEY + new Date().toISOString();
    localStorage.setItem(newKey, dataString);
    console.warn(`cannot read state, saving in "${newKey}"`, e);
    resetState();
  }
}

export function isFeatureAllowed(upgrade: Feature, state: ReadonlyState): boolean {
  switch (upgrade) {
    case 'limitedEnergy':
      return state.level >= 4;

    case 'rateUpgrade':
      return state.level >= 4;

    case 'damageUpgrade':
      return state.level >= 10;

    case 'playersUpgrade':
      return state.level >= 20;

    case 'cards':
      return state.level >= minLevelForCards;

    case 'bulkCards':
      return false; // for now
  }
}

function handleLevelChanges() {
  const params = getUpgradablePermanentParameters();
  if (state.energy === Infinity && isFeatureAllowed('limitedEnergy', state)) {
    state.energy = params.energyMax;
  }

  if (state.level < 4) {
    state.energy = Infinity;
  }
}

export function getEnergy(params: UpgradablePermanentParameters): {
  energy: number;
  nextEnergyMs: number;
} {
  const now = Date.now();
  if (state.energy >= params.energyMax) {
    return { energy: state.energy, nextEnergyMs: now + dim.energyGainInterval };
  } else {
    const msSinceLast = now - state.lastEnergyGiven;
    const energySinceLast = Math.floor(msSinceLast / dim.energyGainInterval);
    if (energySinceLast > 0) {
      state.energy = Math.min(params.energyMax, state.energy + energySinceLast);
      state.lastEnergyGiven =
        state.energy === params.energyMax
          ? now
          : state.lastEnergyGiven + energySinceLast * dim.energyGainInterval;
      saveState();
    }
    return {
      energy: state.energy,
      nextEnergyMs: state.lastEnergyGiven + dim.energyGainInterval - now,
    };
  }
}

export function subtractEnergy(params: UpgradablePermanentParameters): boolean {
  if (state.energy === Infinity || import.meta.env.DEV) {
    return true;
  }

  getEnergy(params);
  if (state.energy > 0) {
    state.energy -= 1;
    saveState();
    return true;
  } else {
    return false;
  }
}

export function collectGem(id: string) {
  state.collectedGemIds.push(id);
  saveState();
}

export function getUpgradablePermanentParameters(): UpgradablePermanentParameters {
  const params: UpgradablePermanentParameters = {
    energyMax: dim.initialEnergyMax,
    coinsPerLevel: dim.initialCoinsPerLevel,
    gemsPerLevel: dim.initialGemsPerLevel,
    endBlockCoinsPerLevel: dim.initialEndBlockCoinsPerLevel,
    damageUpgradePrice: dim.initialDamageUpgradePrice,
    rateUpgradePrice: dim.initialRateUpgradePrice,
    playersUpgradePrice: dim.initialPlayersUpgradePrice,
    damageMaxUpgrade: dim.initialDamageMaxUpgrade,
    rateMaxUpgrade: dim.initialRateMaxUpgrade,
    playersMaxUpgrade: dim.initialPlayersMaxUpgrade,
    objectHitPoints: dim.initialObjectHitPoints,
    maxEndBlockHitPoints: dim.initialMaxEndBlockHitPoints,
    gemHitPoints: dim.initialGemHitPoints,
    playerBulletHitPoints: dim.initialPlayerBulletHitPoints,
    playerBulletRange: dim.initialPlayerBulletRange,
    playerHitPoints: dim.initialPlayerHitPoints,
    playerShotsPerSecond: dim.initialPlayerShotsPerSecond,
    startingPlayers: dim.initialStartingPlayers,
    cardsBulkBuyingRate: 1,
  };

  for (const [cardType, cardNumber] of state.cards.entries()) {
    const level = lookupLevelByNumberOfCards(cardNumber);
    cardDefinitions[cardType].performUpgrade(level, params);
  }

  return params;
}
