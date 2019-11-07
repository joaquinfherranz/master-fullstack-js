// funcion busca letra en frase
function buscar_letra(frase, letra) {
    return frase
        .split('')
        .filter(function(letra_frase){return letra_frase==letra})
        .length; 
}