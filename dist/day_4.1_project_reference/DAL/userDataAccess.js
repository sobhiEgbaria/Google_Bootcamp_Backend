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
    }
    addUser(user) {
        this.db.addUser(user);
    }
    getUser(userId) {
        const user = this.db.getUser(userId);
        if (!user) {
            throw new Error(`User with ID ${userId} not found`);
        }
        return user;
    }
    updateUser(userId, updateData) {
        const existingUser = this.db.getUser(userId);
        if (!existingUser) {
            throw new Error(`User with ID ${userId} not found`);
        }
        this.db.updateUser(userId, updateData);
    }
    deleteUser(userId) {
        const existingUser = this.db.getUser(userId);
        if (!existingUser) {
            throw new Error(`User with ID ${userId} not found`);
        }
        this.db.deleteUser(userId);
    }
}
exports.UserDataAccess = UserDataAccess;
