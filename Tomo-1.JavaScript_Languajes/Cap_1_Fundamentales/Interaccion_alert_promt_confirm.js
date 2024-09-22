'use strict';
// Este scirpts es para ser relizado en el navegador
alert('Hello'); //Esto muestra un mensajae en una mini-ventana la cual no permite usar la pagina hasta que no se
// confirma
// Funcion pompt acepta 2 agumentos.Muestra una mini-ventana con un mensage y un campo  para el visitante
let age = prompt("How old are you?",[]); // title:  texto para mostrar al usuario, default: opcional, valor
//incial para el campo de entrada
alert(`You are ${age} year old!`);

//Funccion confirm. Hace una pregunta al usuario si se preciona OK devuelve true de lo contrario falso
let isBoos = confirm('Are you the boss?');
alert(isBoos);


