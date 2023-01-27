// // setInterval
// console.log("script start");

// setInterval(() => {
//   // let total=0;
//   // for(let i=0;i<100000000;i++)
//   // {
//   //   total+=i;
//   // }
//   console.log(Math.random());
// }, 500);
// console.log("script end");


// I WANT TO CHANGE THE BACKGROUND COLOUR OF THE BODY EVERY SECOND

const body=document.body;
const btn=document.querySelector("button");

// set interval also return a id to us 

const intervalId=setInterval(()=>{
  const red=Math.floor(Math.random()*126);
  const green=Math.floor(Math.random()*126);
  const blue=Math.floor(Math.random()*126);
  body.style.background=`rgb(${red},${green},${blue})`;
},1000);

btn.addEventListener("click",()=>{
  clearInterval(intervalId);
  btn.textContent=body.style.background;
})

