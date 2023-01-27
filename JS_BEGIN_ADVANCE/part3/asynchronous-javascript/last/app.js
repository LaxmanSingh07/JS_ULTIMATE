import { firstName } from "./fname.js";
import { age } from "./age.js";


// import { firstName as f } from "./fname.js";

import hello, { person, person2 } from "./person.js";

console.log(firstName + " " + age);

const person = new person("john", "Doe", 22);
console.log(person);

person.info();
console.log(hello);