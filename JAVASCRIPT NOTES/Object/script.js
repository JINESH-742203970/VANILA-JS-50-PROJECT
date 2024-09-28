const user={name:"Roadside Coder",
    age:24
}
console.log(user);
user.name="Piyush Agarwal";
console.log(user);
delete user.age;
//we can use delete keyword on object only for deletion of key

const func=(function(a){
    delete a;
    return a;
})(5);
console.log(func);
//In case of function delete keyword is not work

const user1={
    name:"Roadside Coder",
    age:24,
    "like the video":true,
};
// console.log(user1.like the Video);
//In this case we will get Error
console.log(user1["like the video"]);

//Dynamic change key value in Object
const property='firstName';
const name="Piyush Agarwal";
const user2={
    [property]:name,
}
console.log(user2);

//For in loop in Object
const user3={
    name:"Roadside Coder",
    age:24,
    isTotallyAwesome:true,
};
for(let key in user3){
   console.log(user[key]);
}

//In object we have two same key then first key will not consider in ouput second key always considered for output
const obj={
    a:"one",
    b:"two",
    a:"three",
};
console.log(obj);

//create a function multiplyByTwo(obj) that multiplies all numeric property values of nums by 2
let nums={
    a:100,
    b:200,
    title:"My nums",
}
function multiplyNumericObj(obj){
    for (let key in obj){
        if(typeof obj[key]==="number"){
            obj[key]*=2;
        }

    }
    return obj;
}
console.log(multiplyNumericObj(nums));


//what is the output of the following code
const a={};
const b={key:"b"};
const c={key:"c"};
a[b]=123;
a[c]=456;
console.log(a[b]);
//key can not be object so we need to convert this in stringBut object can not be converted in string so when he is trying to this 
//then we get this "[Object Object]""
// a["[object object]"]=123;
// a["[object object]"]=456

//what is JSON.stringify and JSON.parse
const user={
    name:"piyush",
    age:24,
}
const strObj=JSON.stringify(user);
console.log(JSON.stringify(user));
localStorage.setItem("test",strObj);
//If we try to store object without doing JSON.stringoify then it will store in [object object]in this mann er
//{"name":"Piyush","age":24}
console.log(JSON.parse(strObj));
console.log(JSON.parse(localStorage.getItem("test")));
//{name:'Piyush',age:24}

//what is output
console.log([..."lydia"]);
{'l','y','d','i','a'}

//what is output
const user={name:"Lydia",age:21};
const admin={admin:true,...user};
console.log(admin);
// {admin:true,name:"Lydia",age:21"}

//what is output
const settings={
    username:"Piyush",
    level:19,
    health:90,
}
const data=JSON.stringify(settings,["level","health"]);
console.log(data);
//It has only stringified only properties which is in array
//{"level":19,"health":90}

//what is output
const shape={
    radius:10,
    diameter(){
        return this.radius*2;
    },
    perimeter:()=>2*Math.PI *this.radius,
};
console.log(shape.diameter());//20
console.log(shape.perimeter());//NaN

//what is destructuring in Objects
let user4={
    name:"Piyush",
    age:24,
    fullName:{
        first:"Piyush",
        last:'Agarwal',
    }
};
// const name="Roadside Coder";
const{name:myName,fullName:{first,last}}=user4;
console.log(myName);
console.log(first);

//what is the output
// function getItems(fruitList,...args,favoriteFruit){
//     return [...fruitList,...args,favoriteFruit]
// }
// getItems(["banana","apple"],"pear","orange");
//Error:we can't use rest operator in between of arguments it will come as last arguments

//what is the output
let c1={greeting:"Hey!"};
let d;
d=c1;
c1.greeting="Hello";
console.log(d.greeting);
//when we trying to assign one object into another object then we are not assigning object properties we 
//are assigning object reference

//what is output
console.log({a:1}=={a:1});//false
// console.log({a:1}==={a:1});//false

//what is output
let person={name:"Lydia"};
const members=[person];
console.log(members);
person=null;
console.log(members);
//[{name:"Lydia" }]

//what is the output
let person1={name:'Lydia'};
const members1=[person1];
person1.name=null;
console.log(members1);
//[{name:null}]

//what is the output
const value={number:10};
const multiply=(x={...value})=>{
    console.log(x.number*=2);
}
multiply();//20
multiply();//20
multiply(value);//20
console.log(value);
multiply(value);//40
//spread operator not take the reference of original object it will make the clone of object

//what is the output
function changeAgeAndReference(person){
    person.age=25;
    person={
        name:"John",
        age:50,
    }
    return person;
}
const personObj1={
    name:"Alex",
    age:30,
}
const obj2=changeAgeAndReference(personObj1);
console.log(obj2);
//{name:"John",age:50}
console.log(personObj1);
// {name:"Alex",age:25};

//what is shallow copy and deep copy
//shallow copy:when one object copy into another object but another object some property still pointing out the original object property
//Deep copy:when we completely clone one object into another object
let user5={
    name:"Roadside Coder",
    age:24,
}
const objClone=Object.assign({},user5);
objClone.name="Piyush";//It will not affect the original object
console.log(objClone);
//Both are the way of doing deep copy
//const objClone=Object.assign({},user5);
// const ObjClone=JSON.stringify(JSON.parse(user5));
