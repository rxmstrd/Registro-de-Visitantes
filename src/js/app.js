// index

// llamado de dom 
const btnRegisterV = document.getElementById('register-visit');
const singIn = document.getElementById('sing-in');
const emailAdmin = document.getElementById('email-admin');
const password = document.getElementById('password-admin');

// boton para entrada de visitas
btnRegisterV.addEventListener('click', event => {
  location.href = 'views/registerCorreo.html';
});

// funcion singin administradores
const singInAdmin = () => {
  const emailAdminV = emailAdmin.value;
  const passwordV = password.value;
  if (!firebase.auth().currentUser) {
    firebase.auth().signInWithEmailAndPassword(emailAdminV, passwordV)
      .then(event => location.href = 'views/employees.html')
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
  } else {
    firebase.auth().signOut();
  }
};
// boton para entrada de administradores
singIn.addEventListener('click', singInAdmin);
