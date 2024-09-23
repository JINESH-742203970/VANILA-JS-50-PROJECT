class BankAccount{
    customerName;
    accountNumber;
    balance;
    constructor(customerName,balance=0){
        this.customerName=customerName;
        this.accountNumber=Date.now();
        this.balance=balance;
    }
    deposit(amount){
        this.balance+=amount;
    }
    withdraw(amount){
        this.balance-=amount;
    }
}
const rakeshAccount=new BankAccount("Rakesh K",1000);
console.log(rakeshAccount);
rakeshAccount.deposit(1000);
rakeshAccount.withdraw(1000);
console.log(rakeshAccount);

// const BankAccount=class{}
// function declaration are Hoisted
// Function expression are not hoisted