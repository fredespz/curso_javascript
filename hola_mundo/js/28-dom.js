'Use strict'

//DOM - Document Object Model
function cambia_padding(margen){
	caja.style.padding = margen;
}


//var caja = document.getElementById("micaja");
var caja = document.querySelector("#micaja");

caja.innerHTML = "Cambio de texto";
caja.style.color = "blue";
caja.style.background = "green";
caja.style.padding = "40px";
caja.className = "hello fred";

console.log(caja);