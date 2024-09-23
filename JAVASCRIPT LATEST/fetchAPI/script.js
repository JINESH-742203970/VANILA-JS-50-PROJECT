const url="https://cat-fact.herokuapp.com/facts";
const factPara=document.querySelector("#fact");
const factPara1=document.querySelector("#fact1");
console.log(factPara1);
const btn=document.querySelector("#load");
const getFacts=async(URL)=>{
    console.log("getting data.....");
    let response=await fetch(URL);
    let data=await response.json();
    // .json() return a second promise which is asynchronous operation for that we used await  
    console.log(data);
    factPara.innerText=data[0].text;
}
getFacts(url);
// btn.addEventListener("click",getFacts );

function getFacts1(){
    fetch(url).then((response)=>{
        return response.json();
    }).then((data)=>{
        console.log(data);
        console.log(data[2].text);
        factPara1.textContent=data[2].text;
    })
}
btn.addEventListener("click",getFacts1);