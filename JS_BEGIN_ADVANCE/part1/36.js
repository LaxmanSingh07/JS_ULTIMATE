// objects reference type  
// arrays are good but not sufficient 
// for real world data 
// objects store key value pairs 
// objects don't have index

// how to create objects 

// const person = {name:"Harshit",age:22};
const person = {
    name: "harshit",
    age: 22,
    hobbies: ["guitar", "sleeping", "listening music"]
}
// console.log(person);
console.log(typeof(person));

// how to access data from objects (. or [])
// console.log(person.name);
// console.log(person.age);
// console.log(person.hobbies[0])


// console.log(person["name"]);
// console.log(person["age"]);
// console.log(person.hobbies);

// // how to add key value pair to objects
// person.gender="male";
// person["gender"] = "male";
// console.log(person);