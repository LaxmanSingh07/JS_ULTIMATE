const allButtons = document.querySelectorAll(".my-buttons button");


// for(let button of allButtons){
//     button.addEventListener("click", function(){
//         console.log("you clicked me!!!");
//         // console.log(this);
//         // console.dir(this);

//         console.log(this.textContent);

//     })
// }

// but the behaviour of the arrow function is very much differnet from that of the 
// others


// for(let button of allButtons){
//     button.addEventListener("click",()=>{
//         console.log("you clicked me!!!");

//         // it will print undefined 

//         console.log(this.textContent);

//     })
// }

// for(let i = 0 ; i< allButtons.length; i++){
//     allButtons[i].addEventListener("click", function(){
//         console.log(this);
//     })
// }


allButtons.forEach(function(button){
    button.addEventListener("click", function(){
        console.log(this);
        });
})