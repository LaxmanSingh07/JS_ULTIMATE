
const rootNode = document.getRootNode();
console.log(rootNode.childNodes); // it will return the NodeList 

const htmlElementNode = rootNode.childNodes[0];

// console.log(htmlElementNode); // it will print the entire html

// if you want the object representation mode then you can use like this 
// then you have to use the 

console.dir(htmlElementNode);  // it will represent in the form of object 


console.log(htmlElementNode.childNodes);// NodeList(3) [head, text, body]

const headElementNode = htmlElementNode.childNodes[0];
console.log(headElementNode);
const textNode1 = htmlElementNode.childNodes[1];
console.log(textNode1);
const bodyElementNode = htmlElementNode.childNodes[2];
console.log(bodyElementNode);

// to check the parent of the headElementNode 
// we have to write like this 

// console.log(headElementNode.parentNode);


// sibling relation 

// console.log(headElementNode.nextSibling);
// console.log(headElementNode.nextSibling.textContent); // it will print the new line + some spaces meaning nothing will be apprears only blank space 

// if you want to find the 2nd sibling 
// console.log(headElementNode.nextSibling.nextSibling);

// browser automatically set the white-space proerty as normal 
//you can change it like this 

// <style>
// *{
    //     white-space:pre;
    // }
    // </style>
    
    // property 
    // if not sibling of a particular tag is a space and you want to skip it and want to select only those property which are tags then do like this 
    
    
    // console.log(headElementNode.nextElementSibling);

    // headElementNode child nodes 

    // console.log(headElementNode.childNodes); //NodeList(5) [text, title, text, script, text]
    
    const h1 = document.querySelector("h1");

    // const div=h1.parentNode;
    // div.style.color = "#efefef";
    // div.style.backgroundColor = "#333"
    

    // const body = h1.parentNode.parentNode; //parent ka parent 
    //you can select body like this also
    // const body = document.body
    // body.style.color = "#efefef";
    // body.style.backgroundColor = "#333"


// body.style.color = "#efefef";
// body.style.backgroundColor = "#333"


const head = document.querySelector("head");
console.log(head);
const title = head.querySelector("title");
console.log(title);
console.log(title.childNodes);


const container = document.querySelector(".container");
// it will print other than spacce and new line 
console.log(container.children); //HTMLCollection(2) [h1, p]