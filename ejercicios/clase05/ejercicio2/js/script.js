// 2 - Diseña un algoritmo para calcular el porcentaje de hombres y mujeres en nuestro curso.

// Trucos:
// Calcular porcentajes (segmento*100)/total

function porcentajes(numeroChicos, numeroChicas) {
  let total = numeroChicos + numeroChicas;
  let porcentajeChicos = (numeroChicos * 100) / total; 
  let porcentajeChicas = (numeroChicas * 100) / total;
  console.log (`% de chicos = ${porcentajeChicos.toFixed(2)}`);
  console.log (`% de chicas = ${porcentajeChicas.toFixed(2)}`);
}

porcentajes(7,2);