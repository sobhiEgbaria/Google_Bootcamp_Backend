"use strict";
class Tablet {
    readBook() {
        console.log("Enjoy reading!");
    }
    openBrowser() {
        console.log("Start searching ...");
    }
}
class KidsTablet extends Tablet {
    openBrowser() {
        throw Error("Kids haven't access to the browser!");
    }
}
