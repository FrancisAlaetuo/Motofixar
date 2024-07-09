// For the display of hidden privacy policy
function displayText() {
    var checkBox = document.getElementById("check");

    var textField = document.getElementById("textField");

    if (checkBox.checked) {
        textField.classList.remove("d-none");
    } else {
        textField.classList.add("d-none");
    }
}