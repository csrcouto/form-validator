const form = document.getElementById("form");
const usuario = document.getElementById("usuario");
const email = document.getElementById("email");
const senha = document.getElementById("senha");
const senha2 = document.getElementById("senha2");

// show input error message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    const small = formControl.querySelector("small");
    small.innerText = message;
};

// show success outline
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
};

// check email is valid
function isValidEmail(email) {
    const regexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regexp.test(String(email).toLowerCase());
};

// event listeners
form.addEventListener("submit", function (e) {
    e.preventDefault();
    (usuario.value === "") ? (showError(usuario, "Usuário inválido")) : (showSuccess(usuario));
    (!isValidEmail(email.value)) ? (showError(email, "Email inválido")) : (showSuccess(email));
    (senha.value === "") ? (showError(senha, "Senha inválida")) : (showSuccess(senha));
    (senha2.value === "") ? (showError(senha2, "Confirmação de senha inválida")) : (showSuccess(senha2));
});
