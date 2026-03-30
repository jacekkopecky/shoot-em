const logEl = document.querySelector('#log');
const fpsEl = document.querySelector('#fps');

export function log(str: string) {
  if (!logEl) return;

  logEl.textContent += '\n' + str;
}

// fps

let lastTimeMs: number | undefined;
let framesThisSecond = 0;

export function logFps(ms?: number, prefix = '') {
  if (!logEl && !fpsEl) return;

  if (ms != null && lastTimeMs != null) {
    framesThisSecond += 1;
    if (lastTimeMs % 1000 > ms % 1000) {
      if (fpsEl) {
        fpsEl.textContent = String(framesThisSecond);
      } else {
        log(`${prefix}${framesThisSecond}`);
      }
      framesThisSecond = 0;
    }
  }
  lastTimeMs = ms;
}
