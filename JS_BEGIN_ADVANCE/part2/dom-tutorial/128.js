console.log("hello world");

const grandparent = document.querySelector(".grandparent");
// const parent = document.querySelector(".parent");
// const child = document.querySelector(".child");



// if we click on the child then addEventListenser will also called 


// it is called the event bubbling 

// child.addEventListener('click',()=>{
//     console.log("You clicked on child");
// })

// parent.addEventListener('click',()=>{
//     console.log("You clicked on parent");
// })
// grandparent.addEventListener('click',()=>{
//     console.log("You clicked on grandparent");
// })

// document.body.addEventListener('click',()=>{
//     console.log("You clicked on body");
// })


// capturing events

// child.addEventListener('click',()=>{
//     console.log("You clicked on child");
// },true);

// parent.addEventListener('click',()=>{
//     console.log("You clicked on parent");
// },true);
// grandparent.addEventListener('click',()=>{
//     console.log("You clicked on grandparent");
// },true);

// document.body.addEventListener('click',()=>{
//     console.log("You clicked on body");
// },true);



///// not capture  ----> third argument false;

// child.addEventListener("click", () => {
//   console.log("bubble child");
// });
// parent.addEventListener("click", () => {
//   console.log("bubble parent");
// });
// grandparent.addEventListener("click", () => {
//   console.log("bubble grandparent");
// });
// document.body.addEventListener("click", () => {
//   console.log("bubble document.body");
// });

// event delegation

// ----> no need to write differnt addEventListener for differnt child ---Just do for the

grandparent.addEventListener("click", (e) => {
    console.log(e);
    //   console.log(e.target);----> target to be continued 
});
