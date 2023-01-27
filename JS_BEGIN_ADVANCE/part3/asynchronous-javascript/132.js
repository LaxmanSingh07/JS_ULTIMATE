//understand callback 

// function myFunc(callback) {
//   console.log("function is doing some task 1");
//   callback();
// }

// function myFunc2() {
//   console.log("function is doing task 2")
// }
// myFunc(myFunc2);

// instead of doing like above we can write in other style also like this given below 




// function myFunc(callback)
// {
//   console.log("function 1");
//   callback();
// }


// myFunc(()=>{
//   console.log("function is doing some task");
// })



// function getTwoNumbersAndAdd(n1, n2, callback) {
//   // console.log(n1,n2);
//   // I will call the callback function when n1 and n2 are of  number type 

//   // what to do then let's talk what ?

//   if (typeof num1 === "number" && typeof num2 === "number")
//     callback(n1, n2);
//   else {
//     console.log("Wrong data type");
//   }
// }

// function addTwoNumbers(num1, num2) {
//   console.log(num1 + num2);
// }


// // getTwoNumbersAndAdd(4,5,addTwoNumbers);

// getTwoNumbersAndAdd("4", "5", addTwoNumbers);



// as said earlier there is no nned to make differnt function we can combine them 



// generally we pass two data types that is noSuccess and on Failure

function getTwoNumbersAndAdd(n1, n2, onSuccess,onFailure) {
  if (typeof num1 === "number" && typeof num2 === "number")
    onSuccess(n1, n2);
  else {
    onFailure();
  }
}

getTwoNumbersAndAdd("4", "5",()=> {
  console.log(num1 + num2);
},()=>{
  console.log("Wrong datatype");
  console.log("please pass number only");
});
