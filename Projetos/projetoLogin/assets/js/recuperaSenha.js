const formRecupera = document.getElementById("recover-form");
const emailField = document.getElementById("email-field").toLowerCase();
const emailInput = document.getElementById("recover-email").value;
const sendCodeButton = document.getElementById("send-code-button");
const codeEntrySection = document.getElementById("code-entry-section");
const verificationCodeInput = document.getElementById("verification-code").value;
const newPasswordInput = document.getElementById("login-pass").value;
const confirmNewPasswordInput = document.getElementById("cadastro-pass-confirm").value;
const verifyCodeButton = document.getElementById("verify-code-button");
const modalError = document.getElementById("modal-error");
const messageError = document.getElementById("error-message");
const loginInfoText = document.querySelector(".login__info-text");

function messageErrorDisplay(message) {
    modalError.style.display = "block";
    messageError.textContent = message;
}

messageErrorDisplay();