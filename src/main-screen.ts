import { fillOrHide } from '#utils';

import { initUpgrades, updateUpgrades } from './main-screen-upgrades';
import { init as initRunScreen, prepareRun, startRun } from './run';
import { clearNextRunUpgrades, initState, readState, resetState } from './state';

const el = {
  main: document.querySelector('main')!,
  canvas: document.querySelector<HTMLCanvasElement>('#webglCanvas')!,
  topButtons: document.querySelector<HTMLElement>('#topBar')!,
  exitBtn: document.querySelector<HTMLButtonElement>('#exitBtn')!,
  settingsBtn: document.querySelector<HTMLButtonElement>('#settingsBtn')!,
  endRunScreenOK: document.querySelector('#endRunScreen button.ok')!,
  wallet: {
    gem: document.querySelector('#mainScreenWallet .gem')!,
    coin: document.querySelector('#mainScreenWallet .coin')!,
  },
  playStats: {
    played: document.querySelector('#playStats .played')!,
    level: document.querySelector('#playStats .level')!,
  },
  upgradeButtons: document.querySelector<HTMLElement>('#upgradeButtons')!,
};

export function init() {
  initState();
  initRunScreen();
  initUpgrades();
  el.canvas.addEventListener('touchstart', startPlaying);
  el.canvas.addEventListener('mousedown', startPlaying);
  el.endRunScreenOK.addEventListener('click', showMainScreen);
  el.settingsBtn.addEventListener('click', showSettings);

  // touching near or between the buttons shouldn't start a run
  el.topButtons.addEventListener('touchdown', (e) => e.stopPropagation());
  el.upgradeButtons.addEventListener('touchdown', (e) => e.stopPropagation());

  showMainScreen();
}

export function startPlaying() {
  if (!el.main.classList.contains('run')) {
    el.main.classList.add('run');
    startRun();
    clearNextRunUpgrades();
  }
}

export function showMainScreen() {
  el.main.classList.remove('run');
  el.exitBtn.disabled = false;
  prepareRun();

  updateMainScreen();
}

export function updateMainScreen() {
  const state = readState();

  fillOrHide(el.wallet.coin, state.wallet.read('coin'));
  fillOrHide(el.wallet.gem, state.wallet.read('gem'));

  fillOrHide(el.playStats.level, state.level, String);
  fillOrHide(el.playStats.played, state.played, String);

  updateUpgrades(state);
}

function showSettings() {
  if (window.confirm('reset all data?')) {
    resetState();
    showMainScreen();
  }
}
