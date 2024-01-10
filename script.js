function openPopup(popupId) {
    var popup = document.getElementById(popupId);
    popup.classList.add("active");
    document.addEventListener("click", outsideClick);
}

function closePopup(popupId) {
    var popup = document.getElementById(popupId);
    popup.classList.remove("active");
    document.removeEventListener("click", outsideClick);
}

function outsideClick(event) {
    var popups = document.getElementsByClassName("popup");
    for (var i = 0; i < popups.length; i++) {
        if (event.target === popups[i]) {
            popups[i].classList.remove("active");
        }
    }
}
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
function validateSignup() {
    var email = document.getElementById("signupEmail").value;
    var username = document.getElementById("signupUsername").value;
    var password = document.getElementById("signupPassword").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var errorMessage = document.getElementById("signupErrorMessage");
    
    if (!validateEmail(email)) {
        document.getElementById('signupErrorMessage').textContent = 'Invalid email';
        return false;
    }
    
    if (username === "") {
        errorMessage.innerText = "Please enter a username.";
        return;
    }
    
    if (password === "") {
        errorMessage.innerText = "Please enter a password.";
        return;
    }
    
    if (confirmPassword === "") {
        errorMessage.innerText = "Please confirm your password.";
        return;
    }
    
    if (password !== confirmPassword) {
        errorMessage.innerText = "Passwords do not match.";
        return;
    }
    
    // If all validations pass, submit the form
    errorMessage.innerText = "";
    // Add form submission logic here...

}
