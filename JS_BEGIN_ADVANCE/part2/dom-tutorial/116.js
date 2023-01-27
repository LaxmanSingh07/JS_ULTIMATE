// clone nodes

const ul = document.querySelector(".todo-list");

const li = document.createElement("li");

li.textContent = "new todo";


// either it will be append or prepend you can't do both things at once 
// ul.append(li);
// ul.prepend(li);


// if you want to do so do like this 

// const li2 = li.cloneNode(); ----> it will not include the textcontent

const li2 = li.cloneNode(true);  // -----> deep cloning


