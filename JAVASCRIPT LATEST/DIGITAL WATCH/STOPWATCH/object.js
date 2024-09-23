"use strict";
const product = {
  id: 1,
  pname: "laptop",
};

// let person={
//     name:"Vinod",
//     age:30,
//     isStudent:false,
//     greet:function(){
//         console.log('Welcome to World Best CSS Course');
//     },
// };
// creating Objects
let person = {
  name: "vinod",
  age: 30,
  "is'Student": false,
  greet: function () {
    console.log("Welcome to world Best CSS Course");
  },
};
// Accessing Objects
console.log(person.age);
console.log(person.name);
console.log(person["is'Student"]);
// Modifying Existing Objects
person.job = "web dev";
person.age = 18;
person["city"] = "Bangalore";

// Method
// Methods in objects are functions associated with the object .They can be invoked using the same notation as properties
console.log(person.greet());

// we can add dynamic keys in an object
let idType = "studentId";

let student = {
  [idType]: "A123456",
  sName: "Vinod",
  sAge: 29,
  isStudent: true,
  greet: function () {
    console.log(
      ` Hey,my ${idType} is ${student[idType]} and my name is ${student.sName}.`
    );
  },
};
console.log(student);
student.greet();

// Data Modeling:To show the visual representation  of either a whole information system or parts of it to communicate connections between data points and structures.

// Explain the difference between passing objects by reference and by value in Javascript

// Passing by value:When passing by value,a copy of the primitive value is created and passed to the function or assigned to a variable.Any changes made to the copy do not affect the original value
// In javascript Primitive data types like numbers and strings are passed by value ,while objects are passed by reference
let a = 10;
const modifyValue = (x) => (x = 20);
console.log(modifyValue(a));
console.log(a);
// passing by reference ;When passing by reference a reference to the memory location of the object is passed to the function or assigned to a variable .any changes madde to the object through this reference will affect the original object
let obj = { id: 5, name: "Kodyfier" };
// let obj1=obj;
// obj1.name="thapa technical";
// console.log(obj1);
// console.log('original'+obj);
// console.log('original',obj);

// To create a true copy of the object we use Object.assign
// let newObj=Object.assign({},obj);
// console.log(newObj);
// newObj.name="thapa technical";
// console.log(newObj);
// console.log(obj);

let newObj1 = { ...obj };
console.log(newObj1);
newObj1.name = "Thapa Technical";
console.log(newObj1);
console.log(obj);

// Two objects are equal only if they refer to the same object
// Independent Object(even if they look alike) are not equal
const obj1 = { name: "vinod" };
const obj2 = { name: "vinod" };
const obj3 = obj1;
const isEqual = obj1 === obj2 ? true : false;
const isEqual1 = obj1 === obj3 ? true : false;
console.log(isEqual);
console.log(isEqual1);

// JSON.stringify;
// JSON.parse;

// this is not a variable .It is a keyword .you cannot change the value of this
// In an object ,this refers to the object
// Alone ,this refers to the global object
// In a function,this refers to the global object
// In a function ,in strict mode,it is undefined
// In an event ,this refers to the element that received the event
// Methods like call(),apply(),bind() can refer this to any object
console.log(this);
function x() {
  console.log(this);
}
x();

const ob = {
  name: "Kodyfier",
  // greet:function(){
  //     console.log(this);
  // },
  greet() {
    console.log(this);
  },
};
ob.greet();

// Object.keys():Returns an array containing the name of all enumerable own properties of an object
// Object.values():Returns an array containing the values of all enumerable own properties of an object
// Object.entries();Return an array containing arrays of key value pairs for each enumerable own property of an object
// Object.hasOwnProperty():Return a boolean indicating whether the object has specified property or not
// Object.assign():Copies the values of all enumerable own properties from one or more source objects to a target object.
// Object.freeze():Freezes an object,preventing new properties from being added to it and existing properties from being modified or deleted
const product1 = {
  id: 1,
  name: "Laptop",
  category: "Computers",
  brand: "ExampleBrand",
  price: 999.99,
  description:
    "Powerful laptop with a quad-core i5 processor,8GB RAM ,256GB SSD,and a 14-inch FHD display.",
  image: "image link will be added during projects",
};
console.log(Object.keys(product1));
console.log(Object.values(product1));

console.log(Object.entries(product1));
console.log(product1.hasOwnProperty("name"));

const target = { a: 1, b: 2 };
const source = { b: 3, c: 4 };
const mergedObject = Object.assign({}, target, source);
console.log(mergedObject);

Object.freeze(product1);
product.id = "5656";
console.log(product1);

// Given an object representing a student ,write a function to add a new subject with its corrsponding grade to the student's record.Also check if the grades property present or not
let student1 = {
  name: "Bob",
  age: 20,
  grades: {
    math: 90,
    science: 85,
    history: 88,
  },
};
const addSubjectGrade = (student, subject, marks) => {
  if (!student.grades) {
    student.grades = {};
  }
  return (student.grades[subject] = marks);
};
console.log(addSubjectGrade(student1, "computer", 92));
console.log(student1);

// Write a Javascript functions to compare that two objects are equal or not
let objA={name:"Alice","age":26,city:"New York"};
let objB={name:"Alice",age:25,city:"New York"};
const areObjectEqual=(obj1,obj2)=>{
  let o1=Object.keys(obj1);
  let o2=Object.keys(obj2);
  if(o1.length!==o2.length){
    return false;
  }
  for (let key of o1){
    if(objA[key]!==objB[key]){
      return false;
    }
  }
}
console.log(areObjectEqual(objA,objB));

// write a functions that transform an array of an objects into an object where key are the objects ids;

let inPutArray=[
  {id:1,name:"Alice"},
  {id:2,name:"Bob"},
  {id:3,name:"Charlie"},
]
const arrayToObj=(inputArray)=>{
  let obj={};
  // for(let k1 of inputArray){
  //   obj1[index+1]=k1;
  // }
  inputArray.forEach((k1,index)=>{
    obj[index+1]=k1;
  })
  return obj;
}
console.log(arrayToObj(inPutArray));