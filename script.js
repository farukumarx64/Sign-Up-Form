let submitButton = document.getElementById('submit');
let userPassword = document.getElementById('user_password')
let verifyPassword = document.getElementById('confirm_password')

let originalColor = userPassword.style.borderColor;

submitButton.addEventListener('click', ()=> {
    if (userPassword.value != verifyPassword.value) {
        userPassword.style.borderColor = 'red'
        verifyPassword.style.borderColor = 'red'
    } else{
        userPassword.style.borderColor = originalColor
        verifyPassword.style.borderColor = originalColor
    }
})