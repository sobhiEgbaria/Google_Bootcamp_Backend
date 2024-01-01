"use strict";
class BankAccount {
    constructor(accountName, balance) {
        this.accountName = accountName;
        BankAccount.accountNumber = BankAccount.accountNumber + Date.now();
        this.balance = balance;
    }
}
BankAccount.accountNumber = 0;
