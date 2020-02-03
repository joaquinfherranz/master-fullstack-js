const APP_KEY = 'contactosApp';

const contactosHTML = document.getElementById("contactos");

const contactoHtml = {
  nombre: document.getElementById("nombre"),
  movil: document.getElementById("movil")  
}

const getContactos = (nombre) => {
  return JSON.parse(localStorage.getItem(APP_KEY)) || [];
}

const setContacto = (currContacto) => {
  let contactos = getContactos();
  if (!currContacto.nombre) return;
  let existe = false;
  contactos = contactos.map(contacto=>{
    if (contacto.nombre==currContacto.nombre) {
      existe =true;
      return currContacto;
    } else {
      return contacto;
    }      
  });
  if (!existe) {
    contactos.push(currContacto);
  }
  localStorage.setItem(APP_KEY, JSON.stringify(contactos));
}

const renderContactos = () => {
  //const contactos = getContactos();
  contactosHTML.innerHTML = `
    <ul>
      ${getContactos().map(contacto=>`<li>Nombre: ${contacto.nombre}, Móvil: ${contacto.movil}</li>`).join('')}
    </ul>
  `
}

document.getElementById("guardar").addEventListener("click", () => {
  const contacto = {
    nombre: contactoHtml.nombre.value,
    movil: contactoHtml.movil.value
  }
  setContacto(contacto);
  renderContactos();
  // console.log("contacto:",contacto);
  // console.log("contactos:",getContactos());
});

document.getElementById("recuperar").addEventListener("click", () => {
  renderContactos();
});


document.getElementById("eliminarTodos").addEventListener("click", () => {
  localStorage.removeItem(APP_KEY);
  renderContactos();
})