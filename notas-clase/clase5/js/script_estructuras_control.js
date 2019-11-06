// Ejercicios clase 6
// 1 - Diseña un algoritmo que lea dos números y los compare. 
// Como resultado esperamos que nos diga cual es mayor... o si son iguales.
function esNumero(numero) {
	return true;
}

function ex61_if() {   
   let a = prompt("Por favor introduzca un numero");
   if (!esNumero(a)) {
   	  console.log(a + "no es un numero");
   	  return;
   }
   let b = prompt("Por favor introduzca otro numero");
   if (!esNumero(b)) {
   	  console.log(b + "no es un numero");
   	  return;
   } 
   if (a > b) {
      console.log(a + " es mayor que " + b);
   } else if (b > a) {
      console.log(b + " es mayor que " + a);	
   } else {
   	  console.log(a + " y " + b + " son iguales");
   }
   (a > b) ? console.log(a + " es mayor que " + b) : 
   			(b > a) ? console.log(b + " es mayor que " + a) :
   			console.log(a + " y " + b + " son iguales");
}

//ex61_if();

function ex61_ternario() {   
   let a = prompt("Por favor introduzca un numero");
   if (!esNumero(a)) {
   	  console.log(a + "no es un numero");
   	  return;
   }
   let b = prompt("Por favor introduzca otro numero");
   if (!esNumero(b)) {
   	  console.log(b + "no es un numero");
   	  return;
   } 
   (a > b) ? console.log(a + " es mayor que " + b) : 
   			(b > a) ? console.log(b + " es mayor que " + a) :
   			console.log(a + " y " + b + " son iguales");
}

//ex61_ternario();

function ex61_switch() {   
    let a = prompt("Por favor introduzca un numero");
    if (!esNumero(a)) {
   		console.log(a + "no es un numero");
   		return;
    }
    let b = prompt("Por favor introduzca otro numero");
    if (!esNumero(b)) {
   		console.log(b + "no es un numero");
   		return;
    } 
	switch(true) {
   		case a > b :
   			console.log(a + " es mayor que " + b);
   		    break;
   		case b > a :
   			console.log(b + " es mayor que " + a);
   			break;
   		default:
   			console.log(a + " y " + b + " son iguales");
	}
}

//ex61_switch();

function ex62_if () {
    let a = Number(prompt("Por favor introduzca un numero"));
    let b = Number(prompt("Por favor introduzca otro numero"));
    let c = Number(prompt("Por favor introduzca un tercer numero"));
    
    if (isNaN(a) || isNaN(b) ||isNaN(c)) {
   	    console.log("Por favor, introduzca numeros");
   	    return;
    } 

   if (a >= b && a >= c) {
      console.log(a + " es el mayor");
   } else if (b >= c) {
      console.log(b + " es el mayor");
   } else {
      console.log(c + " es el mayor");
   } 
}

//ex62_if();
function ex62_mayor_ternario (a,b,c) {
	(a > b && a > c) ? console.log(a + " es el mayor") : (b > c) ? console.log(b + " es el mayor") : console.log(c + " es el mayor");
}	

function ex62_ternario () {
    let a = Number(prompt("Por favor introduzca un numero"));
    let b = Number(prompt("Por favor introduzca otro numero"));
    let c = Number(prompt("Por favor introduzca un tercer numero"));
    
    if (isNaN(a) || isNaN(b) ||isNaN(c)) {
   	    console.log("Por favor, introduzca numeros");
   	    return;
    } 
    ex62_mayor_ternario (a,b,c);
	//(a > b && a > c) ? console.log(a + " es el mayor") : (b > c) ? console.log(b + " es el mayor") : console.log(c + " es el mayor");
}

//ex62_ternario();

function ex71 () {
   const claveSecreta = "Fictizia mola mucho";
   var clave;
   var intentos = 3;
   do {
      clave = prompt("Introduzca clave: ");
      if (clave === claveSecreta) {
         break;
      }
      intentos--
      if (intentos == 0) {
         alert("3 intentos consumidos");
      }
   } while (intentos > 0);
}

ex71();

function ex7x () {
   var arr = [
      {nombre: "JavaScript", extension: ".js"},
      {nombre: "TypeScript", extension: ".js"},
      {nombre: "JavaScript", extension: ".js"}
   ]
}

ex7x();





