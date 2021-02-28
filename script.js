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
}

// show success outline
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

// check email is valid
function checkEmail(input) {
    const regexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regexp.test(String(input.value).trim().toLowerCase())) {
        showSuccess(input);
    } else {
        showError(input, "Email inválido");
    }
}

// check required fields
function checkRequired(inputArray) {
    inputArray.forEach(function(input) {
        (input.value.trim() === "") ? (showError(input, `${getFieldName(input)} requerido`)) : (showSuccess(input));
    });
}

// check input length
function checkLength(input, min, max) {
    const inputLength = String(input.value).length;
    if (inputLength >= min && inputLength <= max) {
        showSuccess(input);
    } else {
        showError(input, `${getFieldName(input)} deve ter entre ${min} e ${max} caracteres`)
    }
}

// check passwords match
function checkPasswordsMatch(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, "Senhas não conferem");
    }
}

// get field name
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase().concat(input.id.slice(1));
}

// event listeners
form.addEventListener("submit", function(e) {
    e.preventDefault();
    checkRequired([usuario, email, senha, senha2]);
    checkLength(usuario, 3, 15);
    checkEmail(email);
    checkLength(senha, 8, 12);
    checkPasswordsMatch(senha, senha2);
});
