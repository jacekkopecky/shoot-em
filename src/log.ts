const logEl = document.querySelector('#log');

export function log(str: string) {
  if (!logEl) return;

  logEl.textContent += '\n' + str;
}

// fps

let lastTimeMs: number | undefined;
let framesThisSecond = 0;

export function logFps(ms?: number, prefix?: string) {
  if (!logEl) return;

  if (ms != null && lastTimeMs != null) {
    framesThisSecond += 1;
    if (lastTimeMs % 1000 > ms % 1000) {
      log(`${prefix}${framesThisSecond}`);
      framesThisSecond = 0;
    }
  }
  lastTimeMs = ms;
}
