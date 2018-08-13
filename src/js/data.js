window.sendVisit = (visitData) => {
  databaseRef = firebase.database().ref(`Visitantes/${visitData.userId}-${visitData.Nombre}`);
  databaseRef.set(visitData);
  swal({
    title: '¡Anotado!',
    text: 'Se enviara un email a tu anfitrion para avisar de tu llegada espera en recepción',
    icon: 'success',
    button: 'Terminar',
  });
  window.onload;
};
