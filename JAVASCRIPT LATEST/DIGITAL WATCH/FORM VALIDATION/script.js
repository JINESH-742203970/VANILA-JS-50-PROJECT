document.querySelector("#formSubmit").addEventListener("click",(e)=>{
    console.log("Khatushyam");
    e.preventDefault();

const username=document.getElementById("username");
console.log(username);
const email=document.getElementById("email").value.trim();
console.log(email);
const phone=document.getElementById("phone").value.trim();
console.log(phone);
const password=document.getElementById("password").value.trim();
console.log(password);
const c_password=document.getElementById("cPassword").value.trim();
console.log(c_password);

// Regular Expressions
const usernameRegex=/^[A-za-z0-9]{3,20}$/
const passwordRegex=/^(?=.*[A-Z])(?=.*[a-z])(?=.*[\d])(?=.*[\W_]){8,}$/;
const emailRegex=/^[A-Za-z0-9]+(?:[.%_+][A-Za-z0-9]+)*@[A-Za-z0-9]+\.[A-Za-z]{2,}$/;

const phoneRegex=/^[6-9][\d]{9}$/;

document.querySelectorAll(".error").forEach((currElem)=>(currElem.textContent=""));
let isValid=true;
console.log(usernameRegex.test(username));
console.log(emailRegex.test(email));
console.log(passwordRegex.test(password));
console.log(phoneRegex.test(phone));
if(!usernameRegex.test(username)){
    document.getElementById("usernameError").textContent="username is not valid";
    isValid=false;
}

if(!emailRegex.test(email)){
    document.getElementById("emailError").textContent="Please enter a valid email address";
    isValid=false;
}

if(!phoneRegex.test(phone)){
    document.getElementById("phoneError").textContent="Phone number must be 10 digits long and start with 6,7,8 or 9"
    isValid=false;
}
if(!passwordRegex.test(password)){
    document.getElementById('passwordError').textContent="Password is not valid";
    isValid=false;
}
if(!passwordRegex.test(c_password)){
    document.getElementById("cPasswordError").textContent="Confirm Password is not valid";
    isValid=false;
}
if(c_password!==password){
    document.getElementById("cPasswordError").textContent="Password is not matching";
    isValid=false;

}
let userData=[];
console.log(isValid);
if(isValid){
    let formClass=document.getElementsByClassName("form-control");
    Array.from(formClass).forEach((currElem)=>userData.push(currElem.value));
    Array.from(formClass).forEach((currElem)=>currElem.textContent=" ");
    console.log(userData);
    alert('Registration Successful');
}
})