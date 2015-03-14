console.log('-----------------------------');
console.log('syntax examples');
console.log('-----------------------------');

function createPersonES5(name, age) {
    return {
        name: name,
        age: age
    };
}

function createPersonES6(name, age) {
    return { name, age };
}

let es5Person = createPersonES5('Mark', 20);
let es6Person = createPersonES6('Bill', 30);

console.log('Person created tha ES5 way = ' + `Name: ${es5Person.name}, age: ${es5Person.age}`);
console.log('Person created tha ES6 way = ' + `Name: ${es6Person.name}, age: ${es6Person.age}`);


let me = {
    name: 'Seb',
    homeTown: 'Temperley',

    // The ES5 way
    height: function() {
        return 1.70;
    },

    // The ES6 way
    weight() {
        return 65;
    }
};

console.log(`My name is ${me.name}, I am from ${me.homeTown},
my height is ${me.height()} and my weight ${me.weight()}`);
