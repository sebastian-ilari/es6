console.log('-----------------------------');
console.log('let function example');
console.log('-----------------------------');

var globalScope = 'Pear';

function testScope() {
    var functionScope = 'Apple';
    console.log('Global variable on function scope: ' + globalScope);

    if (true) {
        console.log('Function variable on block scope: ' + functionScope);
        console.log('Global variable on block scope: ' + globalScope);

        var blockScopeVar = 'Cherry';
        console.log('Block variable on block scope defined with var: ' + blockScopeVar);

        let blockScopeLet = 'Banana';
        console.log('Block variable on block scope defined with let: ' + blockScopeLet);
    }

    console.log('Block variable on function scope defined with var: ' + blockScopeVar);
    // Throws exception
    //console.log('Block variable on function scope defined with let: ' + blockScopeLet);

    return 1;
}

// Throws exception
//console.log('Function variable on global scope: ' + functionScope);

testScope();

for (var i=0; i<3; i++) {
}

console.log('Variable content after being defined with var in a for loop = ' + i);


for (let j=0; j<3; j++) {
}

// Throws exception
//console.log('Variable content after being defined with var in a for loop = ' + j);
