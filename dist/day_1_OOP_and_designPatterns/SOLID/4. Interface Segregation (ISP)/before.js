"use strict";
class PC {
    useUSB() {
        console.log("USB port is ready for your PC!");
    }
    ;
    useLAN() {
        console.log("LAN port is ready for your PC!");
    }
    ;
    usePS2() {
        console.log("PS2 port is ready for your PC!");
    }
    ;
    useVGA() {
        console.log("VGA port is ready for your PC!");
    }
    ;
}
class Laptop {
    useUSB() {
        console.log("USB port is ready for your Laptop!");
    }
    ;
    useLAN() {
        console.log("LAN port is ready for your Laptop!");
    }
    ;
    usePS2() {
        throw new Error("Laptop has not any PS2 port!");
    }
    ;
    useVGA() {
        throw new Error("Laptop has not any VGA port!");
    }
    ;
}
