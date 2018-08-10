// *********************************************************************
// Llamados al dom para registrar visitantes y enviar correo.
const name = document.getElementById('name');
const secondName = document.getElementById('secondName');
const subject = document.getElementById('subject');
const email = document.getElementById('email');
const enviar = document.getElementById('enviar');
const comeback = document.getElementById('comeback');
const comeback2 = document.getElementById('comeback2');
const seguir = document.getElementById('seguir');

// función que validar no ingreso de <>
// const datareview = () => {
// };

// funcion que guarda los datos del usuario
const userVisit = () => {
  let date = new Date();
  let userDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}-${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

  if (name.value && secondName.value && subject.value && email.value) {
    userData = {
      userId: userDate,
      Nombre: name.value,
      Apellido: secondName.value,
      Asunto: subject.value,
      correo: email.value,
    };
    sendVisit(userData);
  } else {
    swal('Faltan campos por llenar');
  }
};

// boton que acciona la funcion UserVisit
enviar.addEventListener('click', userVisit);

// boton que cambia de pagina
seguir.addEventListener('click', event => location.href = 'employees.html');

// boton que redirecciona de register al inicio
comeback.addEventListener('click', event => location.href = '../index.html');
