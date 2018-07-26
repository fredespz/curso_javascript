'use strict'

//Bucle while

var year = 2018;

while(year <= 2051){
	//ejecuta esto
	console.log("Estamos en este año " +year);

	if(year > 2033){
		break;
		debugger;
	}

	year++;
}

// Do while

var years = 15;

do{
	alert("SOLO CUANDO SEA DIFERENTE A 20");
	years++;
	debugger;
}while(years < 25)


