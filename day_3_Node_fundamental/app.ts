export interface Scheduler {
  Operation(rate: number, callback: CallableFunction, iter: number): void;
}

class FixedDelay implements Scheduler {
  public Operation(
    rate: number,
    callback: CallableFunction,
    iter: number
  ): void {
    if (iter === 0) {
      return;
    }
    setTimeout(() => {
      callback();

      this.Operation(rate, callback, iter - 1);
    }, 5000);
  }
}
