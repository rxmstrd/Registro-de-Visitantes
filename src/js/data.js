
window.sendVisit = () => {
  visitData = {
    Nombre: 'Maria',
    Apellido: 'Mendez',
    Correo: 'garciaivonn11@gmail.com'
  };
  userId = 1;
  databaseRef = firebase.database().ref(`Visitantes/${userId}`);
  console.log(databaseRef);
  console.log(visitData);
  databaseRef.set(visitData);
};
sendVisit();


// FUNCION PARA LA SELECCION DE EMPLEADOS
