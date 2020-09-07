//Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAFdXd90R5bF5LLtHMMb4H6m-g40NdmonE",
    authDomain: "first-project-c52e2.firebaseapp.com",
    databaseURL: "https://first-project-c52e2.firebaseio.com",
    projectId: "first-project-c52e2",
    storageBucket: "first-project-c52e2.appspot.com",
    messagingSenderId: "181297313582",
    appId: "1:181297313582:web:304e3177440ca3a849ecbf",
    measurementId: "G-N4YEMQ62Z1"
  };

  firebase.initializeApp(firebaseConfig);
  var fireStore = firebase.fireStore();

  const submitbtn = document.querySelector('.submit');
  let name = document.querySelector('#name');
  let email = document.querySelector('#email');
  let message = document.querySelector('#message');

  const db = fireStore.collection('amalContactForm')

  submitbtn.addEventListener('click', function(){
      let nameInput = name.value;
      let emailInput = email.value;
      let messageInput = message.value;

      db.doc().set({
          Name: nameInput,
          Email: emailInput,
          Message: messageInput
      })
      .then(function(){
          console.log('Data saved')
      })
      .catch(function(error){
          console.log(error)
      })
  })