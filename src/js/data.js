window.sendVisit = (visitData) => {
  databaseRef = firebase.database().ref(`Visitantes/${visitData.userId}-${visitData.Nombre}`);
  console.log(databaseRef);
  // databaseRef.set(visitData);
  swal({
      title: '¡Anotado!',
      text: 'A continuación, necesitamos una foto',
      icon: 'success',
      buttons: true,
    })
    .then(buttons => {
      if (buttons === true) {
        return viewPhoto();
        // location.href = '../index.html';
      }
    });
};

const viewPhoto = () => {
  form.style.display = 'none';
  sectionPhoto.style.display = 'block';
  goPh.style.display = 'none';
};
