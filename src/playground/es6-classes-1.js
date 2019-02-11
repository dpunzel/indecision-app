
class Person {
    //constructor
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        // return 'Hi I am ' + this.name + '!';
        // es6 template strings
        return `Hi. I am ${ this.name }.`;
    }
    getDescription() {
        return `${this.name} is ${this.age} years(s) old. `;
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let desciption = super.getDescription();
        if (this.hasMajor()) {
            desciption += `${this.major}.`
        }
        return super.getDescription();
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLaction = homeLocation;
    }
    getGreeting() {
        let greeting = super.getDescription();
        if (this.homeLaction) {
            greeting += ` I am visting from ${this.homeLaction}.`;
        }
        return greeting;
    }
}

const me = new Student('David', 44, 'Computer Science');
console.log(me);
console.log(me.getGreeting());
console.log(me.getDescription());
console.log(me.hasMajor());
const other = new Student();
console.log(other);
console.log(other.getGreeting());
console.log(other.getDescription());