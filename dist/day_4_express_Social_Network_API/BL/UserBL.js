"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserBL = void 0;
const userDataAccess_1 = require("../DAL/userDataAccess");
class UserBL {
    constructor() {
        this.userDataAccess = new userDataAccess_1.UserDataAccess();
        // Similarly, implement methods for getUser updateUser and deleteUser
    }
    addUser(user) {
        // Additional business logic or validation
        this.userDataAccess.addUser(user);
    }
}
exports.UserBL = UserBL;
