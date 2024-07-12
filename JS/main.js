
// Elementos a manipular
const h1 = document.getElementById("h1");
var condicion = true;

function colorFondo() {

	document.body.style.backgroundColor = condicion ? "#252422" : "white";
	h1.style.color = condicion ? "white" : "black";

	condicion = !condicion;
}

function correcta() {
	alert("Ganaste! \nSu nombre es V. Puedes obtener más información sobre ellos en nuestra página.\n\n¡Descubre más :)!");
}

function incorrecta() {
	alert("Perdiste :( \nPuedes obtener más información sobre ellos en nuestra página.\n\n¡Descubre más :)!");
}