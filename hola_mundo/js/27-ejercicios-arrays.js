'use strict'

/*
1. Pida 6 numeros por pantalla y los meta en un array
2. Mostrar el array entero (todos sus elementos) en el cuerpo de la pagina y en la consola
3. Ordenarlo y mostrarlo
4. Invertir su orden y mostrarlo
5. Mostrar cuantos elementos tiene el array
6. Busqueda de un valor introducido por el usuario, que nos diga si lo encuentra y su indice
 (se valorará el uso de funciones)
*/

function mostrarArray(elementos, textoCustom = ""){
	document.write("<h1>Contenido del array"+textoCustom+"</h1>");
	document.write("<ul>");
	elementos.forEach((elemento,index)=>{
		document.write("<li> "+elemento+" </li>");
	
	});
		


	document.write("</ul>");
};
//var numeros = new Array(6);

//PEDIR 6 NUMEROS
var numeros = [];

for(var i = 0; i <= 5; i++){
	//numeros[i] = parseInt(prompt("Introduzca un numero" , 0));
	numeros.push(parseInt(prompt("Introduzca un numero" , 0)));
}

//MOSTRAR EN EL CUERPO DE LA PAGINA
mostrarArray(numeros);

//MOSTRAR POR LA CONSOLA
console.log(numeros);

//Ordenar y mostrar
numeros.sort();
mostrarArray(numeros, ' ordenado');

//Invertir su orden
numeros.reverse();
mostrarArray(numeros, ' desordenados');