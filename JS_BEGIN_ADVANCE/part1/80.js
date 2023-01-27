const obj1 = {
    key1: "value1",
    key2: "value2"
}
// const obj2={
//     key3:"value3"
// }

// const obj2={};
// obj2.key3="value3"

// console.log(obj2.key1);

// i want that javasciript if not able to find the value in the obj2 then it should check in obj1
// __proto__

// offical ecmascript documentation 

// [[prototype]]

// __proto__ , [[prototype]] --> both same



// prototype    ---> it is different 

const obj2 = Object.create(obj1); // {}
// there is one more way to create empty object
obj2.key3 = "value3";
// obj2.key2 = "unique";
console.log(obj2.key2);
console.log(obj2);
// this is happing 

console.log(obj2.__proto__);

