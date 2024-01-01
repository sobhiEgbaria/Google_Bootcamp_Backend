"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clientCode = exports.SchedularCreator = exports.SchedularFactory = void 0;
const SchedulerProduct_1 = require("./SchedulerProduct");
class SchedularFactory {
    constructor() {
        this.myMap = new Map();
        // Adding key-value pairs
        this.myMap.set('rate', new FixedRateSchedulerCreator());
        this.myMap.set('delay', new FixedDelaySchedulerCreator());
    }
    clientCode(creatorStr) {
        let retScheduled = this.myMap.get(creatorStr);
        if (retScheduled) {
            return retScheduled.createSchedular();
        }
        throw new Error();
    }
}
exports.SchedularFactory = SchedularFactory;
/**
 * The Creator class declares the factory method that is supposed to return an
 * object of a Product class. The Creator's subclasses usually provide the
 * implementation of this method.
 */
class SchedularCreator {
}
exports.SchedularCreator = SchedularCreator;
/**
 * Concrete Creators override the factory method in order to change the
 * resulting product's type.
 */
class FixedDelaySchedulerCreator extends SchedularCreator {
    /**
     * Note that the signature of the method still uses the abstract product
     * type, even though the concrete product is actually returned from the
     * method. This way the Creator can stay independent of concrete product
     * classes.
     */
    createSchedular() {
        return new SchedulerProduct_1.FixedDelayScheduler();
    }
}
class FixedRateSchedulerCreator extends SchedularCreator {
    createSchedular() {
        return new SchedulerProduct_1.FixedRateScheduler();
    }
}
/**
 * The client code works with an instance of a concrete creator, albeit through
 * its base interface. As long as the client keeps working with the creator via
 * the base interface, you can pass it any creator's subclass.
 */
function clientCode(creatorStr) {
    if (creatorStr === 'rate') {
        return new SchedulerProduct_1.FixedRateScheduler();
    }
    else if (creatorStr === 'delay') {
        return new SchedulerProduct_1.FixedDelayScheduler();
    }
    throw new Error();
}
exports.clientCode = clientCode;
