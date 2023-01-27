// filter method 
// it will filture the element according to the specifed
const numbers = [1,3,2,6,4,8];

const iseven=function(number)
{
    return number%2===0;
}

const evenNumbers1=numbers.filter(iseven);


const evenNumbers2 = numbers.filter((number)=>{
    return number % 2 === 0;
});
console.log(evenNumbers1);
console.log(evenNumbers2);