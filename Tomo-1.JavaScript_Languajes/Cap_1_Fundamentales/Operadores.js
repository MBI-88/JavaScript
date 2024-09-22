"use strict";

// Operadores unario, binario, operandos

let x = 1;
x = -x; // unario de negacion
console.log(`Valor de ${x}`);
// Concatenacion de string
let s = 'my '+'string';
console.log(s);
// Conversiones numericas
let  y = 1;
console.log(+y); // 1
// Ejemplp de conversion automatica de string a numeros para realizar operaciones
let apples = "2",oranges = "3";
console.log(+apples  + +oranges);// salida es 5.Variante mas larga seria Number(apples) + Number(oranges)
// Asignacion
let a,b,c;
a = b = c = 2 + 2;
console.log(`Valor de asignacion a = ${a},b = ${b},c = ${c}`);
a = 1,b = 2;
c = 3 - (a = b + 1)
console.log(`Valor de  c = ${c}`);
console.log(5 % 2); // Operador resto de la divicion de 5 / 2
console.log(6 % 3);
// Operador incremental y decremental. Solo puden ser aplicados a variables.
let count = 2;
count ++;
console.log(`Incremento de count  ${count}`);
count --;
console.log(`Decremento  de count ${count}`);

// Diferencias entre el prefix y posfix

count = 0;
console.log(`Uso del prefix ${++count}`); // 1
count = 0;
console.log(`Uso del posfix ${count++}`); // 0

// Uso de operadores binarios AND (&),OR(|),XOR(^),NOT(~),LEFT_SHIFT(<<),RIGHT_SHIFT(>>),ZERO-FILL SHIFT(>>>)

let orbit = 2,andbit = 3
let operation;
operation = orbit & andbit
console.log(`Operacion and ${operation}`);

// Uso de la coma en operaciones. Devuelve la ultima operacion evaluada.

let coma = (1 + 2, 3 +4);
console.log(`Uso de la coma ${coma}`);
// Ejercicio de ejemplo
a = 1,b = 1;
c = ++a;
let d = b++;
console.log(`Respuesta del ejercicio c = ${c}, d = ${d}`);

// Consecuencia de uso de comparaciones

a = 0, b = "0";
console.log(`Consecuencia a = ${a} , b = ${b} comparacion = ${a == b}`);

// Caracteristicas del operador de igualdad.Esto pasa porque los tipos diferentes son convertidos a nueros.

console.log("Uso del operador de igualdad ",0 == false);
console.log('Uso del operador de igualdad 2 ',' ' == false);
// Ejercicio de comparacion
console.log(5 > 4);
console.log(undefined == null);
console.log(null == "\n0\n");
console.log(null == +"\n0\n");
console.log("2" > "12");



