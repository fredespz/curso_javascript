'use strict'

//Funciones anonimas
//Es una función que no tiene nombre
/*
var pelicula = function(nombre){
	return "La pelicula es "+nombre;

}
*/

function sumame(numero1, numero2,total_de_la_suma, sumaPordos){
	var suma = numero1 + numero2;

	total_de_la_suma(suma);
	sumaPordos(suma);

	return suma;

}

sumame(4,5,function(info){
	console.log("El total es ", info);

},
function(info){
	console.log("La suma por dos es ", (info*2));
});

//funcion en flecha

//(parametro)=>