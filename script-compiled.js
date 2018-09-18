'use strict';

var sayHello = function sayHello() {
  var zm1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Hello';
  var zm2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'World!';
  return zm1 + ' ' + zm2;
};
console.log(sayHello());

var multiply = function multiply() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return '' + a * b;
};
console.log('Wynik mnożenia = ' + multiply(3, 21.6));
console.log('Wynik mnożenia = ' + multiply(7));
console.log('Wynik mnożenia = ' + multiply(9, 4 / 2));
console.log('Wynik mnożenia = ' + multiply());

var average = function average() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return console.log('Srednia = ' + args.reduce(function (a, b) {
    return a + b;
  }, 0) / args.length);
};
average(2, 4, 6);

var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
average.apply(undefined, grades);

var data = [1, 4, 'Iwona', false, 'Nowak'];
var firstName = data[2],
    lastName = data[4];

console.log(firstName, lastName);
