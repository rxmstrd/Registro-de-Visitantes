window.sendVisit = (visitData) => {
  databaseRef = firebase.database().ref(`Visitantes/${visitData.userId}-${visitData.Nombre}`);
  // databaseRef.set(visitData);
  // viewEmployes();  
  // location.href = 'employees.html';
  // swal('Se enviara un email a tu anfitrion para avisar de tu llegada, presiona Continuar');
};


// TRABAJO DE DIANA
// FUNCION PARA LA SELECCION DE EMPLEADOS
document.addEventListener('DOMContentLoaded', () => {
  getData();
}, false);
const convertToArray = (data) => {
  return Object.values(data);
};
window.getData = () => {
  const url = 'https://api.myjson.com/bins/bisz0';
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      const arrayEmployees = convertToArray(data);
      listeners(arrayEmployees);
      drawEmployees(arrayEmployees);
    })
    // TEXTO QUE IMPRIME EL ERROR
    .catch(err => console.log('Error', err.message));
};
const drawEmployees = (array) => {
  console.log(array);
  const containeremployees = document.getElementById('employees-list');
  let template = '';
  array.forEach((employees) => {
    // console.log(employees);
    template += `<article class="item-employees">
              <div class="col s12 m12">
                  <div class="card horizontal">
                      <div class="card-image">
                          <div class="card-stacked">
                              <div class="card-content">
                  <p>${employees.nombre}</p>
                  <p>${employees.Apellido}</p>
                  <p>${employees.empresa}</p>
                  <button id="btnEnviar" class="offset-8 col-2 btn btn-dark">Enviar</button>
                              </div>
                          </div>
                      </div>
                  </div>
           </article>`;
  });
  containeremployees.innerHTML = template;
};
const listeners = (array) => {
  const search = document.getElementById('search');
  search.addEventListener('keyup', () => {
    if (search.value.trim().length >= 0) {
      const searching = search.value.toLowerCase();
      const filteredEmployees = array.filter((employees) => {
        return employees.nombre.toLowerCase().indexOf(searching) >= 0;
      });      
      drawEmployees(filteredEmployees);
    }
  });
};
// funcion foto
let player = document.getElementById('player');
let snapshotCanvas = document.getElementById('snapshot');
let captureButton = document.getElementById('capture');
let videoTracks;
let handleSuccess = (stream) => {
  // Attach the video stream to the video element and autoplay.
  player.srcObject = stream;
  videoTracks = stream.getVideoTracks();
};
captureButton.addEventListener('click', event => {
  let context = snapshot.getContext('2d');
  // Draw the video frame to the canvas.
  context.drawImage(player, 0, 0, snapshotCanvas.width,
    snapshotCanvas.height);
  // Stop all video streams.
  videoTracks.forEach((track) => {
    track.stop(); 
  });
});
navigator.mediaDevices.getUserMedia({ video: true })
  .then(handleSuccess);
// FIN TRABAJO DIANA
