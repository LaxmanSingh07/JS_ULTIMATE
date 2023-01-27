// difference between dot and bracket notaion
const key = "email";
const person = {
    name: "harshit",
    age: 22,
    // if you  want to write the key with the spaces then you have to use the"
    "person hobbies": ["guitar", "sleeping", "listening music"]

}



console.log(person["person hobbies"]);
// console.log(person."person hobbies"); // you can't do so
// person.key="Hello"; // it will put key as key
// person["key"] = "harshitvashisth@gmail.com";

// now it will compute the value of the key

person[key] = "harshitvashisth@gmail.com";
console.log(person);
