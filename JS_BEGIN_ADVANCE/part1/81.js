function hello(){
    console.log("hello world");
}

// javascript function ===> function  + object

// console.log(hello.name);

// you can add your own properties 
// hello.myOwnProperty = "very unique value";
// console.log(hello.myOwnProperty);

// name property ---> tells function name;


// function provides us empty object 
// function provides more usefull properties.


// console.log(hello.prototype); // {}

// only functions provide prototype property

if(hello.prototype)
{
    console.log("hn hai");
}
else{
    console.log("Not present\n");

}

hello.prototype.abc = "abc";
hello.prototype.xyz = "xyz";
hello.prototype.sing = function(){
    return "lalalla";
};
console.log(hello.prototype.sing());