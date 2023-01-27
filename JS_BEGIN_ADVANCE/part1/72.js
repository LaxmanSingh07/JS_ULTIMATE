"use strict";
// console.log(window);
// console.log(this);
function myFunc(){
    // if we don't use the strict mode than it will print the window object 
    // else undefiend
        console.log(this);
    }
// window.myFunc();
myFunc();