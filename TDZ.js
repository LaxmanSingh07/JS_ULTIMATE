// // // //Hoisting and TDZ  



// // // // // temparay dead zone

// // // // var me='Laxman'
// // // // let job='teacher'
// // // // const year=1991;


// // // // console.log(addArrow(6,7));



// // // // var addArrow(a,b){
// // // //     return a+b;
// // // // }


// // // ///this keyword in the javascirpt 

// // // // How the this keyword works
// // // // arrow function don't get it's own this keyword 

// // // console.log(this); //this is globally a window

// // // const calcAge=function(birthYear){
// // //     console.log(2037-birthYear);
// // //     console.log(this); //this will point to undefiend 

// // // }
// // // calcAge(1996);

// // // const calcAge1=(birthYear)=>{
// // //     console.log(2037-birthYear);
// // //     console.log(this); //this will a window
// // //     // in arrow function it uses the this of its parent 
// // //     //in this case it will point to the global 
// // // }


// // // const laxman1={
// // //     year :1993,
// // //     calcAge:function(){
// // //         console.log(this); // this keyword will point to the joans object 
// // //         console.log(2017-this.year);
// // //     }
// // // }

// // // laxman1.calcAge();

// // // const matilda={
// // //     year: 2017,

// // // };

// // // matilda.calcAge=laxman1.calcAge; // coping of calcAge function from laxman1 to matilda this is known as the method boring 
// // // matilda.calcAge(); 


// // // const f=laxman1.calcAge; // coping function into a new variable 
// // // f(); // this is a regu  lar function there is no object associated with it that why value of this here is undefined 


// // // // some pitfall of the

// // var firstName='Kavya';


// // const laxman1={
// //     firstName:'Lucky',
// //     year :1993,
// //     calcAge:function(){
// //         console.log(this); // this keyword will point to the joans object 
// //         console.log(2017-this.year);

// //         //solution 1: 
// //         // const self=this;
// //         // const isMillenial=function(){
// //         //     console.log(self.year>=1981&&self.year<=1996);

// //         // };

// //         //solution 2 : arrow function 
// //          const isMillenial=()=>{
// //             console.log(this.year>=1981&&this.year<=1996);
// //              // arrow funciont inherit the this keyword from the parent scope 

// //         };

// //         isMillenial();
// //     },
// //     // greet :()=>{
// //     //   console.log(this); // output will be window **** arrow function *****
// //     //     console.log(`Hey ${this.firstName}`);
// //     // },

// //     // greet: function(){
// //     //     console.log(this);
// //     //     console.log(`Hey ${this.firstName}`);
// //     // }
// // }

// // // laxman1.greet();//Hey undefined because it is taking global scope 
// // //object is not a scope but it is literals 



// // laxman1.calcAge();

// const addExpr=function(a,b){
//     console.log(arguments);
//     return a+b;
// }

// addExpr(2,4);
// // it is comletelly legal to add the more no of pararmeters in the function call 
// //they didn't have any name but they did apper
// addExpr(1,2,3,4);

// //when we've code more than one line then we have to explicita

// const addArrow =(a,b)=>{
// return a+b;

// }

// //primitive vs Objects 

let age = 30;
let oldage = age;
age = 31;
console.log(age);
console.log(oldage)

const me = {
    Name: 'Jonas',
    age: 30,
}

const friend = me; //friend is working like a reference variable (REFERENCE TO MEMORY ADDRESS IN HEAP)
friend.age = 27; // age of both the objects will be changed 

console.log('friend', friend);
console.log('me', me);


// primitive vs objects in pratice 

let lastName = 'Williams';
let oldLastName = lastName;

lastName = "laxman";
console.log(lastName, oldLastName);


//primitve types 
// const jessica ={
//     firstName : 'Jessica',
//     latName : 'williams ',
//     age: 27,
// }


// const marriedJassica =jessica;
// marriedJassica.lastName='Davis';
// console.log('Beofore marriage',jessica);
// console.log('AfterMarriage',marriedJassica);


//copying objects 

const Jessica2 = {
    firstName: 'jasscia',
    lastName: 'Williams',
    age: 27,
    family: ['Alica', 'Bob'],
}
//it will make the completelley new object here 

const jessicaCopy =Object.assign({}, Jessica2); // it will only do the shallow copy 

jessicaCopy.lastName = 'Davis';
jessicaCopy.family.push('Mary');
console.log('Jessica', Jessica2);
console.log('Jessica', jessicaCopy);