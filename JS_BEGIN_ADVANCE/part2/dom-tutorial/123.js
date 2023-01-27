// event object 

// const firstButton = document.querySelector("#one");



// firstButton.addEventListener("click", function(){
//     console.log(this);
// })




// event is object

// firstButton.addEventListener("click", function(event){
//     console.log(event);
// })



// jab bhi mai kisi bhi element pe event listener add hoga 
// js Engine --- line by line execute karta hai 
// browser ---- js Engine + extra features 
// browser ----- js Engine + WebApi

// jab browser ko pata chala ki user ne event perform kia 
// jo hum listen kar rahe hai 
// browser -----   will do 2 tasks

// 1.) callback function hai vo js Engine ko dega ...... 
// 2.)  callback function ke sath browser jo event hua hai uski information bhi dega
// ye info hamein ek object ke form mai milegi   (event)


// const allButtons = document.querySelectorAll(".my-buttons button");


// event can be taken by the simple as well as the arrow function 


// for(let button of allButtons){
//     button.addEventListener("click",(e)=>{
//         console.log(e.currentTarget);
//     })
// }