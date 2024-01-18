import { Client, QueryResult } from "pg";
import Person from "../model/Person";
import { getClient } from "./DBConnect";
import { Dao } from "./Dao";

export class PersonRepository implements Dao<Person>{
    
    private client: Client;
    constructor(){
        this.client = getClient();
    }
    public async add(person: Person): Promise<void> {
        const query = {
            text: 'INSERT INTO person(id, name, email) VALUES($1, $2, $3)',
            values: [person.id, person.name, person.email]
        }
        this.client.query(query);
    }

    public async find(personId: number): Promise<Person> {
        const query = {
            text: 'SELECT * FROM person WHERE id = $1',
            values: [personId]
        }
        let res = await this.client.query(query); 
        let person: Person = {id: res.rows[0].id, name: res.rows[0].name, email: res.rows[0].email}          
        return person;
    }

    remove(t: Person): boolean {
        throw new Error("Method not implemented.");
    }

}