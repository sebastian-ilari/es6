"use strict";

console.log("-----------------------------");
console.log("import example");
console.log("-----------------------------");

var _exportJs = require("export.js");

var pi = _exportJs.pi;
var square = _exportJs.square;
var object = _exportJs.object;

console.log(pi);
console.log(square(3));
console.log(object.name);