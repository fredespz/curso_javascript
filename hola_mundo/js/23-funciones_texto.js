'use strict'

//Transformacion de textos
var numero = 444;
var texto1 = "Bienvenido al curso de javascript de victor robles";
var texto2 = "Es un curso genial";

var busqueda = texto1.includes("curso");
console.log(busqueda);





/*

Metodos de busqueda
*.indexof(""); arroja la palabra
*.lastIndexof(""); arroja la ultima palabra
*.search(""); arroja la palabra
*.match(""); devuelve un array con las palabras
*.subtr(nª,nª); Para sustraer una palabra 
*.chartAt(nª); Para sacar una letra concreta de un string
*.starsWidth(""); Comienzo de una cadena de texto , arroja true o false
*.endsWidth(""); Final de una cadena de texto ,true o false
*.includes(""); Busca una palabra y arroja true o false 
*.replace("", ""); Sirve para remplazar un texto por otro
*.slice(nª); Corta desde el caracter que yo desee se le indica un numero o dos 
*.split("esto queda vacio"); sirve para separar arrays 
*.trim(); Sirve para quitar los espacios sobrantes del texto
*/




var dato = numero.toString();
	dato = texto1.toUpperCase();
	dato = texto2.toLowerCase();

console.log(dato);


/*Calcular longitud
var nombre = "Frederick";

console.log(nombre.length);

*/

/*Concatenar - Unir textos

//var textoTotal = texto1+ " " +texto2;
var textoTotal = texto1.concat(" " + texto2)
console.log(textoTotal);
*/