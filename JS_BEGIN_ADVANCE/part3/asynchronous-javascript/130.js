// synchronous programming vs asynchronous programming
// synchronous programming
// synchronous programming single threaded
// console.log("script start");

// for (let i = 1; i < 10000; i++) {
//   console.log("inside for loop");
// }

// console.log("script end");

// setTimeout

console.log("script start");

// function hello(){
//   console.log("Hello GUYS");
// }

// setTimeout fun takes two arguments a function and time
// setTimeout(hello,1000);


// time is in the form of the ms (mili second) 

//setTimeout(() => {
//   console.log("inside setTimeout");
// }, 1000);

// setTimeOutFunction return us an id

// what is the need of the id 
// if in running time we don't want that function should not run

const id = setTimeout(() => {
  console.log("inside setTimeout");
}, 0);

for (let i = 1; i < 100; i++) {
  console.log("....");
}

console.log("settimeout id is ", id);
console.log("clearing time out");
clearTimeout(id);
console.log("Script end");
