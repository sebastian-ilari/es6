"use strict";

var iterate = regeneratorRuntime.mark(

// Why this doesn't work?
//require('polyfill');

function iterate() {
    return regeneratorRuntime.wrap(function iterate$(context$1$0) {
        while (1) switch (context$1$0.prev = context$1$0.next) {
            case 0:
                context$1$0.next = 2;
                return 111;

            case 2:
                context$1$0.next = 4;
                return 222;

            case 4:
                context$1$0.next = 6;
                return 333;

            case 6:
            case "end":
                return context$1$0.stop();
        }
    }, iterate, this);
});
var anotherGenerator = regeneratorRuntime.mark(

// A more complex example
function anotherGenerator(i) {
    return regeneratorRuntime.wrap(function anotherGenerator$(context$1$0) {
        while (1) switch (context$1$0.prev = context$1$0.next) {
            case 0:
                context$1$0.next = 2;
                return i + 1;

            case 2:
                context$1$0.next = 4;
                return i + 2;

            case 4:
                context$1$0.next = 6;
                return i + 3;

            case 6:
            case "end":
                return context$1$0.stop();
        }
    }, anotherGenerator, this);
});
var generator = regeneratorRuntime.mark(function generator(i) {
    return regeneratorRuntime.wrap(function generator$(context$1$0) {
        while (1) switch (context$1$0.prev = context$1$0.next) {
            case 0:
                context$1$0.next = 2;
                return i;

            case 2:
                return context$1$0.delegateYield(anotherGenerator(i), "t4", 3);

            case 3:
                context$1$0.next = 5;
                return i + 10;

            case 5:
            case "end":
                return context$1$0.stop();
        }
    }, generator, this);
});
console.log("-----------------------------");
console.log("iterator example");
console.log("-----------------------------");

var result = iterate();

console.log(result.next());
console.log(result.next());
console.log(result.next());
console.log(result.next());

var gen = generator(10);

console.log(gen.next().value); // 10
console.log(gen.next().value); // 11
console.log(gen.next().value); // 12
console.log(gen.next().value); // 13
console.log(gen.next().value); // 20