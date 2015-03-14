console.log('-----------------------------');
console.log('iterator example');
console.log('-----------------------------');

// Why this doesn't work?
//require('polyfill');

function *iterate() {
    yield 111;
    yield 222;
    yield 333;
}

var result = iterate();

console.log(result.next());
console.log(result.next());
console.log(result.next());
console.log(result.next());


// A more complex example
function *anotherGenerator(i) {
    yield i + 1;
    yield i + 2;
    yield i + 3;
}

function *generator(i){
    yield i;
    yield *anotherGenerator(i);
    yield i + 10;
}

var gen = generator(10);

console.log(gen.next().value); // 10
console.log(gen.next().value); // 11
console.log(gen.next().value); // 12
console.log(gen.next().value); // 13
console.log(gen.next().value); // 20
