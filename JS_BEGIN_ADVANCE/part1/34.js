// for in loop in array
const fruits = ["apple", "mango", "grapes", "fruit4", "fruit5"];
const fruits2 = [];

for (let index in fruits) {// index will for keys that is index no
    console.log(index);
    fruits2.push(fruits[index].toUpperCase());
}
console.log(fruits2);