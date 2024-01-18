

// import 'reflect-metadata';
// import { getRepository } from 'typeorm';
// import { Dao } from './Dao';
// import { Student } from '../model/Student';


// export class PersonRepository implements Dao<Student>{
    
//     private studentRepository;

//     constructor(){
//         this.studentRepository = getRepository(Student);
//     }
    
//     public add(student: Student): Promise<void> {
//         studentRepository.save(student);
//     }
    
//     public find(id: number): Promise<Student> {
//         let person = await studentRepository.find(id);
//         return person;
//     }
    
//     public remove(student: Student): boolean {
//         throw new Error('Method not implemented.');
//     }

// }

