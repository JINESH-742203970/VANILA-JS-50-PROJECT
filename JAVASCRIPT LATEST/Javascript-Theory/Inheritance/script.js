function BankAccount(customerName,balance=0){
    this.customerName=customerName;
    this.accountNumber=Date.now();
    this.balance=balance;
}
BankAccount.prototype.deposit=function(amount){
    this.balance+=amount;
}
BankAccount.prototype.withdraw=function(amount){
    this.balance-=amount;
}
const rakeshAccount=new BankAccount('Rakes K',500);
console.log(rakeshAccount);

function CurrentAccount(customerName,balance=0){
    BankAccount.call(this,customerName,balance);
    this.transactionLimit=5000;
}
CurrentAccount.prototype=Object.create(BankAccount.prototype);
const johnAccount=new CurrentAccount('John',1000);
johnAccount.deposit(500);
console.log(johnAccount);



class currentAccount extends BankAccount{
    transactionLimit=50000;
    constructor(customerName,balance=0){
        super(constructorName,balance);
    }
    
}