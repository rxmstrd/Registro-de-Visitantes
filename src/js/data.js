
window.sendVisit = (visitData) => {
  databaseRef = firebase.database().ref(`Visitantes/${visitData.Nombre}-${visitData.userId}`);
  databaseRef.set(visitData);
  location.href = 'employees.html';
};

// FUNCION PARA LA SELECCION DE EMPLEADOS
