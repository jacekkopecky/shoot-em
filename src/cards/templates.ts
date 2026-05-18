import * as dim from '#dimensions';

import { getCardsToLevel } from './levels';
import type { CardTemplate } from './types';

export const range: CardTemplate = {
  rarity: 'common',
  cardsToGive: getCardsToLevel(dim.playerBulletRangeMaxBonusPerCardType),
  typeLabel: 'range',
  performUpgrade(level, params) {
    params.playerBulletRange += level;
  },
};

export const rate: CardTemplate = {
  rarity: 'common',
  typeLabel: 'fire rate',
  performUpgrade(level, params) {
    params.playerShotsPerSecond *= 1.03 ** level;
  },
};

export const endBlockCoins: CardTemplate = {
  rarity: 'common',
  typeLabel: 'income',
  performUpgrade(level, params) {
    params.endBlockCoinsPerLevel += level;
  },
};

export const inRunCoins: CardTemplate = {
  rarity: 'common',
  typeLabel: 'income',
  performUpgrade(level, params) {
    params.coinsPerLevel += level;
  },
};
