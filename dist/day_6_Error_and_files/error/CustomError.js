"use strict";
class CustomError extends Error {
    constructor(message, errorCode) {
        // Call the parent constructor with the error message
        super(message);
        this.errorCode = errorCode;
    }
}
class LengthValidationError extends CustomError {
    constructor(message, errorCode, length) {
        super(message, errorCode);
        this.length = length;
    }
    getLegth() {
        return this.length;
    }
}
function validateEmail(email) {
    if (!email.includes("@")) {
        throw new CustomError("not a valid email address", 1);
    }
    else if (email.length > 20) {
        throw new LengthValidationError("Too long email address", 2, email.length);
    }
}
try {
    validateEmail("abc@gmail.comvvvvvvvvvvvvvvvvvvvv");
}
catch (error) {
    if (error instanceof LengthValidationError) {
        console.error('LengthValidationError error caught:', error.message, error.getLegth());
    }
    else if (error instanceof CustomError) {
        console.error('CustomError error:', error.message);
    }
}
