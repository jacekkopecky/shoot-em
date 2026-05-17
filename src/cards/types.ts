import type { UpgradablePermanentParameters } from '#types';

import * as t from './templates';

const RARITIES = ['common', 'rare', 'epic', 'legendary'] as const;
type Rarity = (typeof RARITIES)[number];

// short label for card types
type TypeLabel = 'damage' | 'fire rate' | 'range' | 'income';

export type CardDefinition = Readonly<{
  name: string; // funny name
  rarity: Rarity;
  minPlayerLevel: number;
  cardsToGive?: number; // if empty, it's Infinity
  typeLabel: TypeLabel;
  // description: string; // something to show under a question mark icon?
  // picture?: string; // url
  performUpgrade(level: number, upgradableParameters: UpgradablePermanentParameters): void;
}>;

export type CardTemplate = Omit<CardDefinition, 'name' | 'minPlayerLevel'>;

export const cardDefinitions = {
  _test: card({
    cardsToGive: 40, // level 12
    minPlayerLevel: Infinity, // make sure the card is never awarded
    name: 'testing card',
    rarity: 'common', // doesn't matter
    typeLabel: 'fire rate', // doesn't matter
    performUpgrade() {
      console.error("this should never be called, it's a testing card");
    },
  }),
  range1: tCard('Atlatl', t.range, 30),
  range2: tCard('Longbow', t.range, 50),
  range3: tCard('Sniper Rifle', t.range, 70),
  rate1: tCard('Practice', t.rate, 30),
  rate2: tCard('Robo Reload', t.rate, 30),
  rate3: tCard('Gatling Gun', t.rate, 30),
  coins1: tCard('Gold Nugget', t.inRunCoins, 30),
  coins2: tCard('Pay Raise', t.inRunCoins, 40),
  coins3: tCard('1337 Loot', t.inRunCoins, 55),
  coins4: tCard('RwnsCoin', t.inRunCoins, 100),
  coins5: tCard('Inflation', t.inRunCoins, 200),
  endCoins1: tCard('Harvest', t.endBlockCoins, 30),
  endCoins2: tCard('Treasure Chest', t.endBlockCoins, 45),
  endCoins3: tCard('Pot of Gold', t.endBlockCoins, 60),
} as const;

// todo
// - cards (each card with a max level, or max number of cards?)
//   - common:
//     - increase bullet damage
//   - rare:
//     - number of colour gates in a run? (max level 3)
//     - energy max plus 1, also energy plus 1 at the same time? Up to 24
//       - lightning bolt, electron, flash - add adjectives
//     - (?) decrease normal object (e.g. tree) HP (? or this might be a skill later)
//     - (?) decrease end block HP (? or this might be a skill later)
//     - increase gems per level by one, gems in end blocks plus one
//       - Emerald, ruby, sapphire; diamond, smoky quartz, obsidian - add adjectives
//   - epic:
//     - increase max damage upgrade
//     - increase max rate upgrade
//     - decrease price of damage upgrade
//     - decrease price of rate upgrade
//     - decrease price of player upgrade
//   - legendary:
//     - increase max player number
//     - increase starting player number

export const CARDS = Object.keys(cardDefinitions) as (keyof typeof cardDefinitions)[];

export const minLevelForCards = Math.min(
  ...Object.values(cardDefinitions).map((card) => card.minPlayerLevel),
);

// makes it simpler to type-check the creation of cardDefinitions
function card(defn: CardDefinition): CardDefinition {
  return defn;
}

function tCard(name: string, template: CardTemplate, minPlayerLevel: number): CardDefinition {
  return {
    ...template,
    name,
    minPlayerLevel,
  };
}
