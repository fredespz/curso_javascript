'use strict'

var liga = ['Premier league', 'BBVA', 'Bundesliga', 'Ligue 1'];
var equipos = ['Tottenham', 'Real Madrid', 'Borussia Dormuntd', 'Paris and germain'];

//Metodo para ordenar el array
//equipos.sort();

//Metodo para darle la vuelta a un array
//equipos.reverse();
console.log(equipos);


//var fifa = [liga,equipos];


//console.log(fifa [0][1]);
//console.log(fifa [1][3]);

/*
var elemento = "";

do{
	elemento = prompt("Que pelicula quieres agregar");
	//Metodo para agregar elementos en el array
	equipos.push(elemento);


}while(elemento != "acabar");
*/

//Metodos para quitar elementos en el array

//equipos.pop();
//equipos [2] = undefined;


var indice = equipos.indexOf('Tottenham');
if(indice > -1){
	//Sirver para quitar un elemento
	equipos.splice(indice,1);

}
console.log(indice);

//Metodo o función para convertir un array en un string
var equipos_string = equipos.join();
console.log(equipos_string);
//Metodo o función para convertir un string en un array
var marca = "nike, addidas, converse";
var marca_array = marca.split(",");

console.log(marca_array);
console.log(equipos);

