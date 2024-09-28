//this keyword value depend on the context 
this.a=5;
console.log(this.a);

this.a1=5;
function getParams(){
    console.log(this.a);
}
getParam();

this.a2=5;
const getParam=()=>{
    console.log(this.a2);
}
getParam();
//Normally arrow function case this keyword point out the one label above context

let user={
    name:"piyush",
    age:24,
    getDetails(){
        console.log(this.name);
    },
};
user.getDetails();

let user1={
    name:"Piyush",
    age:24,
    childObj:{
        newName:"Roadside Coder",
        getDetails(){
            console.log(this.newName,"and",this.name);
        },
    },
};
user.childObj.getDetails();
//Roadside Code and undefined
//In this case "this" keyword point the childObj

let user2={
    name:"Piyush",
    age:24,
    getDetails:()=>{
        console.log(this);
    }
};
user.getDetails();//window function

let user3={
    name:"Piyush",
    age:24,
    getDetails(){
        const nestedArrow=()=>console.log(this.name);
        nestedArrow();
    },
};
user.getDetails();//Piyush

//class 
class User{
    constructor(n){
        this.name=n;
    }
    getName(){
        console.log(this.name);
    }
}
const user4=new User("Piyush");
user4.getName();//Piyush

//what is the output
const user5={
    firstName:"Piyush",
    getName(){
        const firstName="Piyush!";
        return this.firstName;
    }
}
console.log(user5.getName());
//in this case it will point to user5 object

//what is the output of accessing its ref?why
function makeUser(){
    return {
        name:"John",
        ref:this,
    };
}
let user6=makeUser();
//Here ref equal to window keyword
console.log(user6.ref.name);//undefined

//To resolve this
function makeUser(){
    return {
        name:"John",
        ref(){
            return this;
        },
    };
}
let user7=makeUser();
console.log(user7.ref().name);//John

//what is the output
const user8={
    name:"Piyush Agarwal",
    logMessage(){
        console.log(this.name);
    },
};
setTimeout(user.logMessage,1000);//undefined
//In this case setTimeout method take callback function but that function din't have name access
setTimeout(function(){
    user.logMessage();
},1000);//Piyush Agarwal

//what is the output
const user9={
    name:"Piyush",
    greet(){
        return `Hello ${this.name}!`;
    },
    farewell:()=>{
        return `Goodbye ,${this.name}!`;
    },
}
console.log(user.greet());//Hello Piyush!
console.log(user.farewell());//Goodbye !

//create an object calculator
let calculator={
    read(){
        this.a=prompt("a=",0);
        this.b=prompt("b=",0);
    },
    sum(){
        return this.a+this.b;
    },
    multiply(){
        return this.a*this.b;
    }
}
calculator.read();
console.log(calculator.sum());
console.log(calculator.multiply());

//what is the output
var length=4;
function callback(){
    console.log(this.length);
}
const object={
    length:5,
    method(fn){
        fn();
    },
};
object.method(callback);//4
//Because here we are passing the function reference 

//what is the output
var length1=4;
function callback1(){
    console.log(this.length1);
}
const object1={
    length:5,
    method(){//arguments=[callback,2,3]
        arguments[0]();
    },
};
object.method(callback,2,3);//3

//Implement this code
const calc={
    total:0,
    add(a){
        this.total=this.total+a;
        return this;
    },
    multiply(b){
        this.total*=b;
        return this;
    },
    subtract(c){
        this.total-=c;
        return this;
    }

};
const result=calc.add(10).multiply(5).subtract(30).add(10);
console.log(result.total);