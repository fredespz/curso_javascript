'use strict'

/* Hacer un programa que muestre todos los numeros entro dos numeros introducidos por el usuario*/

var numero1= parseInt(prompt('Introduzca primer numero', 0));
var numero2= parseInt(prompt('Introduzca segundo numero', 0));

document.write("<h1> De "+numero1+ " a "+ numero2+ " estan estos numero:</h1>")

for(var i = numero1; i <= numero2; i++){
	console.log(i);
	document.write(i+ "</br>");
}


