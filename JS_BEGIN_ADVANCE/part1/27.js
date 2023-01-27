// array push pop 

// array shift unshift 

let fruits = ["apple", "mango", "grapes"];
console.log(fruits);
// push
// fruits.push("banana");
// console.log(fruits);
// pop ---> it will return the pushed iteam
// let poppedFruit = fruits.pop();
// console.log(fruits);
// console.log("popped fruits is", poppedFruit);

// unshift  ---> it is used to push at the start of the element
// fruits.unshift("banana");
// fruits.unshift("myfruit");
// console.log(fruits);

// shift  ---> it is used to remove  the first values from the array and it also return them
let removedFruit = fruits.shift();
console.log(fruits);
console.log("removed fruits is ", removedFruit);