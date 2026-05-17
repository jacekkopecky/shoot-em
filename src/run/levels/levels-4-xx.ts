import * as THREE from 'three';

import * as dim from '#dimensions';
import type { ReadonlyState, UpgradablePermanentParameters } from '#types';
import { random, range, removeRandomItem, spacedRandomIndexes } from '#utils';

import { isFeatureAllowed } from '../../state';
import { getHitBar } from '../three/models';
import { getObjectData } from '../types';

import type { LevelFunction } from './index';
import { makeBag, makeEndBlocks, makeGem, makeTrees } from './tools';

export const MIN = 4;
export const MAX = Infinity;

export function level4Plus(
  state: ReadonlyState,
  params: UpgradablePermanentParameters,
): ReturnType<LevelFunction> {
  const hardness = dim.difficultyIncreasePerLevel ** (state.level - MIN + 1);

  const currObjectHP = params.objectHitPoints * hardness;

  const customMessage = state.level === MIN ? 'from now on\nit gets harder' : '';

  const objects = makeTrees(
    dim.runLength,
    dim.treesPerTreeWidth,
    currObjectHP,
    params.objectHitPoints,
  );

  const gemCount = isFeatureAllowed('cards', state) ? params.gemsPerLevel : 0;
  const gemsInRun = Math.round(gemCount / 2);
  const gemsInBlocks = gemCount - gemsInRun;

  const extraItems: ExtraObjectInfo[] = coinBagAmounts(dim.maxCoinBagsPerRun, params.coinsPerLevel);
  extraItems.push(...gemsWithIds(gemsInRun, 'tree'));

  const treeIndexesToReplace = spacedRandomIndexes(objects, extraItems.length);
  let actualGemCount = 0;

  for (const i of treeIndexesToReplace) {
    const tree = objects[i]!;
    const item = removeRandomItem(extraItems);

    let object = null;

    if (item.type === 'gem') {
      // create every gem so we use the same random() calls, but don't put in the ones already collected
      const gem = makeGem(params.gemHitPoints * hardness, item.id);
      if (!state.collectedGemIds.includes(item.id)) {
        object = gem;
        actualGemCount += 1;
      }
    } else if (item.type === 'bag') {
      object = makeBag(item.amount);
    } else {
      throw new Error(`unhandled item ${JSON.stringify(item)}`);
    }

    if (object) {
      objects[i] = object;
      object.position.add(tree.position);
    }
  }

  const blockStart =
    objects.at(-1)!.position.z - dim.modelSizes.boulder[0] - dim.modelSizes.conifer[0];

  const blocks = makeEndBlocks(
    blockStart,
    8,
    params.maxEndBlockHitPoints * hardness,
    currObjectHP / 2,
    params.endBlockCoinsPerLevel,
  );

  const extraGemsInBlocks = [...gemsWithIds(gemsInBlocks, 'block')];
  const blockIndexesToAddGemsTo = spacedRandomIndexes(blocks, extraGemsInBlocks.length);
  for (const i of blockIndexesToAddGemsTo) {
    const gemInfo = extraGemsInBlocks.pop()!;
    if (addGemToEndBlock(gemInfo, blocks[i]!, state)) actualGemCount += 1;
  }

  return { objects: objects.concat(blocks), customMessage, gemCount: actualGemCount };
}

interface GemInfo {
  type: 'gem';
  id: string;
}
interface BagInfo {
  type: 'bag';
  amount: number;
}
type ExtraObjectInfo = GemInfo | BagInfo;

function gemsWithIds(n: number, idPrefix = ''): Iterable<GemInfo> {
  return range(n).map((x) => ({ type: 'gem', id: `gem_${idPrefix}${x}` }));
}

function coinBagAmounts(bags: number, total: number): BagInfo[] {
  if (total <= bags) {
    return Array(total).fill({ type: 'bag', amount: 1 });
  }

  const amounts = Array(bags);

  // fill the array with average ints
  let remaining = total;
  for (let i = 0; i < bags; i += 1) {
    const val = Math.round(remaining / (bags - i));
    amounts[i] = val;
    remaining -= val;
  }

  // spread the values
  const avg = total / bags;
  const spread = Math.round(avg * 0.26);
  if (spread >= 1) {
    const stepLength = bags / (spread + 0.5);
    for (let i = 0; i < bags - 1; i += 2) {
      const currSpread = spread - Math.floor((i + 1) / stepLength);
      amounts[i] -= currSpread;
      amounts[i + 1] += currSpread;
    }
  }

  return amounts.map((amount) => ({ type: 'bag', amount }));
}

function addGemToEndBlock(gemInfo: GemInfo, block: THREE.Object3D, state: ReadonlyState): boolean {
  const gem = makeGem(0, gemInfo.id, true);

  // rotate the gem randomly
  // compute the angles outside of the condition below so we always use the same randoms
  const yRotation = Math.PI * 2 * random();
  const zRotation = Math.PI * (random() * 0.05 + 0.05);

  if (!state.collectedGemIds.includes(gemInfo.id)) {
    // shift the gem to the top of the boulder
    gem.position.y = dim.modelSizes.boulder[1] - dim.modelSizes.gem[1] * 0.3;

    // shift hitBar higher
    const hitBar = getHitBar(block);
    if (hitBar) hitBar.position.y += dim.modelSizes.gem[1] * 0.3;

    gem.name = gemInfo.id;
    gem.castShadow = false;

    gem.rotation.y = yRotation;
    gem.rotation.z = zRotation;
    block.add(gem);

    const oData = getObjectData(block);
    oData.award = { amount: 1, type: 'gem' };
    oData.useForAward = gemInfo.id;

    return true;
  } else {
    return false;
  }
}
