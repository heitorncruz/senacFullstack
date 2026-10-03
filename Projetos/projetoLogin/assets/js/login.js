




// GUARDANDO FORM DO LOGIN NA CONST
const formLogin = document.querySelector(".login__form")

let tentativas = 0;
// FORM LOGIN ESCUTADOR DE EVENTO 

formLogin.addEventListener("submit", (event) =>{
    event.preventDefault();

    const loginEmail = document.getElementById("login-email").value.toLowerCase();
    const loginSenha = document.getElementById("login-pass").value;

    const emailCadastrado = localStorage.getItem("email_cadastrado");
    const senhaCadastrada = localStorage.getItem("senha_cadastrada");

    if ((loginEmail === emailCadastrado) && (loginSenha === senhaCadastrada)) {
        alert("Login realizado com sucesso!");

        window.location = "pages/telaLogada.html"
    }else {
        alert("Email ou senha incorreto(a)");
        tentativas++;
        alert(`Tentativa ${tentativas}/3`);

        if(tentativas === 3) {
            alert("Senha bloqueada por excesso de tentativas!");
            tentativas=0;

            window.location = "pages/recupera.html"
        }
        
    };


})

    // GUARDANDO EMAIL E SENHAS NAS VARIAVEIS 

    // VALIDACAO DE USUARIO E SENHAS COM O LOGIN