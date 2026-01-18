
const form = document.getElementById('registrationForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const submitBtn = document.getElementById('submitBtn');
const successMessage = document.getElementById('successMessage');


const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');


let isValid = {
    name: false,
    email: false,
    password: false
};

function validateName() {
    const value = nameInput.value.trim();

    if (value === '') {

        nameInput.classList.add('error');
        nameInput.classList.remove('success');
        nameError.classList.add('show');
        isValid.name = false;
    } else {

        nameInput.classList.remove('error');
        nameInput.classList.add('success');
        nameError.classList.remove('show');
        isValid.name = true;
    }

    updateSubmitButton();
}


function validateEmail() {
    const value = emailInput.value.trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(value)) {

        emailInput.classList.add('error');
        emailInput.classList.remove('success');
        emailError.classList.add('show');
        isValid.email = false;
    } else {

        emailInput.classList.remove('error');
        emailInput.classList.add('success');
        emailError.classList.remove('show');
        isValid.email = true;
    }

    updateSubmitButton();
}


function validatePassword() {
    const value = passwordInput.value;

    if (value.length < 6) {

        passwordInput.classList.add('error');
        passwordInput.classList.remove('success');
        passwordError.classList.add('show');
        isValid.password = false;
    } else {

        passwordInput.classList.remove('error');
        passwordInput.classList.add('success');
        passwordError.classList.remove('show');
        isValid.password = true;
    }

    updateSubmitButton();
}


function updateSubmitButton() {

    if (isValid.name && isValid.email && isValid.password) {
        submitBtn.disabled = false;
    } else {
        submitBtn.disabled = true;
    }
}


nameInput.addEventListener('input', validateName);
nameInput.addEventListener('blur', validateName);

emailInput.addEventListener('input', validateEmail);
emailInput.addEventListener('blur', validateEmail);

passwordInput.addEventListener('input', validatePassword);
passwordInput.addEventListener('blur', validatePassword);


form.addEventListener('submit', function (e) {
    e.preventDefault();


    validateName();
    validateEmail();
    validatePassword();

    if (isValid.name && isValid.email && isValid.password) {
        successMessage.classList.add('show');
        form.reset();


        nameInput.classList.remove('success');
        emailInput.classList.remove('success');
        passwordInput.classList.remove('success');



        isValid = { name: false, email: false, password: false };
        updateSubmitButton();


        setTimeout(function () {
            successMessage.classList.remove('show');
        }, 5000);
    }
});