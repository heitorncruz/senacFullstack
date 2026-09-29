// GUARDANDO FORMS DO CADASTRO

// const formCadastro = document.getElementsByClassName("login__form")
const formCadastro = document.querySelector(".login__form");

// COLOQUE UM ESCUTADOR DE EVENTO NO FORM DO CADASTRO COM O EVENTO submit

formCadastro.addEventListener("submit", (event) => {
    event.preventDefault();

    const emailCadastro = document.getElementById("cadastro-email").value.toLowerCase();

    // O VALOR DA SENHA CADASTRADA 

    const passwordCadastro = document.getElementById("login-pass").value;

    // O VALOR DA CONFIRMACAO DA SENHA CADASTRADA
    const passwordConfirm = document.getElementById("cadastro-pass-confirm").value;

    // FAZER A VALIDACAO DE SENHA 
    if(passwordCadastro===passwordConfirm) {
        // SALVAR EM LOCAL STORAGE O EMAIL CADASTRADO
        localStorage.setItem("email_cadastrado", emailCadastro);
        // SALVAR EM LOCAL STORAGE A SENHA CADASTRADA
        localStorage.setItem("senha_cadastrada", passwordConfirm);

        alert("Cadastro realizado com sucesso!")

        // DIRECIONAR PARA A PAGINA DE LOGIN 
        window.location.href = "../index.html"
    }else {
        alert("Senhas diferentes, corrija.")
    }
});





