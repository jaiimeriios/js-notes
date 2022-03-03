console.log("console log");
console.info("console info");

const arreglo = [2, 4, 2, 7, 3];

console.table(arreglo);

console.warn("advertencia:: washa bien queonda");
console.error("error:: aqui paso algo");

// Interpolated
console.log("Hello %s I am a string!", "💩");

// Styled
console.log(
    "%c I am some great text",
    "padding: 2px 5px; font-size:14px; background:#078bcc; text-shadow: 1px 1px 1px rgba(0,0,0,.5)"
);

// Viewing DOM Elements
const p = document.querySelector("p");

console.log(p);
console.dir(p);

// Grupos
console.groupCollapsed("agrupado");
console.log("asdfasd");
console.groupEnd("agrupado");

console.log("Empezando tiempo::");
console.time("tiempo");
for (let i = 0; i <= 5; i++) {
    console.log(i);
    console.timeLog("tiempo");
}
console.timeEnd("tiempo");
