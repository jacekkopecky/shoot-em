import type { CardType } from './cards';
import type { CurrencyType } from './currencies';
import type { RunUpgradeLevels, RunUpgradeType } from './upgrades';
import type { DeepReadonly } from './utils';
import type { ReadonlyWallet, Wallet } from './wallet';

export interface CurrentLevelState {
  level: number;
  runUpgradeLevels: RunUpgradeLevels;
  collectedGemIds: string[];
}

export interface State extends CurrentLevelState {
  wallet: Wallet<CurrencyType>;
  cards: Wallet<CardType>;
  played: number;
  energy: number;
  lastEnergyGiven: number; // milliseconds since epoch
  previousLevel?: CurrentLevelState;
}

export type ReadonlyState = Omit<DeepReadonly<State>, 'wallet' | 'cards'> & {
  wallet: ReadonlyWallet<CurrencyType>;
  cards: ReadonlyWallet<CardType>;
};

export type Feature = 'limitedEnergy' | `${RunUpgradeType}Upgrade` | 'cards' | 'bulkCards';
