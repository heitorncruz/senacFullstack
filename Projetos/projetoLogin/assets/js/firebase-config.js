
const firebaseConfig = {
    apiKey: "AIzaSyA87iIV6shO8wEfgG4IldS1bmZICMRxJ1k",
    authDomain: "projetologinv1.firebaseapp.com",
    projectId: "projetologinv1",
    storageBucket: "projetologinv1.firebasestorage.app",
    messagingSenderId: "1019423479509",
    appId: "1:1019423479509:web:a23283a3aa513ca76ff45c",
    measurementId: "G-FKQ7933BYD"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 
  const auth = firebase.auth();
  const googleProvider = new firebase.auth.GoogleAuthProvider();

//   import { auth, googleProvider } from "";

  const googleLoginButton = document.getElementById("google-login");

  googleLoginButton.addEventListener ("click", () => {
    
    auth.signInWithPopup(googleProvider)
        .then((result) => {
            const user = result.user;
            localStorage.setItem("usuario_google", JSON.stringify({nome: user.displayName, email: user.email}));
            alert(`Bem-vindo, ${user.displayName}!`);
            window.location = "pages/telaLogada.html"
        
        }).cath((error) => alert(`Erro ao entrar com Google ${error.message}`));

  });