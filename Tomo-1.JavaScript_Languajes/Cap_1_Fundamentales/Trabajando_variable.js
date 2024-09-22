let admin,name // declaracion de 2 variables en una linea
name = "John";
admin = name;

console.log(admin)
console.clear()
let ourPlanetName = "Earth"; // declaracion con asignacion
console.log(ourPlanetName)
console.clear()
// Generalmente se usa uppercase para declarar constantes
/* Ejemplo de uso de blocke de comentario */
let user = 'John',age = 25,message = 'Hello'; // Declaracion y asignacion multiple

// El uso de (var) en scripts viejos
var mes = 'Hello'; // igual a let
// Nombrado de variable
let userName;
let test123;
let $; // variables sin nombrado especial
let _; // variables sin nombrado especial
$ = 1,_=2;
console.log($ + _)

/* Ejemplo de nombrado incorrecto
let 1a;
let my-name;
*/
/* Nombres reservados
   let,class,return y function
 */
// Asignacion de variable sin (let), metodo usado en viejos scripts

num = 5; // si se usa (use strict) no funciona
console.log(num)

// Declaracionde constantes

const  myBirthday = '22.07.88' // esta variable no puede ser cambiada

// Uso paractico con las constantes, se deben declarar  con mayusculas

const COLOR_RED = '#F00';
const COLOR_GREEN = '#0F0';
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = '#FF7F00';
let color = COLOR_BLUE;
console.log(color)

// Tipos de numeros: enteros y float estan juntos , Infinity y -Infinity,NaN

let number = 12;
console.log(number)
number = 12.45
console.log(number)
console.log(1/0) // esta funcion es igual a  alert() en el navegador
// Un NaN es la salida de dividir un string / numero

// Uso de String

let str = "Hello";
let str2 = 'Hello single coute';
let phrse = `Can embed ${str}`; // Tipo de cota  para parsiar valores / Son las unicas que permiten este tipo de uso
console.log(phrse)

// Tipos Booleanos

let nameFiledChecked = true;
let ageFiledChecked = false;

let isGreater = 4 > 1; // Variante del uso de booleanos
console.log(isGreater)

// El valor especial null no representa nada en el lenguaje

let age_  = null;
// Valores indefinidos
let x; // Mostrara "Undefined"
x = undefined; // Hace lo mismo que usar solo la declaracion de x
console.log(`Valor de age ${age_}. Valor de x ${x}`)

// Objetos y simbolos
// Uso de typeof. Retorna el tipo del argumento, es de uso cuando se necesita procesar valores de diferentes tipos

console.log(
    typeof undefined,
    typeof 0 ,
    typeof true,
    typeof('foo'),
    typeof Symbol('id'),

    typeof Math,
    typeof null, //Error de typeof,null no es un objeto
    typeof alert
)
// Ejercicio cotas de String

let name_ = 'ILya';
console.log(`hello ${name_}`)
// Tipos de conversiones
let value = true;
console.log(value,typeof value);
value = String(value)
console.log(value,typeof value);
// Conversion para numeros
let str_ = '123';
console.log(str_,typeof str);
let num_ = Number(str_)
console.log(num_,typeof num_)
console.log(Boolean('0'));// Salida true, para javascripts un stirng no vacio es true
console.log(Boolean('  '));// Salida ture

