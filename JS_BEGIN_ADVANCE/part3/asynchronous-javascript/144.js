// async await
console.log("script start");
const URL = "https://jsonplaceholder.typicode.com/posts";



// fetch(URL)
//     .then(response => {
//         return response.json()
//     })
//     .then(data => {
//         console.log(data);
//     })


// async function always return promise 

// always 

async function getPosts(){

  const response=await fetch(URL);
      if(!response.ok){
            throw new Error("Something went wrong")
        }
//   await method will wait until response is resolved

//   console.log(response);
const data=await response.json(); // parsing 
// console.log(typeof data)\
return data; // it will return the promise 


}

const myData = getPosts();
console.log(myData);

//array function 

// const getPosts = async() =>{
//     const response = await fetch(URL);
//     if(!response.ok){
//         throw new Error("Something went wrong")
//     }
//     const data = await response.json();
//     return data;
// }


getPosts()
    .then((myData) => {
        console.log(myData);
    })
    .catch(error =>{
        console.log("inside catch")
        console.log(error);
    })


console.log("script end ");