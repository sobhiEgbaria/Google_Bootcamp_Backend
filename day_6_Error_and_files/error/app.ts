import * as fs from 'fs';

class Test {
  private email = '';

  public setEmail(email: string): void {
    if(!email.includes("@") ){
      throw new CustomError("not a valid email address", 1);
    }
    this.email = email;
  }
}


let t = new Test();
try {
  t.setEmail("abc.gmail.com");
} catch (error) {
  console.error("not a valid email address")
  // exception handler code
}

console.log("keep progress")
 