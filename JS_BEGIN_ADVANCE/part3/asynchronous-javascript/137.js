//promise.resolve 
//promise chaining 


// const myPromise = Promise.resolve(5); //----> it will return a promise 

// myPromise.then(value => {
//   console.log("Value is ", value);
// })

//another way is 

// Promise.resolve(5).then(value => {
//   console.log("Value is ", value);
// })

//then()

// then method hamesh promise return krta hai 

function myPromise() {
  return new Promise((resolve, reject) => {
    resolve("foo");
  })
}

myPromise().then(value => {
  console.log(value);
  value += "baar";
  // if i will not return the promise then return will happean by the value will be undefiend 
  return value; // it will not return the value but the promise (return promise.resolve(value))
})
  .then((value) => {
    console.log(value);
    value += "baaz";
    return value;
  })
  .then(value => {
    console.log(value);
  })



