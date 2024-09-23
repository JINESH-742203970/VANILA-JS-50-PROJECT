const qrInput=document.getElementById('qr-input');
const qrImg=document.getElementById('qr-img');
const qrButton=document.getElementById('qr-button');

console.log(qrInput,qrImg,qrButton);
qrButton.addEventListener('click',()=>{
    const inputValue=qrInput.value;
    if(!inputValue){
        alert("Please enter a valid URL");
    }
    else{
        qrImg.src=`https://api.qrserver.com/v1/create-qr-code/?size=150*150&data=${inputValue}`;
        qrImg.alt=`QR code for ${inputValue}`;
    }
})