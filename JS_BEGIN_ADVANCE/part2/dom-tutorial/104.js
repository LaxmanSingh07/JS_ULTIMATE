// select element using query selector

// const mainHeading = document.getElementById("main-heading");
const mainHeading = document.querySelector("#main-heading");

const header = document.querySelector(".header");

// it will select all the elements having id .nav-item 
// it will return the node list it is like array but not array 
const navItem = document.querySelectorAll(".nav-item")
console.log(navItem);