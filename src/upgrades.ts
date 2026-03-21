export type UpgradeFn = keyof typeof upgradeFunctions;
export interface Upgrade {
  value: number;
  fn: UpgradeFn;
}

export const UPGRADE_TYPES = ['player', 'damage', 'rate'] as const;
export type UpgradeType = (typeof UPGRADE_TYPES)[number];

export type UpgradeBag = Partial<Record<UpgradeType, Upgrade>>;

type UpgradeFnImplementation = (orig: number, upgradeValue: number) => number;
const upgradeFunctions = {
  add,
  addPercent,
} as const satisfies Readonly<Record<string, UpgradeFnImplementation>>;

function add(origValue: number, upgradeValue: number): number {
  return origValue + upgradeValue;
}

function addPercent(origValue: number, upgradeValue: number): number {
  return origValue * (1 + upgradeValue / 100);
}

export function parseUpgrades(data: unknown): UpgradeBag {
  if (data == null) return {};
  if (typeof data !== 'object') {
    throw new TypeError('malformed upgrade bag data');
  }

  const retval: UpgradeBag = {};
  for (const [key, value] of Object.entries(data)) {
    if (!UPGRADE_TYPES.includes(key as UpgradeType)) {
      throw new TypeError(`unknown upgrade type ${key}`);
    }
    retval[key as UpgradeType] = parseUpgrade(value);
  }
  return retval;
}

function parseUpgrade(data: unknown): Upgrade {
  if (!data || typeof data !== 'object') {
    throw new TypeError(`unrecognized upgrade value "${data}", expected object`);
  }

  const obj: Partial<Upgrade> = data;
  if (typeof obj.fn !== 'string' || !upgradeFunctions[obj.fn]) {
    throw new TypeError(`unknown fn ${obj.fn}`);
  }
  if (typeof obj.value !== 'number') {
    throw new TypeError(`unknown value, expected number: ${obj.value}`);
  }

  return {
    fn: obj.fn,
    value: obj.value,
  };
}

export function applyUpgrade(value: number, upgrade?: Upgrade): number {
  if (!upgrade) return value;
  const fn = upgradeFunctions[upgrade.fn];
  return fn(value, upgrade.value);
}
