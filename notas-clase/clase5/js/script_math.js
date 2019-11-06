
// 1 - Diseña un algoritmo que simula el lanzamiento de una moneda al
// aire e imprimir si ha salido cara o cruz.
function ex_cara_cruz() {
	if (Math.round(Math.random())) {
		console.log("Ha salido cara");
	} else {
		console.log("Ha salido cruz");
	}
}

ex_cara_cruz();

// 2 - Diseña un algoritmo que simula cien tiradas de dos dados y contar 
// las veces que entre los dos suman 10.
function tira_dado() {
	return Math.floor(Math.random()*6+1);
}

function ex_100_tiradas() {
	let contador = 0;
	for (i=0; i<100; i++) {
		if (tira_dado() + tira_dado() == 10) {
			contador++
		}
	}
	console.log	("Los 2 dados han sumado 10 en ", contador, " veces");
	return contador;
}

var fecha = new Date();

console.log(fecha.getMilliseconds());