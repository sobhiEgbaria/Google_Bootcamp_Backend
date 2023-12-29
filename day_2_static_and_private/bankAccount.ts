class BankAccount {
  public accountName: string;
  public balance: number;
  private static accountNumber: number = 0;

  constructor(accountName: string, balance: number) {
    this.accountName = accountName;
    BankAccount.accountNumber = BankAccount.accountNumber + Date.now();
    this.balance = balance;
  }
}
