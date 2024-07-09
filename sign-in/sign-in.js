// Sign in form validation
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const inputs = form.querySelectorAll("input");

    inputs.forEach((input, index) => {
        input.addEventListener("keydown", function (event) {
            if (event.key === "Enter") {
                event.preventDefault();
                let nextInput = inputs[index + 1];
                if (nextInput) {
                    nextInput.focus();
                } else {
                    form.querySelector("button[type='submit']").focus();
                }
            }
        });
    });

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        let isValid = true;

        inputs.forEach(input => {
            const errorElement = input.nextElementSibling;
            if (input.value.trim() === "") {
                errorElement.textContent = ${input.placeholder} is required.;
                isValid = false;
            } else {
                errorElement.textContent = "";
            }
        });

        if (isValid) {
            alert("Form submitted successfully!");
        }
    });
});