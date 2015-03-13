"use strict";

console.log("-----------------------------");
console.log("Function parameters example");
console.log("-----------------------------");

function sumar() {
    var x = arguments[0] === undefined ? 0 : arguments[0];
    var y = arguments[1] === undefined ? 0 : arguments[1];

    return x + y;
}

console.log("Calling sumar with 1 and 2 as parameters returns " + sumar(1, 2));
console.log("Calling sumar without parameters returns " + sumar());

function logThings() {
    for (var _len = arguments.length, things = Array(_len), _key = 0; _key < _len; _key++) {
        things[_key] = arguments[_key];
    }

    things.forEach(function (aThing) {
        console.log(aThing);
    });
}

logThings("a", "b", "c");