// callback functions 

// function as a agrument 
function myFunc2(name){
    console.log("inside my func 2")
    console.log(`your name is ${name}`);
}

// when we are passing a function as an argument then we have to use callback as name
function myFunc(callback){
    console.log("hello there I am a func and I can..")
    callback("Laxman");
}


myFunc(myFunc2);