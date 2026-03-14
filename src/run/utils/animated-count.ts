/**
 * This class is an animated count to the target amount, where the animation takes at most
 * `countTime` seconds.
 *
 * Call `add(amount)` to add a number to the target amount, this resets the timer.
 *
 * Call `updateShowing(delta)` in your animation loop to get the current showing number.
 */
export class AnimatedCount {
  private remainingTime: number;
  private showing = 0;
  private target = 0;

  constructor(private countTime: number) {
    this.remainingTime = countTime;
  }

  add = (amount: number) => {
    this.target += amount;
    // scale countMaxTime down for small amounts?
    this.remainingTime = this.countTime;
  };

  updateShowing = (delta: number): number => {
    if (this.showing >= this.target || delta >= this.remainingTime) {
      this.showing = this.target;
      this.remainingTime = 0;
    } else {
      const amount = this.target - this.showing;
      const deltaFraction = delta / this.remainingTime;

      // the following gives us linearly decreasing amounts to take
      // if we use evenly spaced parts of remaining time
      const taking = Math.floor(amount * (2 - deltaFraction) * deltaFraction);

      // clamp taking to at least one but at most the remaining amount
      const clamped = Math.min(Math.max(1, taking), amount);

      this.showing += clamped;
      this.remainingTime -= delta;
    }
    return this.showing;
  };
}
