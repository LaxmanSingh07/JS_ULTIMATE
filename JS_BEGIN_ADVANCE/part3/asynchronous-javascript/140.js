const URL = "https://jsonplaceholder.typicode.com/postss";
// const URL = "https://jsonplaceholder.typicode.com/posts";

const xhr = new XMLHttpRequest();
console.log(xhr);
// console.log(xhr.readyState);

// step1


// if the api address is wrong then it will return 404
// status code is very very imprtatn 


xhr.open("GET",URL); //async

// console.log(xhr.readyState);

// browser will call the function when readyState will be changed 
// xhr.onreadystatechange = function(){
//     // console.log(xhr.readyState);
    
//     // mujhe response tab milega jb ready state 4 ho jaayegi 
//     if(xhr.readyState === 4){
//         console.log(xhr)
//         console.log(xhr.readyState);
//         // console.log(xhr.response);
//         const response = xhr.response;

//         // i want to change the response to the javasciprt object 

//         const data = JSON.parse(response);
//         console.log(typeof response);
//         console.log(typeof data);
//     }
// }


// it will run whern our ready state will be 4 

xhr.onload = function(){
    const response = xhr.response;
    const data = JSON.parse(response);
    console.log(data);
}

xhr.send();