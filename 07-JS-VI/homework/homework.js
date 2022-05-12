// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:
  return nombre[0].toUpperCase() + nombre.slice(1);
}

// el .toUpperCase lo que hace es vovlerte mayuscula el valor del indice declarado, en este caso [0]
// el .slice te permite imprimir el str desde y hasta el caracter que quieras. En este caso, desde indice [1],
// ya que el [0] lo usamos para el .toUppercase y no ponemos un parametro de indice final, ya que queremos
// que nos devuelva toda la string, nombre, sin la primer letra nomas
  


function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:
  cb();
}

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:
  return cb(n1,n2);
} 

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`  --- Nos quiere decir que se lo pasemos como ARGUMENTO --> ()
  // No es necesario devolver nada
  //Tu código:
  var suma = numeros.reduce(function(acumulador,elemento) { 
  return acumulador + elemento }); // === ACUMULADOR = ACUMULADOR + ELEMENTO --> BUCLE FOR
 cb(suma);                   // Despues de cerrar llave del return podriamos poner el valor inicial del acumulador, que por defecto 
}                            // es 0. En este caso no nos importa ya que queremos la suma total, pero si fuese una multiplicacion
                             // es oblgatorio poner el 1, sino tendriamos como resultado final 0 -->ej:  elemento},0);
                  

//El .reduce lo que hace es reducir todos los elementos de un array en un solo elemento. Esto nos sirve si tenes un arreglo
// con varios numeros y queremos saber la suma total de estos, un promedio, multiplicarlos todos, etc. toda operacion en la que
// el resultado sea solo un numero / elemento

// El .reduce es una funcion que recibe parametros / argumentos. Puede recibir 4:
// 1. El ACUMULADOR (ac) {Donde se va almacenando los resultados de cada ciclo} COMO BUCLE FOR
// 2. El ELEMENTO (ele) {Representa el valor/ los valores que estan dentro del array, en este caso NUMEROS} COMO BUCLE FOR
// 3. El INIDCE (indx) {Es el indice del array, las famosas KEY --> 0, 1, 2, 3, etc}
// 4. El ARRAY (scr) {Nos permte imprimir/citar el array entero que recibimos}
// EL ORDEN DECLARADO ARRIBA ES OBLIGATORIO. El primero siempre va a ser el acumulador, el segundo los elementos, tercero indice,etc
// EL ACUMULADOR Y LOS ELEMENTOS SON PARAMETROS OBLIGATORIOS PARA EL .REDUCE !!

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:
 array.forEach(function(elemento) {
  cb(elemento);
 });
} 
// ----
// OTRA OPCION
// for(var i = 0; i < array.length; i++) {
//   cb(array[i]);
// }
// }
// ----
// El .forEach actua como un bucle for, pero no retorna nada. El .forEach se va a ejecutar una vez por c/elemento
// El orden de los argumentos en el .forEach es distinto al del .reduce: SON 3 
// 1. El ELEMENTO (ele)
// 2. El INDICE (indx)
// 3. El ARRAY en si mismo -- Lo podemos citar en caso de necesitar hacer el .length, necesitar la cant de elementos, etc
//

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:
  var arraynuevo = array.map(function(ele){
  return cb(ele); // este return esta actuando como el push de arraynuevo. Devuelve el nuevo valor modicado al arraynuevo
  });
  return arraynuevo;
}

// otra forma de hacer el ejercicio
// ---
//var array1 = array.map (cb) 
// return array1
//}
// ----
// El .map agarra cada elemento del array, lo procesa con la funcion que le indicaste y lo devuelve.
// Te deja un nuevo array con todos los elementos modificados y ordenados

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:
  return array.filter(function(ele){
  return ele[0] === 'a';
  });
}
 
// OTRA ALTERNATIVA CON EL .filter (Seria lo mismo pero con un if para la condicion a cumplir)

// return array.filter(function(ele){
//  if (ele[0] === 'a'){
//   return ele;
//  }
// });
//}
 
 // Por que no funciona asi??
 
  //var nuevoarray = array.map(function(elemento){
  //   if (elemento[0] === 'a'){
  //     return elemento;
  //   };
  // }); 
  // return nuevoarray
 //}
 
 // ----

// El filter tiene que tener, o una variable creada que va a contener 
// ese nuevo array con los elementos filtrados o tenemos que poner el return.
// Siempre tenemos que hacer una de esas dos cosas. Porque necesita MOSTRARSE o GUARDARSE para ser mostrado

// ¿Como funciona el .filter?
// 1. .filter recibe una funcion anonima como las otras funciones ya vistas.
// 2. Se maneja por respuestas booleanas / variables booleanas -- True || False
//   A a la funcion de declaremos en el .filter le vamos a poner una condicion a cumplir, la cual va aser Treu o False.
//   Si el elemento recibido cumple con la condicion, el resultado es true. De no serlo, es false.
// 2. .filter crea un nuevo arreglo donde se agregan estos elementos que pasan la condicion declarada. Osea true
// Viene de las tablas de las verdades. NO HACE FALRA GENERAR UN IF PARA DECLARARLE LA CONDICION

// OTRAS OPCIONES DE RESOLVER ESTE EJERCICIO PERO CON .map Y .forEach ; TAMBIEN SE PODRIA RESOLVER CON UN BUCLE FOR
//var nuevoarray = [];
//   array.map(function(elemento){
//    if (elemento[0] === 'a'){
//       nuevoarray.push(elemento);
//    };
//   }); 
//   return nuevoarray
//}  

//var nuevoarray = [];
//array.forEach(function(elemento){
// if (elemento[0] === 'a'){
//    nuevoarray.push (elemento);
//  };
//}); 
//return nuevoarray;
//}  


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
