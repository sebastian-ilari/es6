console.log('-----------------------------');
console.log('arrow02 function example');
console.log('-----------------------------');

var reflect = value => value;
// effectively equivalent to:
var reflect = function(value) {
    return value;
};


var sum = (num1, num2) => num1 + num2;
// effectively equivalent to:
var sum = function(num1, num2) {
    return num1 + num2;
};


var sum = () => 1 + 2;
// effectively equivalent to:
var sum = function() {
    return 1 + 2;
};


let testScope = true;
console.log('testScope outside = ' + testScope);
var sum = (num1, num2) => {
    console.log('testScope inside = ' + testScope);
    return num1 + num2;
};
console.log('3+4=' + sum(3,4));

// effectively equivalent to:
var sum = function(num1, num2) {
    return num1 + num2;
};


var getTempItem = id => ({ id: id, name: "Temp" });
// effectively equivalent to:
var getTempItem = function(id) {
    return {
        id: id,
        name: "Temp"
    };
};

let values = [1, 2, 3];

var result = values.sort(function(a, b) {
    return a - b;
});

// effectively equivalent to:
var result = values.sort((a, b) => a - b);

console.log(result);
