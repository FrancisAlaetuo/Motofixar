// For the display of hidden register as a technician
function displayText() {
    var checkBox = document.getElementById("check");

    var textField = document.getElementById("textField");

    if (checkBox.checked) {
        textField.style.display = "block";
    } else {
        textField.style.display ="none";
    }
}

// Form validation starts here
function validateForm(event) {
    event.preventDefault();

    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");
    const registerTechnician = document.getElementById("check");
    const companyName = document.getElementById("companyName");
    const companyAddress = document.getElementById("companyAddress");
    const companyPicture = document.getElementById("companyPicture");

    if (username.value === "") {
        alert("Username is required.");
        return false;
    }
    if (email.value === "") {
        alert("Email address is required.");
        return false;
    }
    if (phone.value === "") {
        alert("Phone number is required.");
        return false;
    }
    if (password.value === "") {
        alert("Password is required.");
        return false;
    }
    if (confirmPassword.value === "") {
        alert("Confirm password is required.");
        return false;
    }
    if (password.value !== confirmPassword.value) {
        alert("Passwords do not match.");
        return false;
    }

    if (registerTechnician.checked) {
        if (companyName.value === "") {
            alert("Company name is required.");
            return false;
        }
        if (companyAddress.value === "") {
            alert("Company address is required.");
            return false;
        }
        if (companyPicture.value === "") {
            alert("Company picture is required.");
            return false;
        }
    }

    alert("Form submitted successfully!");
    return true;
}