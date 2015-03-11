"use strict";

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

console.log("-----------------------------");
console.log("classes example");
console.log("-----------------------------");

var Car = (function () {
    //constructors!

    function Car(make) {
        _classCallCheck(this, Car);

        this.make = make;
        this.currentSpeed = 25;
    }

    _createClass(Car, {
        printCurrentSpeed: {
            value: function printCurrentSpeed() {
                console.log(this.make + " is going " + this.currentSpeed + " mph.");
            }
        }
    });

    return Car;
})();

//inheritance

var RaceCar = (function (_Car) {
    function RaceCar(make, topSpeed) {
        _classCallCheck(this, RaceCar);

        //call the parent constructor with super
        _get(Object.getPrototypeOf(RaceCar.prototype), "constructor", this).call(this, make);
        this.topSpeed = topSpeed;
    }

    _inherits(RaceCar, _Car);

    _createClass(RaceCar, {
        goFast: {
            value: function goFast() {
                this.currentSpeed = this.topSpeed;
            }
        }
    });

    return RaceCar;
})(Car);

var stang = new RaceCar("Mustang", 150);

stang.printCurrentSpeed();
stang.goFast();
stang.printCurrentSpeed();