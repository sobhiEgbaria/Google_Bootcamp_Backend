"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SchedulerFactory_1 = require("./SchedulerFactory");
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
let delayCallBack = () => {
    console.log('Executing callback at the specified delay.');
    let start = Date.now();
    while (Date.now() - start < 3000)
        ;
};
let schedulerFactory = new SchedulerFactory_1.SchedularFactory();
let scheduler = schedulerFactory.clientCode("delay");
scheduler.operation(3000, delayCallBack, 5);
