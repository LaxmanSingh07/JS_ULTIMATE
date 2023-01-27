const sectionTodo = document.querySelector(".section-todo");
console.log(sectionTodo)

// total classes in the section todo 
// console.log(sectionTodo.classList); //DOMTokenList(2) ['section-todo', 'container', value: 'section-todo container']


// sectionTodo.classList.add('bg-dark');
// sectionTodo.classList.remove('bg-dark');
// sectionTodo.classList.remove("container");

// wheather a particular class is existing 
// const ans = sectionTodo.classList.contains("container");
// console.log(ans);

// toggle's nature ----> if true then flase vice versa

// sectionTodo.classList.toggle("bg-dark");
// sectionTodo.classList.toggle("bg-dark");

const header = document.querySelector(".header");
header.classList.add("bg-dark");
console.log(header.classList);


// css flow ALWAYS FROM BOTTOM TO TOP
