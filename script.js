const sayHello = (zm1 = 'Hello', zm2 = 'World!') => console.log(`${zm1} ${zm2}`);
sayHello();

const multiply = ( a=0, b=0 ) => console.log( `Wynik mnożenia = ${a*b}`);
multiply();
multiply(3,21.6);
multiply(7);
multiply(9,4/2);

const averange = ( ...args ) => console.log(`Srednia = ` + (args.reduce((a,b)=>a+b,0))/args.length );
averange(2,4,6);

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
averange(...grades);

const data = [1, 4, 'Iwona', false, 'Nowak'];
const [ , , a, , b] = data;
console.log(a,b);


