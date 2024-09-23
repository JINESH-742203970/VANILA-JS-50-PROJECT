let btn1 = document.getElementById("myButton1");
let btn2 = document.getElementById("myButton2");
let copyDiv = document.querySelector(".copycode");
let rgb1 = "#004773";
let rgb2 = "#54d542";
const hexValues = () => {
  let myHexValues = "0123456789abcdef";
  let colors = "#";
  for (let i = 0; i < 6; i++) {
    colors = colors + myHexValues[Math.floor(Math.random() * 16)];
  }
  return colors;
};
const handleButton1 = () => {
  let rgb1 = hexValues();
  document.body.style.backgroundImage = `linear-gradient(to right,${rgb1},#444)`;
  btn1.innerText = rgb1;
  btn1.style.backgroundColor=rgb1;
  copyDiv.innerHTML = `background-image:linear-gradient(to right,${rgb1},${rgb2})`;
  return rgb1;
};
const handleButton2 = () => {
  let rgb2 = hexValues();
  document.body.style.backgroundImage = `linear-gradient(to right,${rgb2},#777)`;
  document.body.style.backgroundImage = `linear-gradient(to right,${rgb2},#444)`;
  btn2.innerText = rgb2;
  btn2.style.backgroundColor=rgb2;
  copyDiv.innerHTML = `background-image:linear-gradient(to right,${rgb1},${rgb2})`;
  return rgb2;
};
btn1.addEventListener("click", handleButton1);
btn2.addEventListener("click", handleButton2);
copyDiv.addEventListener('click',()=>{
    navigator.clipboard.writeText();
})
