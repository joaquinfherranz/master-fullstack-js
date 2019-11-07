var objeto1 = {
    propiedad1: "hola",
    propiedad2: 2,
    propiedad3: false,
    propiedad4: [true,2,5, "..."],
    propiedad5: {
        dato: "más datos..."
    },
    metodo: function(){
        console.log("hola");
    }
}
function mostrar_propiedades(objeto, nombreObjeto) {
   var resultado = "";
   for (var i in objeto) {
      resultado += nombreObjeto + "." + i + " = " + objeto[i] + "\n";
   }
   return resultado;
}

var res = mostrar_propiedades(objeto1, "objeto1");
document.getElementById("resultado").innerHTML = res;

function sumatorio() {
    var suma = 0;
    for (var i=0;i<arguments.length;i++){
        suma += arguments[i];
    }
}

function suma() {
    
}