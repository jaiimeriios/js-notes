function createE(name) {
    let p = document.createElement('p');
    p.textContent = name;
    return p;
}
const content = document.getElementById('contentSection');

console.log('while -=-=-=-=-=-=-=-=-=-=-=-=');
content.appendChild(createE('while'));

let numeroWhile = 0;
while (numeroWhile < 10) {
    numeroWhile++;
    console.log(numeroWhile);
    content.appendChild(createE(numeroWhile));
    if (numeroWhile == 4) {
        break;
    }
}

console.log('do while =-=-=-=-=-=-=-=-=-=-=');
content.appendChild(createE('do while'));

let numeroDo = 0;
do {
    numeroDo++;
    console.log('do: ' + numeroDo);
    content.appendChild(createE(numeroDo));
} while (numeroDo < 3);
{
    numeroDo++;
    console.log('while: ' + numeroDo);
    content.appendChild(createE(numeroDo));
}

console.log('for -=-=-=-=-=-=-=-=-=-=-=-=-=');
content.appendChild(createE('for'));

let frutas = ['banana', 'manzana', 'pera', 'naranja', 'sandia', 'uva'];

for (let i = 0; i < frutas.length; i++) {
    if (frutas[i] == 'pera') {
        continue;
    }
    console.log(i);
    console.log(frutas[i]);
    content.appendChild(createE(frutas[i]));
}

let animales = ['perro', 'gato', 'pajaro', 'elefante', 'conejo'];
animales.edad = 20;
console.log(animales);

console.log('forin -=-=-=-=-=-=-=-=-=-=-=-=');
content.appendChild(createE('forin'));

for (const animal in animales) {
    console.log(animal); // index
    console.log(animales[animal]);
    content.appendChild(createE(animales[animal]));
}
// for..in returns a list of keys on the object being iterated

console.log('forof -=-=-=-=-=-=-=-=-=-=-=-=');
content.appendChild(createE('forin'));
for (const animal of animales) {
    console.log(animal); // index
    console.log(animales[animal]);
    content.appendChild(createE(animal));
}
// for..of returns a list of values of the numeric properties of the object being iterated

// SUM ARRAY
let arrayNumber = document.querySelector('#arrayNumber');
let arrayNumbers = [3, 5, 9, 6, 5, 4, 8, 5, 7, 3];

let total = 0;
for (i = 0; i < arrayNumbers.length; i++) {
    total += arrayNumbers[i];
}
arrayNumber.innerHTML = total;

// Total Sum of Inputs
let numInput = document.querySelectorAll('.numInput');
let totalInputs = document.querySelector('#inputNumber');
let suma = document.querySelector('#suma');
let sumaes6 = document.querySelector('#sumaes6');

suma.addEventListener('click', () => {
    let total = 0;
    for (i = 0; i < numInput.length; i++) {
        total += Number(numInput[i].value);
    }
    totalInputs.innerHTML = total;
});

sumaes6.addEventListener('click', () => {
    let suma = 0;
    for (const valor of numInput) {
        suma += Number(valor.value);
    }
    totalInputs.innerHTML = suma;
});

Array.from(numInput).forEach((element) => {
    element.addEventListener('change', function () {
        let suma = 0;
        for (const valor of numInput) {
            suma += Number(valor.value);
        }
        totalInputs.innerHTML = suma;
    });
});

// Fill Inputs

const mainInput = document.querySelector('#mainInput');
const buttonFill = document.querySelector('#fillInputs');
const fillInputs = document.querySelectorAll('.fillInput');

buttonFill.addEventListener('click', function () {
    Array.from(fillInputs).forEach(function (e) {
        e.value = mainInput.value;
    });
});

// PARAFOS
const parrafo = document.querySelectorAll('.parrafo');

parrafo.forEach((element) => {
    element.addEventListener('click', function () {
        // console.log(element);
        this.style.color = 'green';
    });
    element.style.color = 'blue';
});

// Numeros
const numero = document.querySelectorAll('.numero');
const verde = document.querySelector('#verde');
const reset = document.querySelector('#reset');

verde.addEventListener('click', function () {
    numero.forEach((element) => {
        element.style.color = 'green';
    });
});

let paraCadaUno = () => {
    numero.forEach((element) => {
        element.addEventListener('click', function () {
            console.log(element);
            this.style.color = 'purple';
        });
        element.style.color = 'gold';
    });
};

paraCadaUno();
reset.addEventListener('click', paraCadaUno);
