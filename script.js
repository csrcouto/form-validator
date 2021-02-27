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

// check required fields
function checkRequired(inputArray) {
    inputArray.forEach(function(input) {
        if (input.value.trim() === "") {
            showError(input, `${getFieldName(input)} requerido`);
        } else {
            showSuccess(input);
        };
    });
};

// get field name
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase().concat(input.id.slice(1));
};

// event listeners
form.addEventListener("submit", function (e) {
    e.preventDefault();
    checkRequired([usuario, email, senha, senha2]);
});
