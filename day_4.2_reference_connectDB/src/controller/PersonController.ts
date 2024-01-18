import { Request, Response } from 'express';
import Person from '../model/Person';
import { PersonService } from "../service/PersonService";

export class PersonController {
    
    private personService: PersonService;
    
    constructor(personService: PersonService){
        this.personService = personService;
    }
    
    async getPerson(req: Request, res: Response) {
        const personId = +req.params.id;
        try {
            const person = await this.personService.getPerson(personId);
            res.status(200).send(person);
        } catch(error) {
            res.status(400).send((error as Error).message);
        }
    }

    async addPerson(req: Request, res: Response) {
        const personData = req.body;
        const person: Person = {id: personData.id, name: personData.name, email: personData.email};
        try {
            this.personService.addPerson(person);
            res.status(201).send({ message: `User created successfully` });
        } catch (error) {
            res.status(400).send((error as Error).message);
        }
    }

}
