const showHidePassword = () => {
    
    const input = document.getElementById("login-pass");
    const iconEye = document.getElementById("login-eye");


    iconEye.addEventListener("click", () => {
        if (input.type === "password") {
            input.type = "text";
            iconEye.classList.remove("ri-eye-off-line");
            iconEye.classList.add("ri-eye-line");
        } else {
 
            input.type = "password";
            iconEye.classList.remove("ri-eye-line");
            iconEye.classList.add("ri-eye-off-line");
        }
    });

};       

    const inputConfirm = document.getElementById("cadastro-pass-confirm");
    const iconEyeConfirm = document.getElementById("login-eye-confirm");

    iconEyeConfirm.addEventListener("click", () => {
        if (inputConfirm.type === "password"){
            inputConfirm.type = "text";
            iconEyeConfirm.classList.remove("ri-eye-off-line");
            iconEyeConfirm.classList.add("ri-eye-line");
        } else {
            inputConfirm.type = "password";
            iconEyeConfirm.classList.remove("ri-eye-line")
            iconEyeConfirm.classList.add("ri-eye-off-line")
        }
    })






showHidePassword();



// const mostrar = input.type === "password";
 
//         input.type = mostrar ? "text" : "password";
 
//         iconEye.classList.toggle("ri-eye-line", mostrar)
//         iconEye.classList.toggle("ri-eye-off-line", !mostrar)