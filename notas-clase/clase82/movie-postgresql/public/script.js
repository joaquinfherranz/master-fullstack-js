// JS para la vista cliente
const buscar = document.getElementById('getFilm');

buscar.addEventListener('click', ()=>{
  const name = document.getElementById('nombre');
  window.location.href = '/create/'+name.value;
})