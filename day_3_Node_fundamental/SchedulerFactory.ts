import { FixedDelayScheduler, FixedRateScheduler, Scheduler } from "./SchedulerProduct";

export class SchedularFactory{
    private myMap = new Map<string, SchedularCreator>();

    public constructor(){
        // Adding key-value pairs
        this.myMap.set('rate', new FixedRateSchedulerCreator());
        this.myMap.set('delay', new FixedDelaySchedulerCreator());
    }

    public clientCode(creatorStr: string): Scheduler {
        let retScheduled = this.myMap.get(creatorStr);
        if(retScheduled){
            return retScheduled.createSchedular();
        }
        throw new Error();
    }
}


/**
 * The Creator class declares the factory method that is supposed to return an
 * object of a Product class. The Creator's subclasses usually provide the
 * implementation of this method.
 */
 export abstract class SchedularCreator {

    /**
     * Note that the Creator may also provide some default implementation of the
     * factory method.
     */
    public abstract createSchedular(): Scheduler;
}



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
    public createSchedular(): Scheduler {
        return new FixedDelayScheduler();
    }
}

class FixedRateSchedulerCreator extends SchedularCreator {
    public createSchedular(): Scheduler {
        return new FixedRateScheduler();
    }
}

/**
 * The client code works with an instance of a concrete creator, albeit through
 * its base interface. As long as the client keeps working with the creator via
 * the base interface, you can pass it any creator's subclass.
 */
export function clientCode(creatorStr: string): Scheduler {
    if(creatorStr === 'rate'){
        return new FixedRateScheduler();
    }else if (creatorStr === 'delay') {
        return new FixedDelayScheduler();
    } 
    throw new Error();
}

