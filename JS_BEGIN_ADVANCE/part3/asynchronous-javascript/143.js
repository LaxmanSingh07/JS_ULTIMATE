// fetch 

const URL = "https://jsonplaceholder.typicode.com/postsss";

// console.log(fetch(URL)) ; // it will return the promisee 

fetch(URL,{
    method:'POST',
    body :JSON.stringify({
        title:'foo',
        body:'bar',
        userId:1,
    }),
    headers:{
        'Content-type':'application/json; character=UTF-8',
    },
})
.then(response =>{
           if(response.ok){
            return response.json()
           }
    // it will return also the promise
    // console.log(response.json());
    
    //parsing
    // console.log(response);
    // return response.json()
    else{
            throw new Error("Something went wrong!!!")
        }
})
.then(data=>{
    console.log(data);
})

// in case of fetch your promise will get rejected if there is only network error othewise it will not get rejected 
// we can use the 
.catch(error =>{
        console.log("inside catch");
        console.log(error);
    })

