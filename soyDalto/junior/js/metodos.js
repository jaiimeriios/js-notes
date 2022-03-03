// String Methods

let cadena = 'cadena de texto ';
let cadena1 = 'cadena otra texto';

resultadoConcat = cadena.concat(cadena1);

console.log('concat()::', resultadoConcat);

console.log('startsWith()::', cadena.startsWith(cadena1));

console.log('endsWith()::', cadena.endsWith(cadena1));

let cadena2 = 'cadena de texto ';
console.log('includes()::', cadena2.includes('text'));

let cadena3 = 'otra cadena de texto ';
console.log('indexOf()::', cadena3.indexOf('otra'));

let cadena4 = 'abc';
console.log('padStart()::', cadena4.padStart(6, '-='));
console.log('padEnd()::', cadena4.padEnd(8, '-='));
console.log('repeat()::', cadena4.repeat(3));

// split()
let cadena5 = 'Lorem ipsum, Dolor site amet';

console.log('split()::', cadena5.split(','));
console.log('split()::', cadena5.split('ipsum'));
console.log('split()::', cadena5.split(' '));

//substring()
console.log('substring()::', cadena5.substring(13, 18));

//toLowerCase()
console.log('toLowerCase()::', cadena5.toLowerCase());

//toUpperCase()
console.log('toUpperCase()::', cadena5.toUpperCase());

let cadena6 = [324, 'qwer'];

//toString()
console.log('toString()::', cadena6.toString());

let cadena7 = '   Lorem ipsum, Dolor site amet    ';

// trim()
console.log('trim()::', cadena7.trim());

//trimStart()
console.log('trimStart()::', cadena7.trimStart());

// trimEnd()
console.log('trimEnd()::', cadena7.trimEnd());

// Array Methods

// array transformers
let arreglo1 = ['lorem', 'ipsum', 'dolor', 'sit'];

console.log('arreglo1::', arreglo1);

arreglo1.shift();
console.log('shift()::', arreglo1);

arreglo1.pop();
console.log('pop()::', arreglo1);

arreglo1.unshift('LOREM');
console.log('unshift()::', arreglo1);

arreglo1.push('AMET');
console.log('push()::', arreglo1);

arreglo1.reverse();
console.log('reverse()::', arreglo1);

arreglo1.sort();
console.log('sort()::', arreglo1);

arreglo1.splice(1, 2, 'REMOVIDO', 'Y', 'AGREDADO');
console.log('splice()::', arreglo1);

arreglo1.splice(0, 0, 'SOLO', 'AGREDADOS');
console.log('splice()::', arreglo1);

// array accessors - no modifican el arreglo original

let arreglo2 = ['asdf', 54654, 'asdfdsfa', 4545, true, 'qwer', '$%^&'];

arreglo2.join('-');
console.log('join()::', arreglo2);
console.log('join()::', arreglo2.join('_'));

arreglo2.slice(2, 6);
console.log('slice()::', arreglo2);
console.log('slice()::', arreglo2.slice(2, 5));

// array loops

/*
    The main difference between forEach and filter is that forEach just loop over the array and executes the callback but filter executes the callback and check its return value. If the value is true element remains in the resulting array but if the return value is false the element will be removed for the resulting array.
*/

arreglo2.filter((e) => {
    e.length > 3 ? console.log('filter()::', e) : console.log('nel');
});

arreglo2.forEach((e) => {
    console.log('forEach()::', e);
    e.length > 3 ? console.log('foreach()::', e) : console.log('nop');
});
