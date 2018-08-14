let btnPhoto = document.getElementById('btnPhoto');

btnPhoto.addEventListener('click', event => {
  location.href = 'employees.html';
});

// INICIO TRABAJO YO
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
  
  let dataUrl = snapshotCanvas.toDataURL();

  // Stop all video streams.
  videoTracks.forEach((track) => {
    track.stop(); 
  });
});

navigator.mediaDevices.getUserMedia({ video: true })
  .then(handleSuccess);
// FIN 