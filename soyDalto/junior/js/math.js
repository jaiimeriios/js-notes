class Calculadora {
    constructor(asdf, qwer) {
        this.algo = asdf;
        this.otro = qwer;
    }
    metodo(numero) {
        return this.algo + this.otro + numero;
    }
    sumar(num1, num2) {
        return parseInt(num1) + parseInt(num2);
    }
    restar(num1, num2) {
        return parseInt(num1) - parseInt(num2);
    }
    dividir(num1, num2) {
        return parseInt(num1) / parseInt(num2);
    }
    multiplicar(num1, num2) {
        return parseInt(num1) * parseInt(num2);
    }
}

const calc = new Calculadora(55, 43);

console.log(calc);
console.log(calc.metodo(2));
console.log('SUMA::', calc.sumar(2, 3));
console.log('RESTA::', calc.restar(2, 3));
console.log('DIVISION::', calc.dividir(2, 3));
console.log('MULTIPLICACION::', calc.multiplicar(2, 3));
console.log('nuebo de clase::', new Calculadora(7, 5).metodo(3));

// Math methods

let numero = 25;

console.log('sqrt::', Math.sqrt(numero));
console.log('cbrt', Math.cbrt(numero));

let numeros = [2, 4, 23, 35, 23, 23];

console.log('max', Math.max(...numeros));
console.log('min', Math.min(...numeros));
/*
Spread syntax (...) allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.
*/

let numero1 = Math.random() * 100;

console.log('random::', numero1);
console.log('round::', Math.round(numero1));
console.log('floor::', Math.floor(numero1));
console.log('fround::', Math.fround(numero1));
console.log('trunc::', Math.trunc(numero1));
console.log('random 1-100::', Math.floor(Math.random() * 100) + 1);

console.log('PI::', Math.PI);
console.log('SQRT1_2::', Math.SQRT1_2);
console.log('SQRT2::', Math.SQRT2);

console.log('E::', Math.E);
console.log('LN2::', Math.LN2);
console.log('LN10::', Math.LN10);
console.log('LOG2E::', Math.LOG2E);
console.log('LOG10E::', Math.LOG10E);
