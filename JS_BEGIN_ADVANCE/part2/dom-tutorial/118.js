//static list vs live list 

//querySelectorsAll hamein static list degi
//getElementsBySomething hamein live list degi 



// const ListItems=document.querySelector(".todo-list li");
// console.log(ListItems);


// const ListItems=document.querySelectorAll(".todo-list li");
// // console.log(ListItems);

const ul = document.querySelector(".todo-list");
const sixthLi = document.createElement("li");
sixthLi.textContent = "item 6";
// ul.append(sixthLi); // it will add new list in our ul but not least is still of 5
// console.log(ListItems);//NodeList(5) it means that it is static



// li inside ul
const listItems = ul.getElementsByTagName("li"); // HTML COLLECTION ----> LIVE LIST 
ul.append(sixthLi); 


console.log(listItems);