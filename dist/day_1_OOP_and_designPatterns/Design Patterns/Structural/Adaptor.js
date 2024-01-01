"use strict";
class ResumeServiceApi {
    static generateResume(data) {
        /* Implementation */
    }
}
class User {
    constructor({ firstName, lastName, birthday, skills, email, phone, }) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = birthday;
        this.skills = skills;
        this.email = email;
        this.phone = phone;
    }
}
class UserAdapter {
    constructor(user) {
        this.user = user;
    }
    get fullName() {
        return `${this.user.firstName} ${this.user.lastName}`;
    }
    get skills() {
        return Object.keys(this.user.skills);
    }
    get age() {
        return new Date().getFullYear() - this.user.birthday.getFullYear();
    }
    get contact() {
        var _a, _b;
        return {
            email: (_a = this.user.email) !== null && _a !== void 0 ? _a : "",
            phone: (_b = this.user.phone) !== null && _b !== void 0 ? _b : "",
        };
    }
}
// Use case
const user = new User({
    firstName: "Ahmad",
    lastName: "Jafari",
    birthday: new Date(1999, 1, 5, 0, 0, 0, 0),
    skills: {
        TypeScript: 5,
        JavaScript: 3,
        OOP: 5,
        CSharp: 2,
        Java: 1
    },
    email: "me@jafari.dev",
    phone: "+98 930 XXXX"
});
// const resume = ResumeServiceApi.generateResume(user); |-> Type Error!
const standardUser = new UserAdapter(user);
const resume = ResumeServiceApi.generateResume(standardUser); // OK!
