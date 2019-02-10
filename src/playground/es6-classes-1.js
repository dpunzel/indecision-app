
class Person {
    //constructor
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        // return 'Hi I am ' + this.name + '!';
        // es6 template strings
        return `Hi. I am ${ this.name }!`;
    }
    getDescription() {
        return `${this.name} is ${this.age} years(s) old. `;
    }
}

const me = new Person('David', 44);
console.log(me.getGreeting());
console.log(me.getDescription());
const other = new Person();
console.log(other.getGreeting());
console.log(other.getDescription());