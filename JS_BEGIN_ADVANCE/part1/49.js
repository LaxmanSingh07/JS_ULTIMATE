// lexical scope 
const myVar = "value2";

function myApp() {

    // const myVar = "value1";

    function myFunc() {
        // const myVar = "value59";
        // console.log("Inside myfunc");
        // console.log("myvar",myVar);
        const myFunc2 = () => {
            console.log("inside myFunc", myVar);
        }

        // const myFunc3 = () => { }
        myFunc2();
    }


    console.log(myVar);
    myFunc();
}

myApp();