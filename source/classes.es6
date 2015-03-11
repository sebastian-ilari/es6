console.log('-----------------------------');
console.log('classes example');
console.log('-----------------------------');

class Car {
    //constructors!
    constructor(make) {
        this.make = make;
        this.currentSpeed = 25;
    }

    printCurrentSpeed(){
        console.log(this.make + ' is going ' + this.currentSpeed + ' mph.');
    }
}

//inheritance
class RaceCar extends Car {
    constructor(make, topSpeed) {

        //call the parent constructor with super
        super(make);
        this.topSpeed = topSpeed;
    }

    goFast() {
        this.currentSpeed = this.topSpeed;
    }
}

let stang = new RaceCar('Mustang', 150);

stang.printCurrentSpeed();
stang.goFast();
stang.printCurrentSpeed();
