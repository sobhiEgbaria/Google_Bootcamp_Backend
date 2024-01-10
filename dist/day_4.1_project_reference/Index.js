"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const activityLogger_1 = __importDefault(require("./middlewares/activityLogger"));
const usersRoute_1 = __importDefault(require("./routes/usersRoute"));
const postsRoute_1 = __importDefault(require("./routes/postsRoute"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(activityLogger_1.default);
const port = 3000;
app.use("/users", usersRoute_1.default);
app.use("/posts", postsRoute_1.default);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
