
window.sendVisit = (visitData) => {
  console.log(visitData);
  databaseRef = firebase.database().ref(`Visitantes/${visitData.userId}-${visitData.Nombre}`);
  databaseRef.set(visitData);
  // viewEmployes();  
  // location.href = 'employees.html';
  // swal('Se enviara un email a tu anfitrion para avisar de tu llegada, presiona Continuar');
};


// FUNCION PARA LA SELECCION DE EMPLEADOS
