// Grabs the elements from the HTML document.
const form = document.querySelector("#myForm");
const nameField = document.querySelector("#name");
const emailField = document.querySelector("#email");
const messageField = document.querySelector("#commBox");
const successMessage = document.querySelector("#successMessage");
const nameError = document.querySelector("#nameError");
const emailError = document.querySelector("#emailError");
const messageError = document.querySelector("#messageError");

// The regex for each of the validations.
const nameRegex = /([A-Za-z])\w+/g;
const emailRegExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

// All of the validation.
nameField.addEventListener("input", (event) => {
    const isValid = nameField.value.length != 0 || nameRegex.test(nameField.value);
    if (isValid) {
        nameError.textContent = "";
        nameError.className = "error";
    } else {
        nameError.textContent = "Please type a valid name.";
        nameError.className = "error active";
    }
});

emailField.addEventListener("input", (event) => {
    const isValid = emailRegExp.test(emailField.value);
    if (isValid) {
        emailError.textContent = "";
        emailError.className = "error";
    } else {
        emailError.textContent = "Please type a valid email address.";
        emailError.className = "error active";
    }
});

messageField.addEventListener("input", (event) => {
    const isMessageValid = messageField.value.length != 0;
    if (!isMessageValid) {
        messageError.textContent = "Please type a message.";
        messageError.className = "error active";
    } else {
        messageError.textContent = "";
        messageError.className = "error";
    }
});

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const isNameValid = nameField.value.length != 0 || nameRegex.test(nameField.value);
    const isEmailValid = emailRegExp.test(emailField.value);
    const isMessageValid = messageField.value.length != 0;

    if (isNameValid && isEmailValid && isMessageValid) {
        successMessage.textContent = "The form has been sumbitted successfully."
    }
});