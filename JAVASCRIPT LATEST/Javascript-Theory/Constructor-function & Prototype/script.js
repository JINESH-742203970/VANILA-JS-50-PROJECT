const accounts=[];
const acccountForm=document.querySelector('#accountForm');
const customerName=document.querySelector('#customerName');
const balance=document.querySelector('#balance');

const depositForm=document.querySelector('#depositForm');
console.log(depositForm);
const accountNumber=document.querySelector('#accountNumber');
const amount=document.querySelector('#amount');
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
acccountForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const account=new BankAccount(customerName.value,balance.value);
    accounts.push(account);
    console.log(accounts);
    customerName.value="";
    balance.value="";
})
depositForm.addEventListener('submit',(e)=>{
    console.log("Khatushyam")
    e.preventDefault();
    const account=accounts.find((account)=>account.accountNumber===+accountNumber.value)
    console.log(account);
    account.deposit(+amount.value);
    console.log(accounts);
})