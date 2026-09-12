const form = document.getElementById("bookingForm");

const nameInput = document.getElementById("name");
const phoneInput = document.getElementById("phone");
const emailInput = document.getElementById("email");
const dateInput = document.getElementById("date");
const timeInput = document.getElementById("time");

const successMessage =
    document.getElementById("successMessage");


/* DATE */

const today = new Date()
    .toISOString()
    .split("T")[0];

dateInput.setAttribute("min", today);


/* FORM VALIDATION */

form.addEventListener("submit", function(event) {

    event.preventDefault();

    let valid = true;


    // Clear old errors

    document.querySelectorAll(".form-group small")
        .forEach(function(error) {

            error.textContent = "";

        });


    // Name

    if (nameInput.value.trim() === "") {

        document.getElementById("nameError")
            .textContent = "Please enter your full name.";

        valid = false;
    }


    // Phone

    const phonePattern =
        /^[0-9+\-\s]{10,15}$/;

    if (!phonePattern.test(phoneInput.value.trim())) {

        document.getElementById("phoneError")
            .textContent = "Please enter a valid phone number.";

        valid = false;
    }


    // Email

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(emailInput.value.trim())) {

        document.getElementById("emailError")
            .textContent = "Please enter a valid email.";

        valid = false;
    }


    // Date

    if (dateInput.value === "") {

        document.getElementById("dateError")
            .textContent = "Please select a date.";

        valid = false;
    }


    // Time

    if (timeInput.value === "") {

        document.getElementById("timeError")
            .textContent = "Please select a time.";

        valid = false;
    }


    // Success

    if (valid) {

        successMessage.style.display = "block";

        form.reset();

        dateInput.setAttribute("min", today);

        setTimeout(function() {

            successMessage.style.display = "none";

        }, 5000);

    }

});