// Ejemplo de uso de export

// export an array
export let months = ['Jan', 'Feb', 'Mar','Apr', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
// export a constant
export const MODULES_BECAME_STANDARD_YEAR = 2015;
// export a class
export class User {
constructor(name) {
    this.name = name;
    }
}
// Exportar la parte de una declaracion

function sayHi(usr){
    alert(`Hello ${ussr}`)
}
function sayBye(usr){
    alert(`Bye ${usr}`)
}

export {sayHi,sayBye} // Tecnicamente debe ir enciama de las funciones

// Uso de Import *

// Declaracion import * as say from './say.js' 

// Uso de import as 

// Declaracion import {sayHi as hi, sayBye as bye} from './say.js

// Uso de export as

// Declaracion export {sayHi as hi, sayBye as bye}. Ahora los nombres de uso fuera del scop son hi y bye

// Uso de export default
 
// Se usa para exportar un elemento por modulo

/*
    Se requiere export y import:
    Ejemplo:
    export default class User{
        constructor(name){
            this.name = name
        }
    }

    Y en el main.js import 

    import User from './user.js´

    new User('John')

    En la practica se suele usar no mesclar los export con los exprot default 
*/

// Uso de defualt alias

function sayOO(usr){
    alert(`Hello ${usr}`)
}
export {sayOO as defualt} // Es igual a usar export  default

import {defualt as sayOO} from './user.js'
new User('John')

/*
    El uso de export default es mas dificil de mantener.
    El export de nombres es explícito, es exactamente el nombre del import.
    El uso export named nos obliga a usar exactamente el nombre correcto en el import.
    Para export default siempre elegimos el nombre cuando lo importamos

    Usualmente se usa para mantener el codigo consistente que el nombre de las variables
    en el import debe corresponder con el archivo del que se importe


*/
// Re-export

// Declaracion: export ... from ...

/*  
    Ejemplo:
        export {default as User} from './user.js'
    
    // auth/index.js
    import {login,logout} from './helpers.js'
    export {login,logout}

    import User from './user.js'
    export {User}

    import Github form './providers/github.js'
    export {Github}

    Nota: En el archivo index.js se encuentran las importaciones/exportaciones necesarias de cada modulo para
    que el usuario las utilice y lo que no es necesario usar queda oculto al mismo.

    Usando re-exporting:
    // auth/index.js
    export {login,logout} from './helpers.js

    export {default as User} from './user.js'
    export {default as Github} from './providers/github.js'

    Usando default en re-exporting:

    Tiene que usarse lo siguiente: export * from './module.js' 
    export {defualt} from './module.js'

*/


