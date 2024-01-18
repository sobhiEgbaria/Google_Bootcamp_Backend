import Person from "../model/Person";
import { PersonRepository } from "../dal/PersonRepository";

export class PersonService{

    private personRepository: PersonRepository;
    
    constructor(userRepository: PersonRepository){
        this.personRepository = userRepository;
    }

    public async getPerson(personId: number): Promise<Person> {
        let person: Person = {};
        try{
            person = await this.personRepository.find(personId);       
        }catch(error){
            if(person.id == 0){
                throw new MissedPersonError(`Person with ID ${personId} not found`);
            }
        }
        return person;
    }

    public async addPerson(person: Person): Promise<void> {
        this.personRepository.add(person);   
    }
}