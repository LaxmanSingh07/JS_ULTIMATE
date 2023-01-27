const todoForm = document.querySelector(".form-todo");
console.log(todoForm);
const todoInput = document.querySelector(".form-todo input[type='text']");
const todoList=document.querySelector(".todo-list");

todoForm.addEventListener("submit", (e) => {
  // // i don't want that my page will be refresed then use this
  e.preventDefault();
  // console.log("Hello World");
  // console.log(todoInput.value);
  // AND I WANT TO CLEAR THE VALUE 
  // todoInput.value="";
  
  const newTodoText = todoInput.value;
  const newLi = document.createElement("li");
  const newLiInnerHtml = `<span class="text">${newTodoText}</span>
  <div class="todo-buttons">
  <button class="todo-btn done">Done</button>
  <button class="todo-btn remove">Remove</button>
  </div>`;
  newLi.innerHTML=newLiInnerHtml;
  
  todoList.append(newLi);
  // console.log(newLi)
  todoInput.value="";
})

// deligation 

todoList.addEventListener("click",(e)=>{
  // console.log(e.target);

  //check if user click on done button 
  if(e.target.classList.contains("remove"))
  {
    // console.log("You want to remove something\n");
    const targetdLi=e.target.parentNode.parentNode;
    console.log(targetdLi);
    targetdLi.remove();
  }
  if(e.target.classList.contains("done"))
  {
    // console.log("You have done something\n");

    // current object ke parent ke brother pe 
    const Lispan=e.target.parentNode.previousElementSibling;
    // console.log(Lispan);
    Lispan.style.textDecoration="line-through";
  }
})