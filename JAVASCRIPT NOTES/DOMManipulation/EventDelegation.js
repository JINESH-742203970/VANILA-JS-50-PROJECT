//we can not add event Listener on each product so in this case our website where lot ofevent listener is running
//Here we add event listener on parent elements rather than descendants element
document.querySelector(".products").addEventListener("click",(event)=>{
     if(event.target.tagName==="SPAN"){
        window.location.href+="/"+event.target.className;
     }
})
    //    <div class="products">
    //     <span class="mobile">mobile</span>
    //     <span class="Headphone">Headphone</span>
    //     <span class="laptop">laptop</span>
    //     <span class="apeaker">Speaker</span>
    //     <span class="USB DOCK">USB Dock</span>
    //     <span class="Tripod">Tripod</span>
    //   </div>
    //   <script src="EventDelegation.js"></script> 