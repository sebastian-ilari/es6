console.log('-----------------------------');
console.log('arrow03 function example');
console.log('-----------------------------');

//ES5 way
/*
function Person() {
    var self = this; // Some choose `that` instead of `self`.
    // Choose one and be consistent.
    self.age = 0;

    setInterval(function growUp() {
        // The callback refers to the `self` variable of which
        // the value is the expected object.
        self.age++;
    }, 1000);
}
*/

//ES6 way
function Person(){
    this.age = 0;

    setInterval(() => {
        this.age++; // |this| properly refers to the person object
    }, 1000);
}

var person = new Person();

console.log('Inspect the value of person.age on the console to see her growing :)');
