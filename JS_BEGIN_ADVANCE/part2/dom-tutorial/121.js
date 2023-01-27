// this keyword


const btn = document.querySelector(".btn-headline");

// btn.addEventListener("click",function(){
//     console.log("you clicked me !!!!");
//     console.log("value of this")
//     console.log(this); //value of the this is button itself
// });


btn.addEventListener("click", ()=>{
    console.log("arrow function !!!")
});

// in case of the arrow function this will be window because it does'nt have any this 