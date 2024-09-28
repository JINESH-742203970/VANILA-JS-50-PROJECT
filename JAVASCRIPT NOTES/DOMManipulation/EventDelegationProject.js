const container=document.querySelector(".modalContainer");
const button=document.querySelector(".modalButton");
button.addEventListener("click",()=>{
    toggleModel(true);
})
function toggleModel(toggle){
    container.style.display=toggle?"flex":"none"
}
container.addEventListener("click",(e)=>{
    if(e.target.className!=="modal"){
        toggleModel(false);
    }
})
{/* <button class="modalButton">open modal</button>
<div class="modalContainer">
  <div class="modal">Modal Content</div>
</div>
<script src="EventDelegationProject.js"></script> */}