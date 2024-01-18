import Person from "../model/Person";
import { Dao } from "./Dao";

class IMPersonRepository implements Dao<Person>{
    add(t: Person): Promise<void> {
        throw new Error("Method not implemented.");
    }
    remove(t: Person): boolean {
        throw new Error("Method not implemented.");
    }
    find(id: number): Promise<Person> {
        throw new Error("Method not implemented.");
    }

} 