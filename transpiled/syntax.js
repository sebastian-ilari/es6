"use strict";

console.log("-----------------------------");
console.log("syntax examples");
console.log("-----------------------------");

function createPersonES5(name, age) {
    return {
        name: name,
        age: age
    };
}

function createPersonES6(name, age) {
    return { name: name, age: age };
}

var es5Person = createPersonES5("Mark", 20);
var es6Person = createPersonES6("Bill", 30);

console.log("Person created tha ES5 way = " + ("Name: " + es5Person.name + ", age: " + es5Person.age));
console.log("Person created tha ES6 way = " + ("Name: " + es6Person.name + ", age: " + es6Person.age));

var me = {
    name: "Seb",
    homeTown: "Temperley",

    // The ES5 way
    height: function height() {
        return 1.7;
    },

    // The ES6 way
    weight: function weight() {
        return 65;
    }
};

console.log("My name is " + me.name + ", I am from " + me.homeTown + ",\nmy height is " + me.height() + " and my weight " + me.weight());