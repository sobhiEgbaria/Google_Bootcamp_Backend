
class CustomError extends Error {
    private errorCode: number;
    constructor(message: string, errorCode: number) {
      // Call the parent constructor with the error message
      super(message);
      this.errorCode = errorCode;
    }
}
  


class LengthValidationError extends CustomError {
  private length: number;
  constructor(message: string, errorCode: number, length: number) {
    super(message, errorCode);
    this.length = length;
  }

  public getLegth(): number{
    return this.length;
  }
}


function validateEmail(email: string){
    if(!email.includes("@") ){
        throw new CustomError("not a valid email address", 1);
    } else if(email.length > 20){
        throw new LengthValidationError("Too long email address", 2, email.length);
    }
}

try {
    validateEmail("abc@gmail.comvvvvvvvvvvvvvvvvvvvv");
} catch (error) {
    if (error instanceof LengthValidationError) {
        console.error('LengthValidationError error caught:', error.message, error.getLegth());
    } else if (error instanceof CustomError) {
        console.error('CustomError error:', error.message);
    }
}



