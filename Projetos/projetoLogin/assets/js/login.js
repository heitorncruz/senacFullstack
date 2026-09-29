// GUARDANDO FORM DO LOGIN NA CONST
const formLogin = document.querySelector(".login__form")


// FORM LOGIN ESCUTADOR DE EVENTO 

formLogin.addEventListener("submit", (event) =>{
    event.preventDefault();

    const loginEmail = document.getElementById("login-email").value;
    const loginSenha = document.getElementById("login-pass").value;

    const email_cadastrado = localStorage.getItem("email_cadastrado")

    if(loginEmail===emailCadastro &&  ) {

    };


})

    // GUARDANDO EMAIL E SENHAS NAS VARIAVEIS 

    // VALIDACAO DE USUARIO E SENHAS COM O LOGIN