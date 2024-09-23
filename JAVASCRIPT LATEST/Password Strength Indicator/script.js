const inputField=document.querySelector('#password');
const outputField=document.querySelector('#output');
inputField.addEventListener('input',function(){
    console.log(inputField.value);
    let password=inputField.value;
    if(password.length<8){
        outputField.innerText='Password is Too short';
        outputField.style.color='red';
    }
    else{
        if(password.search(/[a-z]/)==-1){
            outputField.innerText='Password is missing a lowercase letter';
            outputField.style.color='red';
        }
        else if(password.search(/[A-Z]/)==-1){
            outputField.innerText='Password is missing a uppercase letter';
            outputField.style.color='red';
        }
        else if(password.search(/[0-9]/)==-1){
            outputField.innerText='Password is missing a Number';
            outputField.style.color='red';
        }
        // for special character
        else{
            outputField.innerText='Password is strong';
            outputField.style.color='green';
        }
    }
})