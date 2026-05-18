import * as dim from '#dimensions';
import type { CardType, ReadonlyState } from '#types';
import { formatNumber, makeEl } from '#utils';

import { showSection } from '../sections';
import {
  addCards,
  getUpgradablePermanentParameters,
  isFeatureAllowed,
  pay,
  readState,
} from '../state';

import { getCardLevel } from './levels';
import { cardDefinitions, CARDS } from './types';
import { selectNextsCard } from './next-card';

const el = {
  goToCardsSectionButton: document.querySelector('#mainScreen .sectionButtons .cards')!,
  closeCardsSectionButton: document.querySelector('#cards button.close')!,
  buyOne: document.querySelector('#cards button.buyOne')!,
  buyBulk: document.querySelector('#cards button.buyBulk')!,
  theCards: document.querySelector('#cards .theCards')!,
};

export function init() {
  el.goToCardsSectionButton.addEventListener('click', () => showSection('cards'));
  el.closeCardsSectionButton.addEventListener('click', () => showSection('mainScreen'));

  el.buyOne.addEventListener('click', buyOne);
  el.buyBulk.addEventListener('click', buyBulk);
}

export function showCardsScreen(
  highlightLevel?: Set<CardType>,
  highlightProgressToNext?: Set<CardType>,
) {
  const state = readState();
  const params = getUpgradablePermanentParameters();

  updateButtonPriceAndAmount(el.buyOne, dim.cardPriceGems, 1, state);
  updateButtonPriceAndAmount(
    el.buyBulk,
    dim.cardPriceGems * dim.cardBulkCount * params.cardsBulkBuyingRate,
    dim.cardBulkCount,
    state,
  );
  el.buyBulk.classList.toggle('hidden', !isFeatureAllowed('bulkCards', state));

  // clear out previous cards
  el.theCards.textContent = '';

  let firstHighlightedCard: Element | undefined;

  for (const cardType of CARDS) {
    const defn = cardDefinitions[cardType];
    const cardData = getCardLevel(cardType, state.cards, defn.cardsToGive);

    if (cardData.level > 0) {
      const cardEl = makeEl(el.theCards, 'div', 'card');
      cardEl.classList.add(defn.rarity);

      if (highlightLevel?.has(cardType) || highlightProgressToNext?.has(cardType)) {
        firstHighlightedCard ??= cardEl;
      }

      makeEl(cardEl, 'div', 'rarity', defn.rarity);

      const nameEl = makeEl(cardEl, 'div', 'name', defn.name);
      nameEl.append(' ');
      makeEl(nameEl, 'span', 'level', String(cardData.level));
      nameEl.classList.toggle('highlight', Boolean(highlightLevel?.has(cardType)));

      makeEl(cardEl, 'div', 'label', defn.typeLabel);

      if (cardData.nextLevelCards > 0) {
        const nextEl = makeEl(cardEl, 'div', 'nextLevel');
        nextEl.classList.toggle('highlight', Boolean(highlightProgressToNext?.has(cardType)));

        const boxEl = makeEl(nextEl, 'span', 'box');
        const partBox = makeEl(boxEl, 'span', 'partBox');
        makeEl(nextEl, 'span', 'have', String(cardData.nextLevelCardsHave));
        makeEl(nextEl, 'span', 'outOf', String(cardData.nextLevelCards));
        partBox.style.width = `${(cardData.nextLevelCardsHave / cardData.nextLevelCards) * 100}%`;
      } else {
        makeEl(cardEl, 'div', 'nextLevel max');
      }
    }
  }

  if (firstHighlightedCard) {
    // scroll the first highlighted card into view
    setTimeout(
      () => firstHighlightedCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' }),
      1,
    );
  }
}

function updateButtonPriceAndAmount(
  buttonEl: Element,
  price: number,
  amount: number,
  state: ReadonlyState,
) {
  const canAfford = state.wallet.read('gem') >= price;

  buttonEl.classList.toggle('disabled', !canAfford);
  buttonEl.classList.toggle('unaffordable', !canAfford);

  const costEl = buttonEl.querySelector<HTMLElement>('.cost')!;
  costEl.textContent = formatNumber(price);

  const amountEl = buttonEl.querySelector<HTMLElement>('.amount')!;
  amountEl.textContent = formatNumber(amount);
}

function buyOne() {
  const state = readState();
  if (state.wallet.read('gem') < dim.cardPriceGems) {
    // cannot afford, how was the button clicked?
    return;
  }

  const cardType = selectNextsCard(state);
  if (!cardType) {
    // no card available
    return;
  }

  // get the level before we buy the card
  const { nextLevelCards, nextLevelCardsHave } = getCardLevel(
    cardType,
    state.cards,
    cardDefinitions[cardType].cardsToGive,
  );

  // buy it
  pay('gem', dim.cardPriceGems);
  addCards([cardType]);

  const levelHighlights = new Set<CardType>();
  const nextProgressHighlights = new Set<CardType>();

  const setToAdd =
    nextLevelCards - nextLevelCardsHave > 1 ? nextProgressHighlights : levelHighlights;
  setToAdd.add(cardType);

  // update the screen and show cards, highlighting that which just got a new one
  showCardsScreen(levelHighlights, nextProgressHighlights);
}

function buyBulk() {
  console.warn('bulk buying not implemented yet');
}
