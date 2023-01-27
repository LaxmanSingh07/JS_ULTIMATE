// find method 

// const myArray = ["Hello", "catt", "dog", "lion"];


// find will return the first occurenece 
// if any index will not find then it will return the undefined 


// function isLength3(string){
//     return string.length === 3;
// }

// const ans = myArray.find((string)=>string.length===3);
// console.log(ans);

const users = [
    {userId : 1, userName: "harshit"},
    {userId : 2, userName: "harsh"},
    {userId : 3, userName: "nitish"},
    {userId : 4, userName: "mohit"},
    {userId : 5, userName: "aaditya"},
];

const myUser = users.find((user)=>user.userId===3);

// const myUser = users.find((user) => {
//     console.log(user);
//     return user.userId === 3;

// });
// console.log("\n");
console.log(myUser);