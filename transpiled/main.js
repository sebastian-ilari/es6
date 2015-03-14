(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

console.log("-----------------------------");
console.log("import example");
console.log("-----------------------------");

var _moduleJs = require("./module.js");

var pi = _moduleJs.pi;
var square = _moduleJs.square;
var anObject = _moduleJs.anObject;

console.log(pi);
console.log(square(3));
console.log(anObject.name);

},{"./module.js":2}],2:[function(require,module,exports){
"use strict";

exports.square = square;
Object.defineProperty(exports, "__esModule", {
    value: true
});
var pi = 3.1416;

exports.pi = pi;

function square(x) {
    return x * x;
}

;

var anObject = {
    name: "Eli"
};
exports.anObject = anObject;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvT3Blbk1pbmRlci9kZXYtbGFicy9lczYvc291cmNlL21haW4uanMiLCIvVXNlcnMvT3Blbk1pbmRlci9kZXYtbGFicy9lczYvc291cmNlL21vZHVsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO0FBQzdDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztBQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLCtCQUErQixDQUFDLENBQUM7O3dCQUVSLGFBQWE7O0lBQXpDLEVBQUUsYUFBRixFQUFFO0lBQUUsTUFBTSxhQUFOLE1BQU07SUFBRSxRQUFRLGFBQVIsUUFBUTs7QUFFN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDOzs7OztRQ05YLE1BQU0sR0FBTixNQUFNOzs7O0FBRmYsSUFBTSxFQUFFLEdBQUcsTUFBTSxDQUFDOztRQUFaLEVBQUUsR0FBRixFQUFFOztBQUVSLFNBQVMsTUFBTSxDQUFDLENBQUMsRUFBRTtBQUN0QixXQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7Q0FDaEI7O0FBQUEsQ0FBQzs7QUFFSyxJQUFJLFFBQVEsR0FBRztBQUNsQixRQUFJLEVBQUUsS0FBSztDQUNkLENBQUM7UUFGUyxRQUFRLEdBQVIsUUFBUSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbmNvbnNvbGUubG9nKCdpbXBvcnQgZXhhbXBsZScpO1xuY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG5cbmltcG9ydCB7IHBpLCBzcXVhcmUsIGFuT2JqZWN0IH0gZnJvbSAnLi9tb2R1bGUuanMnO1xuXG5jb25zb2xlLmxvZyhwaSk7XG5jb25zb2xlLmxvZyhzcXVhcmUoMykpO1xuY29uc29sZS5sb2coYW5PYmplY3QubmFtZSk7XG4iLCJleHBvcnQgY29uc3QgcGkgPSAzLjE0MTY7XG5cbmV4cG9ydCBmdW5jdGlvbiBzcXVhcmUoeCkge1xuICAgIHJldHVybiB4ICogeDtcbn07XG5cbmV4cG9ydCBsZXQgYW5PYmplY3QgPSB7XG4gICAgbmFtZTogJ0VsaSdcbn07XG4iXX0=
