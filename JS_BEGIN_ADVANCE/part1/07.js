// trim() 
// toUpperCase()
// toLowerCase()
// slice()

// string is immutable
let firstName = "harshit";

//we can't change our string at all we have to take the anothe string to assign the new value 

// console.log(firstName.length);
// firstName = firstName.trim(); // "harshit"
// console.log(firstName)
// console.log(firstName.length);
// firstName = firstName.toUpperCase();
// firstName = firstName.toLowerCase();
// console.log(firstName);

// start index 
// end index

// it will give the sliced string from start the end-1
let newString = firstName.slice(0, 3); // hars
console.log(newString);

// it we pass only argument then it will work as the start

let mystring = firstName.slice(1);
console.log(mystring);