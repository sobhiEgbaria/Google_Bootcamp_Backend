"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FixedRateScheduler = exports.FixedDelayScheduler = void 0;
/**
 * Concrete Products
 */
class FixedDelayScheduler {
    operation(time, callback, iter) {
        if (iter == 0)
            return;
        callback();
        setTimeout(() => {
            this.operation(time, callback, iter - 1);
        }, time);
    }
}
exports.FixedDelayScheduler = FixedDelayScheduler;
/**
 * Concrete Products
 */
class FixedRateScheduler {
    operation(time, callback, iter) {
        if (iter == 0)
            return;
        setTimeout(() => {
            callback();
        }, time * iter);
        this.operation(time, callback, iter - 1);
    }
}
exports.FixedRateScheduler = FixedRateScheduler;
