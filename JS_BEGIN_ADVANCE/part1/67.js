// Sets (it is iterable)

// store data  

// sets also have its own methods

// No index-based access 

// Order is not guaranteed

// unique items only (no duplicates allowed)

// const items = ['item1', 'item2', 'item3'];

// const numbers = new Set();
// numbers.add(1);
// numbers.add(2);
// numbers.add(3);
// numbers.add(4);
// numbers.add(5);
// numbers.add(6);
// numbers.add(items);

// given below both will be added different memory location alg alg hain
// numbers.add(['iteam3', 'items4']);
// numbers.add(['iteam3', 'items4']);

// checking of the number wheather it is prersent in the set or not 
// if(numbers.has(1)){
//     console.log("1 is present")
// }else{
//     console.log("1 is not present")
// }
// for (let number of numbers) {
//     console.log(number);
// }
const myArray = [1, 2, 4, 4, 5, 6, 5, 6];
const uniqueElements = new Set(myArray);

// we can't apply the length in the set directly it will return undefiend 
let length = 0;
for (let element of uniqueElements) {
    length++;
}

console.log(length);