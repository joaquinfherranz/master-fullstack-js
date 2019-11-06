const CLAVE_ADMIN = "fictiziaMola";
const tipoUsuario = {
    ADMIN: "admin",
    USUARIO: "usuario"
};
const mensagesError = {
    CONTRSENA_ERRONEA: "ERROR - Contraseña Erronea!",
    USUARIO_EXISTE: "ERROR - El usuario ya existe!"
};

let maquinaExpendedora = {
    admin: {
        secreto: CLAVE_ADMIN
    },
    herramientas: {
        esUsuario: function(usuario){
            return clientes.filter(cliente=>cliente.usuario == usuario).length > 0;
        }
    },
    gestionClientes: {
        agregar: function(clave, cliente){
            //return (clave==CLAVE_ADMIN) ? (clientes.push(cliente), true) : false; 
            if (clave!=CLAVE_ADMIN) {
                return {ok:false, mensajeError:mensagesError.CONTRSENA_ERRONEA};
            }
            return {ok:true, mensajeError:null};
        }
    }
};
let productos = [];
// Demo Cliente:
let clientes = [
    {
        // admin
        nombre: "Ulises Gascón",
        usuario: "ulises",
        pass: "pass",
        tipo: tipoUsuario.ADMIN,
        presupuesto: 1000,
        gasto: []
    }, {
        nombre: "Alejandro Reyes",
        usuario: "alejandro",
        pass: "pass2",
        tipo: tipoUsuario.USUARIO,
        presupuesto: 100,
        gasto: []
    }
];

let agregarCliente = maquinaExpendedora.gestionClientes.agregar;

// (function arrancar(){
//     agregarCliente(CLAVE_ADMIN, 
//         {
//             nombre: "Ulises Gascón",
//             usuario: "ulises",
//             pass:"pass",
//             tipo
//         });
//     agregarCliente(CLAVE_ADMIN, {nombre: "Ulises", usuario: "ulises", pass:"pwulises"});
// })();

// Testeando esUsuario:
console.assert(maquinaExpendedora.herramientas.esUsuario("ulises"), "ERROR - ulises debe ser usuario"); // true
console.assert(!maquinaExpendedora.herramientas.esUsuario("yo mismo"), "ERROR - yo mismo NO es un usuario"); // false

// Testeando agregar:
let respuesta = {};

respuesta = agregarCliente(); // ERROR - Contraseña Erronea!
console.assert(!respuesta.ok && respuesta.mensajeError==mensagesError.CONTRSENA_ERRONEA, respuesta.mensajeError);

respuesta = agregarCliente("hola"); // ERROR - Contraseña Erronea!
console.assert(!respuesta.ok && respuesta.mensajeError==mensagesError.CONTRSENA_ERRONEA, respuesta.mensajeError);

respuesta = agregarCliente("hola"); // ERROR - Contraseña Erronea!
console.assert(!respuesta.ok && respuesta.mensajeError==mensagesError.CONTRSENA_ERRONEA, respuesta.mensajeError);

respuesta = agregarCliente("fictiziaMola", {
    usuario: "ulises"
}); // ERROR - El usuario ya existe!
console.assert(!respuesta.ok && respuesta.mensajeError==mensagesError.USUARIO_EXISTE, respuesta.mensajeError);

// maquinaExpendedora.gestionClientes.agregar("fictiziaMola", {
//     usuario: "ulises2",
//     presupuesto: 1000
// }); // ERROR - Faltan datos! 
// maquinaExpendedora.gestionClientes.agregar("fictiziaMola", {
//     usuario: "ulises2",
//     presupuesto: 1000,
//     tipo: "admin",
//     pass: "pass2",
//     nombre: "Ulises2"
// }); // usuario Agregado con exito