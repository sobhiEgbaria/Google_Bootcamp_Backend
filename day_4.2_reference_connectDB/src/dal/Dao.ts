
interface Dao <T>{


    add(t: T): Promise<void>;
    remove(t: T): boolean;
    find(id: number): Promise<T> ;
}

export {Dao};