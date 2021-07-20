// Data base
const prueba = ['1@2.3', '123'];

// HTML references
const form = document.querySelector('form');
const loginButton = document.querySelector('.login-button');
const buttonHidePassword = document.querySelector('.btn-hidepass');
const inputEmail = document.querySelector('.email-input');
const emailBox = document.querySelector('.email-box');
const inputPassword = document.querySelector('.pass-input');
const passwordBox = document.querySelector('.pass-box');
const snackbar = document.querySelector('.snackbar')
const snackbarCross = document.querySelector('.snackbar__button');

//Show/Hide password icons
const hidepassIcon = `<svg class="svg-three" width="20" height="13.75" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
viewBox="0 0 20 14" style="enable-background:new 0 0 20 14;" xml:space="preserve">
<path class="st0" d="M10,0C8.5,0,7.1,0.4,5.9,1l2,2C8.6,2.7,9.3,2.5,10,2.5c1.2,0,2.3,0.5,3.1,1.3c0.8,0.8,1.3,1.9,1.3,3.1
   c0,0.7-0.2,1.4-0.5,2.1l2.4,2.4c2.4-2,3.8-4.4,3.8-4.4S16.2,0,10,0z"/>
<path class="st0" d="M13.1,6.9c0-0.8-0.3-1.6-0.9-2.2c-0.6-0.6-1.4-0.9-2.2-0.9C9.6,3.7,9.2,3.8,8.9,4l4,4
   C13.1,7.6,13.1,7.3,13.1,6.9z"/>
<path class="st0" d="M13.1,10l-0.9-0.9L7.8,4.7L6.9,3.8L4.8,1.7L4.1,0.9L3.2,1.8l0.6,0.6C1.4,4.4,0,6.9,0,6.9s3.8,6.9,10,6.9
   c1.5,0,2.9-0.4,4.1-1l1,1l0.9-0.9l-0.7-0.7L13.1,10z M10,11.2c-1.2,0-2.3-0.5-3.1-1.3C6.1,9.1,5.6,8,5.6,6.9c0-0.7,0.2-1.4,0.5-2.1
   l0.9,0.9C6.9,6.1,6.9,6.5,6.9,6.9c0,0.8,0.3,1.6,0.9,2.2C8.4,9.7,9.2,10,10,10c0.4,0,0.8-0.1,1.1-0.2l0.9,0.9
   C11.4,11.1,10.7,11.2,10,11.2z"/>
</svg>`;
const showpassIcon = `<svg class="svg-three" width="20" height="13.75" version="1.1" xmlns="http://www.w3.org/2000/svg"
xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 20 14"
style="enable-background:new 0 0 20 14;" xml:space="preserve">
<path class="st0" d="M0,6.9C0,6.9,3.8,0,10,0s10,6.9,10,6.9s-3.8,6.9-10,6.9S0,6.9,0,6.9z M10,11.2c1.2,0,2.3-0.5,3.1-1.3
c0.8-0.8,1.3-1.9,1.3-3.1s-0.5-2.3-1.3-3.1C12.3,3,11.2,2.5,10,2.5C8.8,2.5,7.7,3,6.9,3.8S5.6,5.7,5.6,6.9S6.1,9.1,6.9,10
C7.7,10.8,8.8,11.2,10,11.2z" />
<path class="st0" d="M13.1,6.9c0,0.8-0.3,1.6-0.9,2.2S10.8,10,10,10c-0.8,0-1.6-0.3-2.2-0.9S6.9,7.7,6.9,6.9s0.3-1.6,0.9-2.2
S9.2,3.7,10,3.7c0.8,0,1.6,0.3,2.2,0.9S13.1,6,13.1,6.9z" />
<rect x="22.2" y="3.2" class="st0" width="1.3" height="11.9" />
<rect x="23.5" y="3.2" class="st1" width="1.3" height="11.9" />
</svg>`;


//Validation function
const validateEmail = (email) => {
    let re = /^[^\s@]+@[^\s@]+$/;
    return re.test(email);
}

//Show/Hide password
buttonHidePassword.addEventListener('click', () => {

    const div = document.createElement('div');
    const svg = document.querySelector('.btn-hidepass svg');
    svg.remove();

    if (inputPassword.type === "password") {
        inputPassword.type = "text";
        div.innerHTML = showpassIcon;
        buttonHidePassword.append(div.firstChild);

    } else {
        inputPassword.type = "password";
        div.innerHTML = hidepassIcon;
        buttonHidePassword.append(div.firstChild);
    }
});

//Snackbar close
snackbarCross.addEventListener('click', () => {
    snackbar.classList.remove('flex-horizontal');
    snackbar.classList.add('display-none');
})

//Email input states
inputEmail.addEventListener('input', () => {
    emailBox.classList.add('isActive');
});
inputEmail.addEventListener('click', () => {
    emailBox.classList.add('isActive');
});
inputEmail.addEventListener('focus', () => {
    emailBox.classList.add('isFocused');
    form.classList.remove('inputError');
});
inputEmail.addEventListener('blur', () => {
    emailBox.classList.remove('isFocused');
    emailBox.classList.remove('isActive');
});

//Password input states
inputPassword.addEventListener('input', () => {
    passwordBox.classList.add('isActive');
});
inputPassword.addEventListener('click', () => {
    passwordBox.classList.add('isActive');
});
inputPassword.addEventListener('focus', () => {
    passwordBox.classList.add('isFocused');
    form.classList.remove('inputError');
});
inputPassword.addEventListener('blur', () => {
    passwordBox.classList.remove('isFocused');
    passwordBox.classList.remove('isActive');
});

//Form validation
loginButton.addEventListener('click', () => {

    const email = inputEmail.value;
    const pass = inputPassword.value;

    if (email === '' || pass === '' || !validateEmail(email)) {
        inputEmail.value = '';
        inputPassword.value = '';
        form.classList.add('inputError');

    } else if (email === prueba[0] && pass === prueba[1]) {
        window.location.href = "main.html";

    } else {
        snackbar.classList.remove('display-none');
        snackbar.classList.add('flex-horizontal');
    
    }

})