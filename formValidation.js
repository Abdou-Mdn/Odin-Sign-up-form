const icons = document.getElementsByClassName("icon");
const firstName = document.getElementById("fname");
const lastName = document.getElementById("lname");
const email = document.getElementById("email");
const phoneNumber = document.getElementById("telnum");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const form = document.getElementById("signUpForm");

toggleVisibility = (e) => {
    const icon = e.target;
    const input = icon.previousElementSibling;
    if (input.type === "password") {
        input.type = "text"
        icon.classList.add("fa-eye");
        icon.classList.remove("fa-eye-slash");
    }else {
        input.type = "password";
        icon.classList.add("fa-eye-slash");
        icon.classList.remove("fa-eye");
    }
}

setError = (element,message) => {
    const parentDiv = element.parentElement;
    const errorDisplay = parentDiv.getElementsByClassName("errorDisplay");

    errorDisplay[0].innerText = message;
    element.classList.add("error");
    element.classList.remove("success")
}

setSuccess = (element) => {
    const parentDiv = element.parentElement;
    const errorDisplay = parentDiv.getElementsByClassName("errorDisplay");

    errorDisplay[0].innerText = "";
    element.classList.add("success");
    element.classList.remove("error");
}

setNull = (element) => {
    const parentDiv = element.parentElement;
    const errorDisplay = parentDiv.getElementsByClassName("errorDisplay");

    errorDisplay[0].innerText = "";
    element.classList.remove("error","success");
}


isValidEmail = (email) => {
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return pattern.test(String(email).toLowerCase());
}

isValidNumber = (number) => {
    const pattern = /^\+?[1-9]\d{1,14}$/
    return pattern.test(String(number));
}

inputsValidation = () => {
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const phoneNumberValue = phoneNumber.value.trim();
    const passwordValue = password.value.trim();
    const confirmPasswordValue = confirmPassword.value.trim();

    if(firstNameValue === "") {
        setError(firstName,"First name is required");
    }else {
        setSuccess(firstName);
    }

    if(lastNameValue === "") {
        setNull(lastName);
    } else {
        setSuccess(lastName);
    }

    if(emailValue === "") {
        setError(email,"Email is required");
    }else if(isValidEmail(emailValue) == false){
        setError(email,"Please provide a valid email address");
    }else {
        setSuccess(email);
    }

    if(phoneNumberValue === "") {
        setError(phoneNumber,"Phone number is required");
    } else if(!isValidNumber(phoneNumberValue)) {
        setError(phoneNumber,"Please provide a valid phone number")
    }else {
        setSuccess(phoneNumber);
    }

    if(passwordValue === ""){
        setError(password, "Password is required");
    } else if(passwordValue.length < 8) {
        setError(password, "Password must be at least 8 characters")
    } else {
        setSuccess(password);
    }

    if(confirmPasswordValue === "") {
        setError(confirmPassword, "Please confirm your password")
    } else if(confirmPasswordValue !== passwordValue) {
        setError(confirmPassword, "Passwords don't match")
    } else {
        setSuccess(confirmPassword);
    }
}


icons[0].addEventListener("click", toggleVisibility);
icons[1].addEventListener("click", toggleVisibility);

firstName.addEventListener("input", () => {
   setNull(firstName);
})
lastName.addEventListener("input", () => {
   setNull(lastName);
})
email.addEventListener("input", () => {
    setNull(email);
})
phoneNumber.addEventListener("input", () => {
    setNull(phoneNumber);
})
password.addEventListener("input", () => {
    setNull(password);
})
confirmPassword.addEventListener("input", () => {
    setNull(confirmPassword);
})

form.addEventListener("submit", (e) => {
    e.preventDefault();
    inputsValidation();

})

