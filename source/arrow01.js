console.log('-----------------------------');
console.log('arrow01 function example');
console.log('-----------------------------');

let numbers = [ 0, 1, 5, 10 ];

//ES5 way
var squaredES5 = numbers.map(function(number) {
    return number * number;
});
console.log('Result ES5 way = ' + squaredES5);


//ES6 way
var squaredES6 = numbers.map(number => number * number);
console.log('Result ES6 way = ' + squaredES6);
