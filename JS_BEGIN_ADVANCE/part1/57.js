// map method 
// it is same as that of forEach
const numbers = [3,4,6,1,8];

// const square = function(number){
//     return number*number;
//     // by default undefined 
// }


// const squareNumber=numbers.map(square)
// // map always make a new array

// const squareNumber = numbers.map((number, index)=>{
//     return index;
// });
// console.log(squareNumber);

const users = [
    {firstName: "harshit", age: 23},
    {firstName: "mohit", age: 21},
    {firstName: "nitish", age: 22},
    {firstName: "garima", age: 20},
]

const userNames = users.map((user)=>{
    return user.firstName;
});

console.log(userNames);