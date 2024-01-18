"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const PersonController_1 = require("../controller/PersonController");
const PersonRepository_1 = require("../dal/PersonRepository");
const PersonService_1 = require("../service/PersonService");
const router = express_1.default.Router();
const personController = new PersonController_1.PersonController(new PersonService_1.PersonService(new PersonRepository_1.PersonRepository()));
router.get('/:id', (req, res) => personController.getPerson(req, res));
router.post('/', (req, res) => personController.addPerson(req, res));
exports.default = router;
