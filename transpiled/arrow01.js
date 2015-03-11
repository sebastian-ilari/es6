"use strict";

console.log("-----------------------------");
console.log("arrow01 function example");
console.log("-----------------------------");

var x = [0, 1, 2];

//arrow function
x.map(function (x) {
  return console.log(x * x);
});