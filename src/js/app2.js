// registro de visitas
// llamdos al dom
const getHome = document.getElementById('get-home');
const adminName = document.getElementById('admin-name');
const visitTable = document.getElementById('visit-table');

// funcion observador
firebase.auth().onAuthStateChanged((usuario) => {
  let user = firebase.auth().currentUser;
  if (user !== null) {
    console.log(user.email);
    getVisits(user);

  } else {
    // User is signed out.
    firebase.auth().signOut();
    console.log('sin usuario');
    location.href = '../index.html';
  }
});

const getVisits = (user) => {
  const email = user.email;
  adminName.innerHTML = email;
  databaseRef = firebase.database().ref('Visitantes');
  databaseRef.on('value', (snapshot) => {
    const data = snapshot.val();
    let number = 0;
    for (var key in data) {
      const dataVisit = data[key];
      let visitName = dataVisit.Nombre;
      let visitLastName = dataVisit.Apellido;
      let visitEmail = dataVisit.correo;
      let visitSubject = dataVisit.Asunto;
      let visitId = dataVisit.userId;
      // console.log(dataVisit);
      number += 1;
      visitTable.innerHTML += `
      <tr>
        <td>${number}</td>
        <td>${visitName}</td>
        <td>${visitLastName}</td>
        <td>${visitEmail}</td>
        <td>${visitSubject}</td>
        <td>Terminal1</td>
        <td>${visitId}</td>
      </tr>
      `;
    }
  });
};

const outUser = () => {
  firebase.auth().signOut();
  location.href = '../index.html';
};
// boton que redirecciona de employees al inicio
getHome.addEventListener('click', outUser);
