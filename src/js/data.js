let btnPhoto = document.getElementById('btnPhoto');

btnPhoto.addEventListener('click', event =>{
  location.href = 'employees.html';
});

databaseRef = firebase.database();

userId = 1;

databaseRef.ref(`Visitantes/${userId}`);

console.log(databaseRef);


// FUNCION PARA LA SELECCION DE EMPLEADOS
