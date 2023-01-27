// arrow functions 
// arrow function has not any this keyword 
// it will take the this of its surrounding 


const user1 = {
    firstName : "harshit",
    age: 8,
    about: () => {
        // console.log(this);

        // this will be window object
        console.log(this.firstName, this.age);
    }   
}

// user.about();
user1.about.call(user1); // you can't do like this 
// myFunc();
