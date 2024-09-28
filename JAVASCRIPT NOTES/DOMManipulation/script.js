//what is EventBubbling
// in Event bubbling event are executing from bottom to up
const div=document.querySelector("div");
const form=document.querySelector("form");
const button=document.querySelector("button");
// div.addEventListener("click",function(){
//     alert("div");
// });
// button.addEventListener("click",function(){
//     alert("button");
// })
// form.addEventListener("click",function(){
//     alert("form");
// })
div.addEventListener("click",func);
button.addEventListener("click",func);
form.addEventListener("click",func);
function func(event){
    alert("currentTarget="+event.currentTarget.tagName+",target="+event.target.tagName+",this="+this.tagName);
}
//event.currentTarget.tagName:
//event.target.tagName:from where the event triggering start
//this.tagName:event.curretnTarget

//event capturing/Trickling:In this process event executes from Top to bottom
div.addEventListener("click",function(e){
    e.stopPropagation()
    alert("div")
},{capture:true,});
form.addEventListener("click",function(e){
    e.stopPropagation();
    alert("form");
},{
    capture:true,
})
button.addEventListener("click",function(e){
    alert("button");
},{
    capture:true,
})
//if we want to trigger button then form and want to stop propagation for this we need to add e.stopPropogation() in form

// div.addEventListener("click",function(event){
//     alert("div");
// })
// form.addEventListener("click",function(event){
//     alert("form");
// },{capture:true});
// button.addEventListener("click",function(event){
//     alert('button');
// });
// o/p form button div