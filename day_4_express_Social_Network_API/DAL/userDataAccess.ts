import User from "../models/User";
import InMemoryDB from "../utils/InMemoryDB";

export class UserDataAccess {
  private db = InMemoryDB.getInstance();

  addUser(user: User) {
    this.db.addUser(user);
  }

  updateUser(user: number, body: object) {
    this.db.updateUser(user, body);
  }
  deleteUser(user: number) {
    this.db.deleteUser(user);
  }

  // Similarly, implement methods for updateUser and deleteUser
}
