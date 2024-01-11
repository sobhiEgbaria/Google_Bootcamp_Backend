import { SchedularFactory, clientCode } from "./SchedulerFactory";
import { FixedDelayScheduler, FixedRateScheduler, Scheduler } from "./SchedulerProduct";

// ************** Schedulers test ************** //

// FixedDelayScheduler test //
// let delayCallBack : CallableFunction = () => {
//     console.log('Executing callback at the specified delay.');
//     let start = Date.now();
//     while(Date.now() - start < 3000);
// }
// let fixedDelayScheduler: FixedDelayScheduler = new FixedDelayScheduler()
// fixedDelayScheduler.operation(3000, delayCallBack , 3);


// FixedRateScheduler test //
// let rateCallBack : CallableFunction = () => {
//     console.log('Executing callback at the specified rate with a delay.');
// }
// let fixedRateScheduler: FixedRateScheduler = new FixedRateScheduler()
// fixedRateScheduler.operation(1000, rateCallBack , 3);

// // Factory test
let delayCallBack : CallableFunction = () => {
    console.log('Executing callback at the specified delay.');
    let start = Date.now();
    while(Date.now() - start < 3000);
}
let schedulerFactory: SchedularFactory = new SchedularFactory();
let scheduler: Scheduler = schedulerFactory.clientCode("delay");
scheduler.operation(3000, delayCallBack, 5);