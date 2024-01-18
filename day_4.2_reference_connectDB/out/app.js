"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const PersonRoute_1 = __importDefault(require("./routes/PersonRoute"));
require("dotenv/config");
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const server = (0, express_1.default)();
const port = 9004; // default port to listen
server.use(express_1.default.json());
server.disable('etag');
server.use((0, cors_1.default)());
server.use('/static', express_1.default.static(path_1.default.join(__dirname, 'public')));
////////////// Route User //////////////
server.use("/person", PersonRoute_1.default);
// start the express server
server.listen(port, () => {
    console.log(`server started at port:${port}`);
});
////////////// Use Controller API ////////////// 
// server.get('/example', async (req: Request, res: Response, next: NextFunction) => {
//     try {
//       const result = performOperation();
//       res.json({ status: 'success', result });
//     } catch (error) {
//       if(error instanceof NotFoundError){
//         res.status(400).json({ status: 'error', message: error.message });
//       }
//     }
//   });
// function performOperation() {
//   // Simulate an error
//   throw new NotFoundError('Something went wrong');
// }
