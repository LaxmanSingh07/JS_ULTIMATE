// important array methods 

 const numbers = [4,2,5,8];

// function multiplyBy2(number,index)
// {
//     console.log("index is ",index);
//     console.log("number:" ,number *2)
// }

// multiplyBy2(numbers[0],0);

// for(let i=0;i<numbers.length;i++)
// {
//     // console.log(i);
//     multiplyBy2(numbers[i],i);
// }

// function myFunc(number, index){
//     console.log(`index is ${index} number is ${number}`);
// }


// numbers.forEach(myFunc); // it will pass number and the index
// forEach will take callback as a input 

// you can define function in forEach aso
// numbers.forEach(function(number,index){
//     console.log(`index is ${index} number is ${number}`);
// });

// A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.

// you can pass only argument in the for each

// numbers.forEach(function(number,index){
//     console.log(number*3,index);
// })



const users = [
    {firstName: "harshit", age: 23},
    {firstName: "mohit", age: 21},
    {firstName: "nitish", age: 22},
    {firstName: "garima", age: 20},
]

// users.forEach(function(user){
//     console.log(user.firstName);
// });

// users.forEach((user, index)=>{
//     console.log(user.firstName, index);
// })

// for(let user of users){
//     console.log(user.firstName);
// }


