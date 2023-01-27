// function returning promise

function ricePromise(){
  const bucket = ['coffee', 'chips','vegetables','salts','rice'];
  return new Promise((resolve,reject)=>{
    if(bucket.includes("vegetables")&& bucket.includes("salt") && bucket.includes("rice")){
        resolve({value:"friedrice"});
    }else{
        reject("could not do it");
    }
  })
}

// there is only one difference in 134 and 135 

// () because here ricePromise is a function and be are returning promise form there

ricePromise().then(
  // jab promise resolve hoga 
  (myfriedRice)=>{
  console.log("lets eat ", myfriedRice);
  }
  ).catch(
  (error)=>{
      console.log(error)
  })