// Llamados al dom para registrar visitantes y enviar correo.
const name = document.getElementById('name');
const secondName = document.getElementById('secondName');
const subject = document.getElementById('subject');
const email = document.getElementById('email');

// llamados dianita bebé
let btnRegister = document.getElementById('register');

btnRegister.addEventListener('click', event => {
  location.href = 'views/registerCorreo.html';
});