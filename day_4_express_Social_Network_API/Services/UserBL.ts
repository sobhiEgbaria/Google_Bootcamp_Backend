import { UserDataAccess } from "../DAL/userDataAccess";
import User from "../models/User";

export class UserBL {
  private userDataAccess = new UserDataAccess();

  addUser(user: User) {
    // Additional business logic or validation
    this.userDataAccess.addUser(user);
  }

  deleteUser(user: number) {
    // Additional business logic or validation
    this.userDataAccess.deleteUser(user);
  }

  updateUser(user: number, body: object) {
    // Additional business logic or validation
    this.userDataAccess.updateUser(user, body);
  }

  // Similarly, implement methods for getUser updateUser and deleteUser
}

export default UserBL;
