'Use strict'

//Funciones
//Una función es una agrupación reutilizable de un conjunto de instrucciones

//Declarar funcion, (parametros)
function porconsola(numero1,numero2){
	//instrucciones
	console.log("suma "+ (numero1+numero2));
	console.log("Resta "+ (numero1-numero2));
	console.log("Multiplicacion "+ (numero1*numero2));
	console.log("Division "+ (numero1/numero2));
	console.log("***********************************");

}

function porpantalla(numero1,numero2){

	document.write("suma "+ (numero1+numero2)+"</br>");
	document.write("Resta "+ (numero1-numero2)+"</br>");
	document.write("Multiplicacion "+ (numero1*numero2)+"</br>");
	document.write("Division "+ (numero1/numero2)+"</br>");
	document.write("***********************************");	

}

function calculadora(numero1,numero2,mostrar=true){
	//condición if
	if(mostrar==true){

		porconsola(numero1,numero2);
		
	}else{

		porpantalla(numero1,numero2);
		
	
	//return "Hola soy la calculadora!!";
	}
}

//Invocar o llamar función
calculadora(5,3);
calculadora(4,5,false);


/*for(var i = 1; i <= 10; i++){

	console.log(i);
	calculadora(i,5);

}
*/