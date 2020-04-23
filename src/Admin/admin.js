var admin = require('firebase-admin');

var serviceAccount = require('./login-db311-firebase-adminsdk-5xk7f-c0b93b98d0.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://login-db311.firebaseio.com',
});

export default admin;
