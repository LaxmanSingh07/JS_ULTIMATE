// array destructuring 
const myArray = ["value1", "value2", "value3", "value4"];
// let myvar1 = myArray[0];
// let myvar2 = myArray[1];
// console.log("value of myvar1", myvar1);
// console.log("value of myvar2", myvar2);

// let [m1,m2] = myArray;
// use can use m1 and m2 as the normal value
// console.log(m1, m2);

// if you want to skip something then you can use like this 
// let [m1, , m2] = myArray;
// console.log(m1, m2);



// let myNewArray=myArray.slice(2);
let [myvar1, myvar2, ...myNewArray] = myArray;
// rest will go to the myNewArray
console.log(myNewArray);
console.log("value of myvar1", myvar1);
console.log("value of myvar2", myvar2);
// console.log(myNewArray);




// if your array have only one element and you are trying to do desctruing with more than one varaible then other will to undefined 