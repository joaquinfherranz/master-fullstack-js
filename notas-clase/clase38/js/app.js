const APP_KEY = 'contactosApp';

const contactosHTML = document.getElementById("contactos");

const contactoHtml = {
  nombre: document.getElementById("nombre"),
  movil: document.getElementById("movil")  
}

const getCurrentContacto = () => {
  return {
    nombre: contactoHtml.nombre.value,
    movil: contactoHtml.movil.value
  }
}

const getContactos = () => {
  return (JSON.parse(localStorage.getItem(APP_KEY)) || [])
    .sort((a,b)=>a.nombre<b.nombre?-1:1);
}

const setContacto = () => {
  const currContacto = getCurrentContacto();
  if (!currContacto.nombre) return;
  let contactos = getContactos();
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

const removeContacto = () => {
  const currContacto = getCurrentContacto();
  if (!currContacto.nombre) return;
  let contactos = 
    getContactos()
      .filter(contacto=>contacto.nombre!=currContacto.nombre);
  localStorage.setItem(APP_KEY, JSON.stringify(contactos));
}

const renderContactos = () => {
  contactosHTML.innerHTML = `
    <ul>
      ${getContactos()
        .map((contacto,index)=>`<li>Nombre: ${contacto.nombre}, Móvil: ${contacto.movil} <input class="recuperar-contacto" type="button" data-index="${index}"></li>`)
        .join('')}
    </ul>
  `;
  Array.from(document.getElementsByClassName("recuperar-contacto")).map(item=>item.addEventListener("click", (e) => {
    const selectedIndex = e.currentTarget.getAttribute('data-index');
    const selectedContacto = 
      getContactos()
      .filter((contacto,index)=>index==selectedIndex)[0];
    contactoHtml.nombre.value=selectedContacto.nombre;
    contactoHtml.movil.value=selectedContacto.movil;
  }));
}

document.getElementById("guardar").addEventListener("click", () => {
  setContacto();
  renderContactos();
});

document.getElementById("recuperar").addEventListener("click", () => {
  renderContactos();
});

document.getElementById("eliminar").addEventListener("click", () => {
  removeContacto();
  renderContactos();
});

document.getElementById("eliminarTodos").addEventListener("click", () => {
  localStorage.removeItem(APP_KEY);
  renderContactos();
});

// Array.from(document.getElementsByClassName("recuperar-contacto")).map(item=>item.addEventListener("click", (e) => {
//   console.log('e',e);
// }));