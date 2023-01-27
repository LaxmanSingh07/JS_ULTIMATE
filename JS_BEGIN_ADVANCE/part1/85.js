// let numbers = [1,2,3];
let numbers = new Array(1, 2, 3);
// internally js will create fucntoin using the constructor 

// prototype of array is object 
console.log(Object.getPrototypeOf(numbers));
// console.log(Array.prototype);
console.log(numbers);

function hello() {
    console.log("hello");
}

//prototype 
// console.log(hello.prototype);

// you can change its prototype 
hello.prototype = [];
console.log(hello.prototype);
hello.prototype.push('1');
console.log(hello.prototype);

