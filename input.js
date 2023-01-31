//UC1 validate name
const text = document.querySelector('#text');
const textError = document.querySelector('.text-error');
text.addEventListener('input', function () {
    let nameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
    if (nameRegex.test(text.value))
        textError.textContent = "";
    else
        textError.textContent = "Invalid Name";
});

//UC2 Email validation
const email = document.querySelector("#Email");
const emailError = document.querySelector('.email-error');
email.addEventListener('input', function () {
    let emailRegex = RegExp('^[a-z]+([.+-_][a-z]+)*@[a-z]+.[a-z]+([.]+[a-z]+)*$');
    if (emailRegex.test(Email.value)) {
        emailError.textContent = ""
    }
    else {
        emailError.textContent = "Email is not valid";
    }
});

//UC3 Mobile Number Validation
const tele = document.querySelector("#tele");
const teleError = document.querySelector('.tele-error');
tele.addEventListener('input', function () {
    let phoneNumberRegex = RegExp("^[0-9]{2}[ ][0-9]{10}$");
    if (phoneNumberRegex.test(tele.value)) {
        teleError.textContent = ""
    }
    else {
        teleError.textContent = "Mobile number is not valid";
    }
});

//UC4- Password Validation
//validate Password field using regexp.
const pwd = document.querySelector('#pass');
const passwordEror = document.querySelector('.pwd-error');
pwd.addEventListener('input', function () {
    let passwordRegex = RegExp("^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[!@#$%^&*()_+=-]).{8,}$");
    if (passwordRegex.test(pwd.value)) {
        passwordEror.textContent = ""
    }
    else {
        passwordEror.textCont
        passwordEror.textContent = "Password is incorrect";
    }
});

//UC5-Salary Validation
const salary = document.querySelector('#salary')
const output = document.querySelector('.salary-output')
output.textContent = salary.value;
salary.addEventListener('input', function () {
    output.textContent = salary.value;
});