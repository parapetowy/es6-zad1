const sayHello = (zm1 = 'Hello', zm2 = 'World!') => (`${zm1} ${zm2}`);
console.log(sayHello());

const multiply = (a = 0, b = 0) => (`${a*b}`);
console.log('Wynik mnożenia = ' + multiply(3, 21.6) );
console.log('Wynik mnożenia = ' + multiply(7) );
console.log('Wynik mnożenia = ' + multiply(9, 4 / 2) );
console.log('Wynik mnożenia = ' + multiply() );

const average = (...args) => console.log(`Srednia = ` + (args.reduce((a, b) => a + b, 0)) / args.length);
average(2, 4, 6);

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
average(...grades);

const data = [1, 4, 'Iwona', false, 'Nowak'];
const [, , firstName, , lastName] = data;
console.log(firstName, lastName);