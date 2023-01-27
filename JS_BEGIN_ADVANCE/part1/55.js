// function returning function 


// higher order fucntion -- when we take function as a arguement or return a function 

function myFunc() {
    function hello() {
        return "hello world"
    }
    return hello;
}

const ans = myFunc(); // it will return the another function in the js
console.log(ans);
console.log(ans());