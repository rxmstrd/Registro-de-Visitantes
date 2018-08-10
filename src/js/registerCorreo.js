// *********************************************************************
// Llamados al dom para registrar visitantes y enviar correo.
const name = document.getElementById('name');
const secondName = document.getElementById('secondName');
const subject = document.getElementById('subject');
const email = document.getElementById('email');
const enviar = document.getElementById('enviar');
const comeback = document.getElementById('comeback');
const comeback2 = document.getElementById('comeback2');

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
enviar.addEventListener('click', userVisit);

// boton que redirecciona de register al inicio
comeback.addEventListener('click', event => location.href = '../index.html');


