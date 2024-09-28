var obj={name:"Piyush"};
function sayHello(age,profession){
    return 'Hello'+this.name+"is"+age+"and is an"+profession;
}
sayHello();//'Hello'
console.log(sayHello.call(obj,24,"Software Engineer"));//'Hello" Piyush
//In this case this keyword will point out the Obj
//In apply methid we can pass other parameter in a array
console.log(sayHello.apply(obj,[24,"softwareEngineer"]));
//bind method return the copy of function which we can use to call after
const bindFunc=sayHello.bind(obj);
console.log(bindFunc(24,'Software Engineer'));
console.log(bindFunc("27","Software Engineer"));



//what is output
const person={name:"Piyush"};
function sayHi(age){
    return `${this.name} is ${age}`;
}
console.log(sayHi.call(person,24));
//It will return Piyush is 24
console.log(sayHi.bind(person,24));
//It ill return function

//what is output
const age=10;
var person1={
    name:'Piyush',
    age:20,
    getAge:function(){
        return this.age;
    },
};
var person2={age:24};
console.log(person1.getAge.call(person2));//24

//what is the output
var status='1';
setTimeout(()=>{
    const status='2';
    const data={
        status:'3',
        getStatus(){
            return this.status;
        },
    };
    console.log(data.getStatus());//3
    console.log(data.getStatus.call(this));//1
},0);

//call printAnimals suct that it prints all animals
const animals=[
    {species:'Lion',name:"King"},
    {species:'whale',name:'Queen'},
];
function printAnimals(i){
    this.print=function(){
        console.log('#'+i+""+this.species+":"+this.name);
    };
    this.print();
}
for(let i=0;i<animals.length;i++){

    printAnimals.call(animals[i],i)
}

//append an array to another array
const array=["a","b"];
const elemnts=[0,1,2];
array.push.apply(array,elements);
console.log(array);

//find max and min number in array
const numbers=[5,6,2,3,7];
console.log(Math.max.apply(null,numbers));
console.log(Math.min.apply(null,numbers));
console.log(Math.max(numbers));//NaN


//Bound function
function f(){
    console.log(this);
}
let user={
    g:f.bind(null),
}
user.g();//window object

//Bind chaining is not allowed
function f(){
    console.log(this.name);
}
f=f.bind({name:"John"}).bind({name:'Ann'});
f();//John