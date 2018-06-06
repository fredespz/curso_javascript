'use strict' 

//Prubeas con let y var

//Prueba con var
var numero = 40;
console.log(numero);//valor 40

if(true){
	var numero = 50;
	console.log(numero); //valor 50
}

console.log(numero); //valor 50

//Prueba con let

var texto = "Rusa";
console.log(texto); //valor Rusa

if(true){
	let texto = "Rocky";
	console.log(texto); //valor Rocky
}

console.log(texto); //valor Rusa