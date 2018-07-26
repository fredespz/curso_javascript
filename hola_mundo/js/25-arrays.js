'use strict'

//Arrays, Arreglos, Matrices

var nombre = "Frederick"
var nombres = ["Josue", "Jesus", "Manuel", "Fernando", 23, true];

var lenguajes = new Array("PHP", "JAVASCRIPT", "GO", "java", "jquery", "ruby");



var elemento = prompt("Que elemento del array quieres??");
if(elemento >= nombres.length){
	alert("Introduce un numero menor que "+ nombres.length)


}else

alert("El elemento es " + nombres[elemento]);


console.log(elemento);
document.write("Lenguajes del 2018");
document.write("<ul>");

//Formas de recorrer un array
/*
for(var i = 0; i < lenguajes.length; i++){
	document.write("<li>"+lenguajes[i]+"</li>");

}
*/
/*
lenguajes.forEach((elemento,indice)=>{
	document.write("<li>"+indice+" - "+elemento+"</li>");

})
*/
/*for(let lenguaje in lenguajes){
	document.write("<li>"+lenguajes[lenguaje]+"</li>");

}
*/
document.write("</ul>");
var precios = [10, 30, 5 , 4, 3];
//var busqueda = lenguajes.find(elemento => elemento == "ruby");
var busqueda = precios.some(precio => precio < 10);


//console.log(busqueda);
