"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDataAccess = void 0;
const InMemoryDB_1 = __importDefault(require("../utils/InMemoryDB"));
class UserDataAccess {
    constructor() {
        this.db = InMemoryDB_1.default.getInstance();
        // Similarly, implement methods for updateUser and deleteUser
    }
    addUser(user) {
        this.db.addUser(user);
    }
    updateUser(user, body) {
        this.db.updateUser(user, body);
    }
    deleteUser(user) {
        this.db.deleteUser(user);
    }
}
exports.UserDataAccess = UserDataAccess;
