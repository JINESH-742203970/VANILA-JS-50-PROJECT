class BankAccount{
    custoerName;
    accountNumber;
    // _balance=0;
    #balance=0;
    constructor(customerName,balance=0){
        this.customerName=customerName;
        this.accountNumber=Date.now();
        this.#balance=balance;
    }
    deposit(amount){
        this.#balance+=amount;
    }
    withdraw(){
        this.#balance-=amount;
    }
    setBalance(amount){
        if(isNaN(amount)){
            throw new Error('Amount is not a valid');
        }
        this.#balance=amount;
    }
    getBalance(){
        return this.#balance;
    }
}
const rakeshAccount=new BankAccount('rakesh k',5000);
// rakeshAccount.#balance=7000;
console.log(rakeshAccount);
rakeshAccount.setBalance(8000);
console.log(rakeshAccount.getBalance());
class CurrentAccount extends BankAccount{
    transactionLimit=50000;
    constructor(customerName,balance=0){
        super(customerName,balance);
    }
    // Private methods
    #calaculateInterest(amount){
        console.log('Calculating Interest')
    }
    takeAmount(amount){
        this.#calaculateInterest(amount);
        console.log('Taking amount'+amount);
    }
}
const JohnAccount=new CurrentAccount('John',5000);
JohnAccount.takeAmount(50000);
// JohnAccount.#CalculateInterest();