// use const for creating array

// heap memory ["apple", "mango"] 0x11

const fruits = ["apple", "mango"]; // 0x11

// it will not give any address but it wil not give any error 
// because the base address is const
fruits.push("banana");
console.log(fruits);


// fruits=['grapes','pineapple']; // you can't do like this 