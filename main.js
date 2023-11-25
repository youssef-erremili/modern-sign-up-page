let FirstNameValue = document.getElementById("firstName");
let lastNameValue = document.getElementById("lastName");
let emailValue = document.getElementById("email");
let passWordEL = document.getElementById("passField");
let shoPassEL = document.getElementById("passIcon");
let submitEL = document.getElementById("submit");
let checkFalseF = document.getElementById("fa-circle-F");
let checkFalseS = document.getElementById("fa-circle-S");
let checkFalseT = document.getElementById("fa-circle-T");
let checkTrueF = document.getElementById("fa-check-F");
let checkTrueS = document.getElementById("fa-check-S");
let checkTrueT = document.getElementById("fa-check-T");



// function to show password
shoPassEL.onclick = () => {
    if (passWordEL.type === "password") {
        passWordEL.type = "text";
        shoPassEL.src = "img/hide.svg";
    } else {
        passWordEL.type = "password";
        shoPassEL.src = "img/show.svg";
    }
}



//check validation form
function validateForm() {
    // FirstName validation
    if (FirstNameValue.value.trim() === "") {
        redCheck(FirstNameValue)
        checkFalseF.style.visibility = "visible"
        return false
    }
    else {
        grennCheck(FirstNameValue)
        checkFalseF.style.visibility = "hidden"
        checkTrueF.style.visibility = "visible"
    }

    // LastName validation
    if (lastNameValue.value.trim() === "") {
        redCheck(lastNameValue)
        checkFalseS.style.visibility = "visible"
        return false
    }
    else {
        grennCheck(lastNameValue)
        checkFalseS.style.visibility = "hidden"
        checkTrueS.style.visibility = "visible"
    }

    // Email validation
    if (emailValue.value.trim() === "") {
        redCheck(emailValue)
        checkFalseT.style.visibility = "visible"
        return false
    }
    else {
        grennCheck(emailValue)
        checkFalseT.style.visibility = "hidden"
        checkTrueT.style.visibility = "visible"
    }

    // Password validation
    if (passWordEL.value.trim() === "" || passWordEL.value.length < 10) {
        redCheck(passWordEL)
        return false
    }
    else {
        grennCheck(passWordEL)
    }
    // }
}

//for prevent repeation
function redCheck(value) {
    value.focus();
    value.style.border = "2px solid #dc3545";
    value.style.backgroundColor = "#fd1c330e";
    value.style.transition = "all 480ms ease-out"
}

function grennCheck(value) {
    value.style.border = "2px solid #28a745";
    value.style.backgroundColor = "#00800018";
} 