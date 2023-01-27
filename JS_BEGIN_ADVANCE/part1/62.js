// every method
const numbers = [2,4,6,9,10];


// const ans = numbers.every((number)=>number%2===0);

// callback function ---> true/false (boolean return )

// it will return true will the property is applied to all the numbers in the array 
// flase otherwise


// console.log(ans);

const userCart = [
    {productId: 1, productName: "mobile", price: 12000},
    {productId: 2, productName: "laptop", price: 22000},
    {productId: 3, productName: "tv", price: 35000},
]


const ans = userCart.every((cartItem)=>cartItem.price < 30000);
console.log(ans);