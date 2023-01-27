// block scope vs function scope 


// let and const are block scope
// var is function scope 

// {
//     let firstname="laxman";
// }
// console.log(firstname); //let or const is block level you can't access it outside of the block
{
    var firstname = "laxman";

}
console.log(firstname);

// if (true) {
//     var firstName = "Main";
//     console.log(firstName);
// }

// console.log(firstName);

function myApp() {
    if (true) {
        let firstName = "harshit";
        console.log(firstName);
    }

    if (true) {
        console.log(firstName);
    }
    console.log(firstName);
}

myApp();