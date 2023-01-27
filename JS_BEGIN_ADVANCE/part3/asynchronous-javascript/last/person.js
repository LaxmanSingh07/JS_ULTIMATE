
//we can write export default the then there is no need to write 
// import { age } from "./age.js";
// you are write simply import age from "./age.js"
// export default is unique for one file 


// export default class person
export class person
{
    constructor (firtName, lastName,age)
    {
        this.firtName=firstName;
        this.lastName=lastName;
        this.age=age;
    }

    info()
    {
        console.log(this.firstName,this.lastName,this.age);
    }
}
export  class person2
// export class person
{
    constructor (firtName, lastName,age)
    {
        this.firtName=firstName;
        this.lastName=lastName;
        this.age=age;
    }

    info()
    {
        console.log(this.firstName,this.lastName,this.age);
    }
}

const hello="Hello World";
export default hello;