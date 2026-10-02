const formRecupera = document.getElementById("recover-form");
const emailField = document.getElementById("email-field");
const emailInput = document.getElementById("recover-email");
const sendCodeButton = document.getElementById("send-code-button");
const codeEntrySection = document.getElementById("code-entry-section");
const verificationCodeInput = document.getElementById("verification-code");
const newPasswordInput = document.getElementById("login-pass");
const confirmNewPasswordInput = document.getElementById("cadastro-pass-confirm");
const verifyCodeButton = document.getElementById("verify-code-button");
const modalError = document.getElementById("modal-error");
const messageError = document.getElementById("error-message");
const loginInfoText = document.querySelector(".login__info-text");


let generateCode = "";

function messageErrorDisplay(message) {
    modalError.style.display = "block";
    messageError.textContent = message;
}

// FUNCAO PARA GERAR CODIGO ALEATORIO (6 DIGITOS)

function generateRandomCode() {
    return Math.floor(100000 + Math.random()*900000).toString();
}


// Ouvinte de evento para o botão "Enviar Código"

sendCodeButton.addEventListener("click", (event) => {
    event.preventDefault()
    modalError.style.display = "none";

    const emailRecover = emailInput.value;


    if (!emailRecover) {
        messageErrorDisplay("Digite um email válido!");
        return;
    }

    const emailCadastrado = localStorage.getItem("email_cadastrado")

    if (emailRecover.toLowerCase() === emailCadastrado) {
        generateCode = generateRandomCode()
        localStorage.setItem("codigoGerado", generateCode);

        codeEntrySection.style.display="block";
        emailField.style.display = "none";
        sendCodeButton.style.display = "none";
        
        

        loginInfoText.innerHTML = `Código enviado para o email <b>${emailRecover}</b>. O código é: <b>${generateCode}</b>`;
        
        loginInfoText.style.fontSize = "0.8rem"
        
    } else {

        messageErrorDisplay("Se um e-mail com este endereço for encontrado, um código de recuperação será enviado para ele.")
    }

})

// Ouvinte de evento para o botão "Redefinir senha"
formRecupera.addEventListener("submit", (event) => {
    event.preventDefault();

    modalError.style.display = "none";

    const enteredCode = verificationCodeInput.value;
    const newPassword = newPasswordInput.value;
    const confirmNewPassword = confirmNewPasswordInput.value;

    const codigoGeradoLS = localStorage.getItem("codigoGerado");

    if (!enteredCode || !newPassword || !confirmNewPassword) {
        messageErrorDisplay(`
            Por favor, preencha todos os campos: Código de verificação, Nova Senha, e Confirma Nova Senha`);
        return;
    }

    if (newPassword !== confirmNewPassword) {
        messageErrorDisplay ("Essas senhas não coincidem!");
        return;
    }

    if (codigoGeradoLS === enteredCode) {

        localStorage.setItem("senha_cadastrada", newPassword);
        messageErrorDisplay ("Senha redefinida com sucesso! Você já pode fazer login com sua nova senha.");

        localStorage.removeItem("codigoGerado")
        
        setTimeout(() => {
            window.location.href = "../index.html"
        }, 3000);
        
    } else {
        messageErrorDisplay ("O código gerado não coincide!")
    }



});

