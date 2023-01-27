// hoisting 
// calling before function defination 
// it will only happen in the case of the function declartion only

// hello();

// function hello(){
//     console.log("hello world");
// }
console.log(hello);
// const hello = "hello world"; ---> it will throw an error
// var hello = "hello World";// it will return undefined
// console.log(hello);