"use strict";

console.log("-----------------------------");
console.log("arrow02 function example");
console.log("-----------------------------");

var reflect = function (value) {
    return value;
};
// effectively equivalent to:
var reflect = function reflect(value) {
    return value;
};

var sum = function (num1, num2) {
    return num1 + num2;
};
// effectively equivalent to:
var sum = function sum(num1, num2) {
    return num1 + num2;
};

var sum = function () {
    return 1 + 2;
};
// effectively equivalent to:
var sum = function sum() {
    return 1 + 2;
};

var testScope = true;
console.log("testScope outside = " + testScope);
var sum = function (num1, num2) {
    console.log("testScope inside = " + testScope);
    return num1 + num2;
};
console.log("3+4=" + sum(3, 4));

// effectively equivalent to:
var sum = function sum(num1, num2) {
    return num1 + num2;
};

var getTempItem = function (id) {
    return { id: id, name: "Temp" };
};
// effectively equivalent to:
var getTempItem = function getTempItem(id) {
    return {
        id: id,
        name: "Temp"
    };
};

var values = [1, 2, 3];

var result = values.sort(function (a, b) {
    return a - b;
});

// effectively equivalent to:
var result = values.sort(function (a, b) {
    return a - b;
});

console.log(result);