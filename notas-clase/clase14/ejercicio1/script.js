//1 - Realiza una pagina web que muestre la cuenta 
// atrás para terminar el master en días, horas, minutos
// y segundos.

//Objetivos Adicionales:
// - Además debería de seguir actualizando la cuenta 
//   atrás de manera dinámica.
// - Los datos horarios siempre deben mostrarse con dos 
//   dígitos, añadiendo un cero a la izquierda cuando 
//   sea necesario.

// El master termina el 29/06/2020 a las 19:00
const endMasterMoment = new Date (2020, 5, 29, 19);

const oneSecond = 1000; // milliseconds
const oneMinute = oneSecond * 60;
const oneHour = oneMinute * 60;
const oneDay = oneHour * 24;
const pending = document.getElementById("pending");

const formatTime = function (time) {
  return (time < 10 ? '0' : '') + time; 
}
const renderPending = function() {
  const now = new Date();
  let diff = endMasterMoment.getTime() - now.getTime(); // millisecons
  
  const days = diff < 0 ? 0 : parseInt(diff/oneDay);
  diff %= oneDay; 
  const hours = diff < 0 ? 0 : parseInt(diff/oneHour);
  diff %= oneHour;
  const minutes = diff < 0 ? 0 : parseInt(diff/oneMinute);
  diff %= oneMinute;
  const seconds = diff < 0 ? 0 : parseInt(diff/oneSecond);

  pending.innerHTML=`
    <b>${days}</b> día${days!=1?"s":""},
    <b>${formatTime(hours)}</b> hora${hours!=1?"s":""},
    <b>${formatTime(minutes)}</b> minuto${minutes!=1?"s":""} y
    <b>${formatTime(seconds)}</b> segundo${seconds!=1?"s":""}    
    `;
}

window.setInterval(renderPending,1000);

renderPending();