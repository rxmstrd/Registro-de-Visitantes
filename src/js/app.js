let btnRegister = document.getElementById('register');
let welcome = document.getElementById('welcome');
let contentRegister = document.getElementById('contentRegister');
let selectionEmployee = document.getElementById('selectionEmployee');
let enviar = document.getElementById('enviar');

btnRegister.addEventListener('click', event =>{
    welcome.style.display = 'none';
    contentRegister.style.display = 'block';
});

enviar.addEventListener('click', event =>{
    contentRegister.style.display = 'none';
    selectionEmployee.style.display = 'block';
});
