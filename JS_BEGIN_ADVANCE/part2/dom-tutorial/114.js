// // document.createElement()


// // append
// // prepend
// // remove


// const newTodoItem = document.createElement("li");
// // console.log(newTodoItem);

// const newTodoItemText = document.createTextNode("Teach students");
// // newTodoItem.textContent = "Teach students";

// newTodoItem.appendChild(newTodoItemText);
// // console.log(newTodoItem);

// const todoList = document.querySelector(".todo-list");



// todoList.prepend(newTodoItem);
// todoList.append(newTodoItem);

// const todo1 = document.querySelector('.todo-list li');
// console.log(todo1)

// todo1.remove();




// before 

// after



const newTodoItem = document.createElement("li");
const todoList = document.querySelector(".todo-list");
newTodoItem.textContent = "Teach students";
// todoList.before(newTodoItem);

//newTodoItem.before(new)

// todoList.after(newTodoItem);