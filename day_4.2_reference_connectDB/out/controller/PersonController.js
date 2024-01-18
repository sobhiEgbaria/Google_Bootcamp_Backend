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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonController = void 0;
class PersonController {
    constructor(personService) {
        this.personService = personService;
    }
    getPerson(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const personId = +req.params.id;
            try {
                const person = yield this.personService.getPerson(personId);
                res.status(200).send(person);
            }
            catch (error) {
                res.status(400).send(error.message);
            }
        });
    }
    addPerson(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const personData = req.body;
            const person = { id: personData.id, name: personData.name, email: personData.email };
            try {
                this.personService.addPerson(person);
                res.status(201).send({ message: `User created successfully` });
            }
            catch (error) {
                res.status(400).send(error.message);
            }
        });
    }
}
exports.PersonController = PersonController;
