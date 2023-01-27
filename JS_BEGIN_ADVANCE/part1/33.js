// for of loop in array
const fruits = ["apple", "mango", "grapes", "fruit4", "fruit5"];
const fruits2 = [];

// of is used for the values 
// it will run to the length of the array length
for(let fruit of fruits){
    fruits2.push(fruit.toUpperCase());
}
console.log(fruits2);

for(let i = 0; i<fruits.length; i++){
    console.log(fruits[i]);
}