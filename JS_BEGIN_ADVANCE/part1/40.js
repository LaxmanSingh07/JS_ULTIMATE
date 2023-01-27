// spread operator
const array1 = [1, 2, 3];
const array2 = [5, 6, 7];

// const newArray = [...array1,array];
// const newArray = [...array1, ...array2, 89, 69];
// const newArray = [..."123456789"];
//if instead of string we use the number  then it is not iteravel
// const newArray = [...123456789];
// console.log(newArray);

// spread operator in objects
// key always unique if we add two keys then last accurence will override the preivous one 
const obj1 = {
  key1: "value1",
  key2: "value2",
  // key1: "laxman Singh"
};
const obj2 = {
  key1: "valueUnique",
  key3: "value3",
  key4: "value4",
};

// const newObject = { ...obj2, ...obj1, key69: "value69" };
const newObject = { ...["item1", "item2"] };
// const newObject = { ..."abcdefghijklmnopqrstuvwxyz" }; //index will be key and the index value is value
// key will be automatically 0..length-1
console.log(newObject);
