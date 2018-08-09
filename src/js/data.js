
const sendVisit = () => {
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

const adduser = (usuario) => {
  let database = firebase.database();
  let user = {
    uid: usuario.uid,
    name: usuario.displayName,
    mail: usuario.email,
    photo: usuario.photoURL
  };
  firebase.database().ref(`user/${usuario.uid}`).set(user);
};
