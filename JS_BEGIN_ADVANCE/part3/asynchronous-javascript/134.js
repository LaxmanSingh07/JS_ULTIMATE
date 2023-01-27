// promise is also a async task
// prmoise is a object 
// browser will consume the promisee 

// Promise ------> value we don't know but will be known in the future 

// promise status pending and value will undefiend 

// promise can be fullfilled or will be reject 
// promise ------ > future value 


const bucket = ['coffee', 'chips', 'vegetables', 'salt', 'rice'];
console.log("script start");


// resolve is method (function )
// new Promise((resolve,reject)=>{
//     if(bucket.includes("vegetables")&& bucket.includes("salt") && bucket.includes("rice"))
//         resolve("Fried Rice");

//     else
//         reject("not able");
// })



// // produce 
// promise produce 

const friedRicePromise = new Promise((resolve, reject) => {
    if (bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice")) {
        resolve({ value: "friedrice" });
    } else {
        reject("could not do it");
    }
})


// // consume 
// // how to consume 


// it will take the value by frinedRicePromise


// you can pass two arguemnts here 

// friedRicePromise.then(
//     // jab promise resolve hoga 
//     (myfriedRice) => {
//         console.log("lets eat ", myfriedRice);
//     },
//     // jab promise reject hoga
//     (error)=>{
//         console.log(error);

//     }
// )

// there is no need to write the two callback function in .then


friedRicePromise.then(
    // jab promise resolve hoga 
    (myfriedRice) => {
        console.log("lets eat ", myfriedRice);
    }
    // .catch chaining 
    // promise will be reject then .catch will be done 

).catch(
    (error) => {
        console.log(error)
    })


setTimeout(()=>{
    console.log("hello from settimeout")
},0)

for(let i = 0; i <=100; i++){
    console.log(Math.random(), i);
}

console.log("script end!!!!")


// microtask queue and callback queue 
// microtaks queue have higher priority then it will exectute first 
