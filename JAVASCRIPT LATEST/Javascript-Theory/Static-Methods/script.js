class User{
    static id=1;
    static cache=[{1:"THIS"}];
    constructor(name,age){
        this.name=name;
        this.age=age;
        this.id=User.id++;
    }
    static compareByAge(user1,user2){
        return user1.age-user2.age
    }
    static hasInCache(){
        console.log(this.cache);
    }
}
const user1=new User('Rakesh K',30);
const user2=new User('John Doe',40);
const user3=new User('Jane Doe',20);
const users=[user1,user2,user3];
users.sort(User.compareByAge);
console.log(users);
console.log(User.hasInCache());
// we can use this keyword inside static method if we are accessing static Method & Static Property
// If we want to access static property inside siomple Method then we need to use className to access static property
// checkCache(){
//     console.log(User.cache);
// }
// Math.random();in this case Math is a class Name and random is a static Method
// Object.hasOwnProperty is also static Method of Object class
