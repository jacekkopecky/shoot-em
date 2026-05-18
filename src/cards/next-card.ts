import { CARDS, type CardType, type ReadonlyState } from '#types';
import { pickWeightedItem, randomItem } from '#utils';

import { cardDefinitions, type Rarity } from './types';

const rarityFactors: Readonly<Record<Rarity, number>> = {
  common: 27,
  rare: 9,
  epic: 3,
  legendary: 1,
};

export function selectNextsCard(state: ReadonlyState): CardType | undefined {
  const availableTypes = CARDS.filter((type) => isTypeAvailable(state, type));
  if (availableTypes.length <= 1) return availableTypes[0];

  const availableRarities = Array.from(
    new Set(availableTypes.map((type) => cardDefinitions[type].rarity)),
  );

  const randomRarity = pickWeightedItem(availableRarities, rarityFactors, Math.random);

  const cardsAtSelectedRarity = availableTypes.filter(
    (type) => cardDefinitions[type].rarity === randomRarity,
  );

  return randomItem(cardsAtSelectedRarity, Math.random);
}

function isTypeAvailable(state: ReadonlyState, type: CardType) {
  const defn = cardDefinitions[type];
  return (
    state.level >= defn.minPlayerLevel && state.cards.read(type) < (defn.cardsToGive ?? Infinity)
  );
}
