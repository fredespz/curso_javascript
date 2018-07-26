'use strict'

//Parametros REST y SPREAD

function listadodefrutas(fruta1,fruta2,...Todas_las_frutas){

	console.log("fruta1: ",fruta1);
	console.log("fruta2: ",fruta2);
	console.log(Todas_las_frutas);

}

listadodefrutas("Manzana", "Mango","Pera","Guanabana", "Piña");

var frutas = ["Manzana", "Mango"]

listadodefrutas(...frutas,"Pera","Guanabana", "Piña");