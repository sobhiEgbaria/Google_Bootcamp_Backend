/**
 * The Product interface declares the operations that all concrete products must
 * implement.
 */
export interface Scheduler {
    operation(time: number, callback: CallableFunction, iter: number): void;
}

/**
 * Concrete Products
 */
export class FixedDelayScheduler implements Scheduler {
    public operation(time: number, callback: CallableFunction, iter: number): void {
        if(iter == 0)
            return;
        callback();
        setTimeout(() => {
            this.operation(time, callback, iter-1)
        }, time);
    }
}

/**
 * Concrete Products
 */
export class FixedRateScheduler implements Scheduler {
    
    public operation(time: number, callback: CallableFunction, iter: number): void {
        if(iter == 0)
            return;
        setTimeout(() => {
            callback();
        }, time * iter);
        this.operation(time, callback, iter-1)
    }
}

