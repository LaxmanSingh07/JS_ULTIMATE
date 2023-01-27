// function hello() {
//     console.log("hello world");
// }

// // below both will work same 

// hello();
// hello.call();

// call apply bind


// const user1 = {
//     firstName: "harshit",
//     age: 8,
//     about: function (hobby, favMusician) {
//         console.log(this.firstName, this.age,hobby,favMusician)
//     }
// }
// const user2 = {
//     firstName: "mohit",
//     age: 9,

// }


// user1.about();
// user1.about.call(user2); // we can specific what will be the this 
// user1.about.call(user2,"laxman","binary");  // we can specific what will be the this 


const user1 = {
    firstName: "harshit",
    age: 8,
}
const user2 = {
    firstName: "mohit",
    age: 9,

}


function about(hobby, favMusician) {
    console.log(this.firstName, this.age, hobby, favMusician);
}

// about.call(user1, "Laxman", "singh");

// apply
// same as call but argument will he as array
// about.apply(user1, ["guitar", "bach"]);

// bind will return the function

const func = about.bind(user2, "guitar", "bach");
func(); //we can call the function 

