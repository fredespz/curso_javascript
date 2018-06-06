'use strict'

//switch

var edad = 70;
var imprime = "";

switch(edad){
	case 18:
		imprime = "Ha cumplido la mayoria de edad";
	break;	

	case 25:
		imprime = "Ya es adulto";
	break;
	
	case 40:
		imprime = "Crisis de los 40";	
	break;
	
	case 70:
		imprime = "Ya es anciano"; 	
	break;
	
}

console.log(imprime)