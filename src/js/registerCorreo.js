// *********************************************************************
// Llamados al dom para registrar visitantes y enviar correo.
const name = document.getElementById('name');
const secondName = document.getElementById('secondName');
const subject = document.getElementById('subject');
const email = document.getElementById('email');

// funcion que guarda los datos del usuario
const userVisit = () => {
  let date = new Date();
  let userDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}-${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

  userData = {
    userId: userDate,
    Nombre: name.value,
    Apellido: secondName.value,
    Asunto: subject.value,
    correo: email.value,
  };
  sendVisit(userData);
};


// boton que acciona la funcion UserVisit
let enviar = document.getElementById('enviar');
enviar.addEventListener('click', userVisit);
