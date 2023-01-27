// Maps --> it is different from the map method of the array 

//  it is like object it is used to store the key value pair 
// map is an iterable

// store data in ordered fashion

// store key value pair (like object)
// duplicate keys are not allowed like objects


// different between maps and objects

// objects can only have string or symbol
// as key 

// in maps you can use anything as key
// like array, number, string 

// object literal 
// key -> string 
// key -> symbol
// const person = {
//     firstName : "harshit",
//     age: 7,
//     1:"one"
// }
// console.log(person.firstName);
// console.log(person["firstName"]);
// // // console.log(person[1]);
// for(let key in person){
//     console.log(typeof key);
// }

// key value pair 
// const person = new Map();
// person.set('firstName', 'Harshit');
// person.set('age', 7);
// person.set(1, 'one');

// console.log(person);

// console.log(person.firstName); // it wil not work in case of MAPS
// console.log(person.get(1));// it is used to get the values 
// // console.log(person);
// for (let key of person.keys()) {
//     console.log(key, typeof key);
// }

// person.set([1, 2, 3], 'onetwothree');
// // you cna use the object literal
// person.set({ 1: 'one' }, 'onetwothree');
// console.log(person);

// it is iterable instead of map 

// for (let key of person) {

//     console.log(key); // it will give ouput in form of the array 
//         console.log(Array.isArray(key));

// }

// i want to destructe the array 

// for (let [key, value] of person) {
//     // console.log(Array.isArray(key)); // now it will return false because we have disrcuted it 
//     console.log(key, value)
// }

// you can also make map like this 

// const person=new Map([['firstName','Laxman'],['age ',7]]);
// console.log(person);

const person1 = {
    id: 1,
    firstName: "harshit"
}
const person2 = {
    id: 2,
    firstName: "harshta"
}

const extraInfo = new Map();
extraInfo.set(person1, {age: 8, gender: "male"});
// extraInfo.set(person2, {age: 9, gender: "female"});
console.log(extraInfo);
console.log(person1.id);
console.log(extraInfo.get(person1).gender);
// console.log(extraInfo.get(person2).gender);
