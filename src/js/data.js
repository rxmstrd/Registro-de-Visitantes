window.sendVisit = (visitData) => {
  databaseRef = firebase.database().ref(`Visitantes/${visitData.userId}-${visitData.Nombre}`);
  databaseRef.set(visitData);
  swal({
      // title: '¡Anotado!',
      // text: 'Se enviara un email a tu anfitrion para avisar de tu llegada espera en recepción',
      title: '¡Anotado!',
      text: 'A continuación, necesitamos una foto',
      icon: 'success',
      buttons: true,
      dangerMode: true,
    })
    .then(buttons => {
      if (buttons === true) {
        return viewPhoto();
        // location.href = '../index.html';
      }
    });
  // window.onload;
};

const viewPhoto = () => {
  form.style.display = 'none';
  sectionPhoto.style.display = 'block';
  goPh.style.display = 'none';
};