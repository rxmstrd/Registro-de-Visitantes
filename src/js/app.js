// llamado de dom y evento para cambiar de vista
let btnRegister = document.getElementById('register');

btnRegister.addEventListener('click', event => {
  location.href = 'views/registerCorreo.html';
});