// optional chaining 

const user  = {
    firstName: "harshit",
    // address: {houseNumber: '1234'}
}



console.log(user?.firstName);

// undefined pe access krne ki koshi kr rha hai bhai 

console.log(user?.address?.houseNumber);