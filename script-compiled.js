'use strict';

var sayHello = function sayHello() {
  var zm1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Hello';
  var zm2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'World!';
  return console.log(zm1 + ' ' + zm2);
};
sayHello();

var multiply = function multiply() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return console.log('Wynik mno\u017Cenia = ' + a * b);
};
multiply();
multiply(3, 21.6);
multiply(7);
multiply(9, 4 / 2);

var averange = function averange() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return console.log('Srednia = ' + args.reduce(function (a, b) {
    return a + b;
  }, 0) / args.length);
};
averange(2, 4, 6);

var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
averange.apply(undefined, grades);

var data = [1, 4, 'Iwona', false, 'Nowak'];
var a = data[2],
    b = data[4];

console.log(a, b);
