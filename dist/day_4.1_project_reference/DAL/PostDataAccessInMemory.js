"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostDataAccessInMemory = void 0;
const InMemoryDB_1 = __importDefault(require("../utils/InMemoryDB"));
class PostDataAccessInMemory {
    constructor() {
        this.db = InMemoryDB_1.default.getInstance();
    }
    add(post) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.db.addPost(post);
        });
    }
    get(postId) {
        return __awaiter(this, void 0, void 0, function* () {
            const post = yield this.db.getPost(postId);
            if (!post) {
                throw new Error(`User with ID ${postId} not found`);
            }
            return post;
        });
    }
    update(postId, updateData) {
        return __awaiter(this, void 0, void 0, function* () {
            const existingPost = yield this.db.getPost(postId);
            if (!existingPost) {
                throw new Error(`User with ID ${postId} not found`);
            }
            this.db.updatePost(postId, updateData);
        });
    }
    delete(postId) {
        return __awaiter(this, void 0, void 0, function* () {
            const existingPost = yield this.db.getPost(postId);
            if (!existingPost) {
                throw new Error(`User with ID ${postId} not found`);
            }
            this.db.deletePost(postId);
        });
    }
}
exports.PostDataAccessInMemory = PostDataAccessInMemory;
