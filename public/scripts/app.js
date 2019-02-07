'use strict';

// arguments object - no longer bound with arrow functions

// const add = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };
var add = function add(a, b) {
    // console.log(arguments); arguments no longer available in arrow functions
    return a + b;
};
console.log(add(55, 1));
// this keyword - no longer bound

var user = {
    name: 'David',
    cities: ['Portland', 'Seattle', 'LaPine'],
    // we can also remove this function -> printPlacesLived: function ()
    // to just printPlacesLived()
    //     printPlacesLived() {
    //       console.log(this.name);
    //       console.log(this.cities);
    //         // changed the function to arrow function to make this.name work
    //       this.cities.forEach((city) => {
    //         console.log(this.name + ' has lived in ' + city);
    //       });
    //     }
    // };
    // user.printPlacesLived();

    // exploring map method
    printPlacesLived: function printPlacesLived() {
        var _this = this;

        return this.cities.map(function (city) {
            return _this.name + ' has lived in  ' + city;
        });
    }
};
console.log(user.printPlacesLived());

// challenge area
var multiplier = {
    // numbers - array of numbers
    numbers: [10, 20, 30],
    // multiplyBy - single number
    multiplyBy: 3,
    // multiply - return a new array where the number have been multiplied
    multiply: function multiply() {
        var _this2 = this;

        return this.numbers.map(function (number) {
            return number * _this2.multiplyBy;
        });
    }
};
console.log(multiplier.multiply()); // [1,2,3]2 [2,4,6]
