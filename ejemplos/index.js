//Ejemplos de javascript

//Comentario de linea

/**
 * Comentario de bloque
 */

console.log("Hola mundo");
console.log("----------");

const edad = 55;
let nombre = "Juan";
let apellido = "Pardo";
const esEstudiante = false;
const altura = 1.70;
const semestres = [] //Array
//Diccionarios -> Objeto -> JSON (Javascript Object Notation)
const materiaPreferida = {nombre:"Calculo",id:0}

//Null-undefined
const universidad = null
const carrera = undefined;

console.log("Tipo de dato de nombre: " + typeof(nombre));
console.log("Tipo de dato de edad: " + typeof(edad));

console.log("----Conversion de string a number");
const precioMatricula = "5000000.5"
console.log("Entero " + parseInt(precioMatricula));
console.log("Flotante "+ parseFloat(precioMatricula));

console.log("----- == & ===----");
console.log("Doble igual: " , "45" == 45); //TRUE //COMPARA VALOR
console.log("Triple igual: " , "45" === 45); //FALSE // COMPARA VALOR Y TIPO

console.log("----CONCATENACION----");
console.log(nombre + " " + apellido);
console.log(`${nombre} ${apellido}`);

console.log("----OPERADOR TERNARIO---- (exp ? verdadero : false");
console.log(edad >= 18 ? "Es mayor de edad ": "Es menor de edad");

console.log("---CONDICIONALES---");
let condition = edad >18
if (condition) {}
if (condition) {} else {}

const dia = "LUNES"
switch (dia) {
    case "LUNES":
        console.log("LUNES");
        break;
    case "MARTES":
        console.log("MARTES");
        break;
    case "MARTES":
        console.log(dia);
        break;
    
    default:
        console.log("No es valido");
        break;
}


console.log("---CICLOS---");
// for (let index = 0; index < 10; index++) {
//     const element = array[index];
    
// }

// while (condition) {
   
// }

for (const item of [1,2,3]) {
    console.log(item);
}

for (const key in materiaPreferida) {
 console.log(key);
}

[1,2,3].forEach(element => {
    console.log(element);
});

console.log("---FUNCIONES---");

function imprimirNombre(nombre) {
    console.log(nombre);
}

imprimirNombre(nombre);

const imprimirNombreApellido = (nombre, apellido) => {
    console.log(`${nombre} ${apellido}`); // Arrow function
}

imprimirNombreApellido(nombre,apellido);

//Scope
const crearNombreCompleto = (nombre, apellido) => {
    console.log("--GLOBAL SCOPE FAKE---");
    console.log(`${nombre} ${apellido}`);
    let name = nombre
    if (nombre.length > 3) {
        let name = nombre[0] + " " + apellido
        console.log(name);
    }
    console.log(name);
}

const botonesHTML = document.getElementsByTagName('button')
console.log(botonesHTML);
crearNombreCompleto(nombre,apellido)