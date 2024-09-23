function BankAccount(customerName,balance=0){
    this.customerName=customerName;
    this.accountNumber=Date.now();
    this.balance=balance;
    this.deposit=function(amount){
        this.balance=this.balance+amount;
    }
    this.withdraw=(amount)=>{
        this.balance=this.balance-amount;
    }
}
const rakeshK=new BankAccount("rakesh k");
console.log(rakeshK);
const johnK=new BankAccount("John Doe",1500);
console.log(johnK);
console.log(BankAccount.prototype);
BankAccount.prototype.test="this is basic";
BankAccount.prototype.deposit=function(amount){
    this.balance+=amount;
}
BankAccount.prototype.withdraw=function(amount){
    this.balance-=amount;
}
rakeshK.deposit(3000);
rakeshK.withdraw(1000);

// if each object have same method then it will use unneessary memory to avoid memory consumption we can share all same method with object
// For this we can use Prototype