// Creating a function called formValidation.
function formValidation() {
    // Defining regex validation for easier access.
    const nameRegex = /^[a-zA-Z]+ [a-zA-Z]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const ageRegex = /^(?:0[01][0-8]|105|[1-9][0-9]?)$/;
    const form = document.querySelector("#form");

    // Adds an event listener for the submit button on the form.
    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevents default submission of the form.

        // Accessing the form values.
        let formName = document.forms["infoForm"]["fname"].value;
        let formEmail = document.forms["infoForm"]["email"].value;
        let formAge = document.forms["infoForm"]["age"].value;
        let isValid = true;

        // All validation checks.
        if (formName === "") {
            alert("You must fill out your name.");
            return false;
        } else if (!nameRegex.test(formName)) {
            alert("Please enter your first and last name.");
            isValid = false;
        }

        if (formEmail === "") {
            alert("You must enter your email.");
            return false;
        } else if (!emailRegex.test(formEmail)) {
            alert("Email format is invalid.");
            isValid = false;
        }

        if (formAge === "") {
            alert("You must enter your age.");
            return false;
        } else if (!ageRegex.test(formAge)) {
            alert("Age format is invalid.");
            isValid = false;
        }

        if (isValid) {
            alert("Submission completed successfully!");
            document.querySelector("#form").reset();
        }
    });
};

formValidation();