// how to get the dimension of element
// height width 

const sectionTodo = document.querySelector(".section-todo");

// IT WILL GIVE THE ENTIRE DIEMENSION OF THE  
const info = sectionTodo.getBoundingClientRect();

console.log(info);

