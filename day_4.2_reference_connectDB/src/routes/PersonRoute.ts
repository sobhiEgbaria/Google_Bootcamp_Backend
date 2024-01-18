import express, { Request, Response } from 'express';
import { PersonController } from '../controller/PersonController';
import { PersonRepository } from '../dal/PersonRepository';
import { PersonService } from '../service/PersonService';

const router = express.Router();
const personController = new PersonController(new PersonService(new PersonRepository()));


router.get('/:id', (req: Request, res: Response) => personController.getPerson(req,res));
router.post('/', (req: Request, res: Response) => personController.addPerson(req,res));


export default router;