'use strict'

/*
Tablar de multiplicar de un numero introducido por pantalla
*/

var numero = parseInt(prompt('¿De que numero quieres la tabla?', 1));

document.write("<h1>Tabla del " +numero+ "</h1>");
for(var i = 1; i<=10; i++ ){
	document.write(i+" x "+numero+" = "+(i*numero)+"<br/>");

}


//TODAS LAS TABLAS
for(var d = 1; d <=10; d++){
	document.write("<h1>Tabla del " +d+ " </h1>");
	for(var i = 1; i<=10; i++ ){
	document.write(i+" x "+d+ " = "+(i*d)+"<br/>");

	}
}
