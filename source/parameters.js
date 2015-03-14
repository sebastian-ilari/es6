console.log('-----------------------------');
console.log('Function parameters example');
console.log('-----------------------------');

function sumar(x = 0, y = 0) {
    return x + y;
}

console.log('Calling sumar with 1 and 2 as parameters returns ' + sumar(1, 2));
console.log('Calling sumar without parameters returns ' + sumar());

function logThings(...things) {
    things.forEach((aThing) => {
        console.log(aThing);
    });
}

logThings('a', 'b', 'c');
