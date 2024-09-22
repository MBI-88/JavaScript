"use strict";
//Uso de while loop
let i = 0;
while (i < 3){
    console.log(i);
    i++;
}
// Comparando el uso de (i!=0) vs (i).
i = 3;
console.log('Uso de la comparacion 1 != 0 vs (i)');
while(i){
    // No se necesita llaves si es una operacion simple
    console.log(i);
    i--;
}

//Uso del lazo do-while
i = 0;
console.log('Uso del lazo do-while')
do {
    console.log(i);
    i++;
}while(i < 3);
// Uso del lazo for
console.log('Uso del lazo for ');
for (let i = 0;i < 3;i++){console.log(i);} // tambien se puede usar una variable ya creada (let i / i)

// Saltando partes en el lazo
let a = 0;
console.log('Saltando partes en le lazo')
for (; a < 3;a++){console.log(a);}
// Removiendo la parte del incremento
console.log('Removiendo el incremento en el lazo')
a = 0;
for (;a < 3;){console.log(a++);} // El suo de el punto y coma debe  estar siempre presente.

