databaseRef = firebase.database();

userId = 1;

databaseRef.ref(`Visitantes/${userId}`);

console.log(databaseRef);


// const sendPerfilFirebase = (databaseRef, userDescriptionFb) => {
//     databaseRef.set({
//       AboutMe: userDescriptionFb,
//     });
//     getPerfilFirebase();
//   };