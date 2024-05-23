
// Elementos a manipular
const body = document.getElementById("body");
const h1 = document.getElementById("h1");
var condicion = true;

function color_fondo() {

	if (condicion) {
		body.style.background = "#252422";
		h1.style.color = "white";

		condicion = false;
	} else {
		body.style.background = "white";
		h1.style.color = "black";
  
		condicion = true;
	}
}

function correcta() {
	alert("Ganaste! \nSu nombre es V. Puedes obtener más información sobre ellos en nuestra página.\n\n¡Descubre más :)!");
}

function incorrecta() {
	alert("Perdiste :( \nPuedes obtener más información sobre ellos en nuestra página.\n\n¡Descubre más :)!");
}