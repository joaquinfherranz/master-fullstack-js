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
//<img src="assets/images/avatars/1.jpg" width="80" alt="Profile of Adeline Yong"></img>
const renderContactos = () => {
  const renderContacto = (contacto, index) => `
    <li>
      <a href="#" class="user-avatar">
        <img src="1.jpg" width="80" alt="Profile of Adeline Yong">
      </a>
      <p>
          <a href="">${contacto.nombre}</a>
          <span>Last seen on <i>12th Oct 2014</i></span>
      </p>
      <a class="delete" href="#" data-index=${index}><i class="fa fa-close"></i></a>
    </li>
  `;
//    <li>Nombre: ${contacto.nombre}, Móvil: ${contacto.movil} <input class="recuperar-contacto" type="button" data-index="${index}"></li>
  contactosHTML.innerHTML = `
    <ul class="user-profiles-list-basic">
      ${getContactos()
        .map((contacto,index)=>renderContacto(contacto, index))
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

document.getElementById("recuperarTodos").addEventListener("click", () => {
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
