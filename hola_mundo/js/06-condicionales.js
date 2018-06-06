'use strict'

//condicionales IF
//Si A es igual a 8 entonces haz algo

var edad = 19;
var nombre = 'David suarez'

/*
//	Operadores relacioneales
		Mayor: >
		Menor: <
		Mayor o igual: >=
		Menor o igual: <=
		Igual: ==
		Distinto: !=

*/		

if(edad >= 18){
	// Es mayor de edad
	console.log(nombre+" tiene "+edad+" años, es mayor de edad ");

	if(edad <= 20){
		console.log('You are from Marvel');

	}else if(edad >=40){
		console.log('You are pretty old');
	}else{
		console.log('You are normal');
	}


}else{
	console.log(nombre+" tiene "+edad+" años, es menor de edad ");
}

/*
//Operadores logicos
AND(Y): &&
OR(O): ||
Negación: !
*/

var year = 2018;
//Negación
if(year != 2016){
	console.log("El año no es realmente 2016 es: "+ year );

}
//AND

if(year >= 2000 && year <=2020){
	console.log("Estamos en la era moderna");
}else{
	console.log("Estamos en la era post-moderna");
}

//OR

 if(year == 2008 || (year >= 2018 && year == 2028)){
 	console.log("el año acaba en 2018");

 }else{
 	console.log("AÑO NO REGISTRADO!!");
 }


