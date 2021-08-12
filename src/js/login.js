//HTML references

//General
const form = document.querySelector('form');
const loginLabel = document.querySelector('.form__login-label');
const loginButton = document.querySelector('.form__login-button');

//Snackbar
const snackbar = document.querySelector('.snackbar')
const snackbarCross = document.querySelector('.snackbar__button');

//Inputs
const inputEmail = document.querySelector('.form__input--email');
const inputPassword = document.querySelector('.form__input--pass');
const emailBox = document.querySelector('.form__input-box--email');
const passwordBox = document.querySelector('.form__input-box--pass');
const buttonHidePassword = document.querySelector('.form__hidepass-btn');

//Errors
const userMessage = document.querySelector('.form__error--user p');
const passMessage = document.querySelector('.form__error--pass p');

//Carousel
const carouselImages = document.querySelectorAll('.carousel__img');
const carouselRadio = document.querySelectorAll('.carousel__radio input');

//Prevent default of label remember me - When clicking it checks
loginLabel.addEventListener('click', (evt) => {
    evt.preventDefault();
});

//Show/Hide password management
const hidepassIcon = `<svg class="form__svg-input form__svg-input--hidepass" width="20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
viewBox="0 0 20 14" style="enable-background:new 0 0 20 14;" xml:space="preserve">
<path d="M10,0C8.5,0,7.1,0.4,5.9,1l2,2C8.6,2.7,9.3,2.5,10,2.5c1.2,0,2.3,0.5,3.1,1.3c0.8,0.8,1.3,1.9,1.3,3.1
   c0,0.7-0.2,1.4-0.5,2.1l2.4,2.4c2.4-2,3.8-4.4,3.8-4.4S16.2,0,10,0z"/>
<path d="M13.1,6.9c0-0.8-0.3-1.6-0.9-2.2c-0.6-0.6-1.4-0.9-2.2-0.9C9.6,3.7,9.2,3.8,8.9,4l4,4
   C13.1,7.6,13.1,7.3,13.1,6.9z"/>
<path d="M13.1,10l-0.9-0.9L7.8,4.7L6.9,3.8L4.8,1.7L4.1,0.9L3.2,1.8l0.6,0.6C1.4,4.4,0,6.9,0,6.9s3.8,6.9,10,6.9
   c1.5,0,2.9-0.4,4.1-1l1,1l0.9-0.9l-0.7-0.7L13.1,10z M10,11.2c-1.2,0-2.3-0.5-3.1-1.3C6.1,9.1,5.6,8,5.6,6.9c0-0.7,0.2-1.4,0.5-2.1
   l0.9,0.9C6.9,6.1,6.9,6.5,6.9,6.9c0,0.8,0.3,1.6,0.9,2.2C8.4,9.7,9.2,10,10,10c0.4,0,0.8-0.1,1.1-0.2l0.9,0.9
   C11.4,11.1,10.7,11.2,10,11.2z"/>
</svg>`;
const showpassIcon = `<svg class="form__svg-input form__svg-input--hidepass" width="20" version="1.1" xmlns="http://www.w3.org/2000/svg"
xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 20 14"
style="enable-background:new 0 0 20 14;" xml:space="preserve">
<path d="M0,6.9C0,6.9,3.8,0,10,0s10,6.9,10,6.9s-3.8,6.9-10,6.9S0,6.9,0,6.9z M10,11.2c1.2,0,2.3-0.5,3.1-1.3
c0.8-0.8,1.3-1.9,1.3-3.1s-0.5-2.3-1.3-3.1C12.3,3,11.2,2.5,10,2.5C8.8,2.5,7.7,3,6.9,3.8S5.6,5.7,5.6,6.9S6.1,9.1,6.9,10
C7.7,10.8,8.8,11.2,10,11.2z" />
<path d="M13.1,6.9c0,0.8-0.3,1.6-0.9,2.2S10.8,10,10,10c-0.8,0-1.6-0.3-2.2-0.9S6.9,7.7,6.9,6.9s0.3-1.6,0.9-2.2
S9.2,3.7,10,3.7c0.8,0,1.6,0.3,2.2,0.9S13.1,6,13.1,6.9z" />
<rect x="22.2" y="3.2" width="1.3" height="11.9" />
<rect x="23.5" y="3.2" width="1.3" height="11.9" />
</svg>`;

buttonHidePassword.addEventListener('click', () => {
    buttonHidePassword.innerHTML = '';

    if (inputPassword.type === 'password') {
        inputPassword.type = 'text';
        buttonHidePassword.innerHTML = showpassIcon;

    } else {
        inputPassword.type = 'password';
        buttonHidePassword.innerHTML = hidepassIcon;
    }
});

//Snackbar closing
snackbarCross.addEventListener('click', () => {
    snackbar.classList.add('hidden');
})

//Email && Password active, click and focus states - Removing errors when focused
const inputs = [[inputEmail, emailBox], [inputPassword, passwordBox]];

inputs.forEach((arr) => {

    arr[0].addEventListener('input', () => {
        arr[1].classList.add('isActive');
    });

    arr[0].addEventListener('click', () => {
        arr[1].classList.add('isActive');
    });

    arr[0].addEventListener('focus', () => {
        arr[1].classList.add('isFocused');
        form.classList.remove('errorGeneral', 'errorUser', 'errorPass');
        snackbar.classList.add('hidden');
    });

    arr[0].addEventListener('blur', () => {
        arr[1].classList.remove('isFocused', 'isActive');
    });
});

/* Carousel vanilla JavaScript - Like it or not */
let lastValue = 0;
let click = false;

carouselRadio.forEach((element) => {
    element.addEventListener('click', () => {
        click = true;
    });
});

const showImageRadio = (value) => {
    carouselRadio[lastValue].checked = false;
    carouselRadio[value].checked = true;
    carouselImages[lastValue].classList.add('hidden');
    carouselImages[value].classList.remove('hidden');
    lastValue = value;
};

const decideValue = (value) => {
    if (value < 6) {
        showImageRadio(value + 1);
    } else {
        showImageRadio(0);
    }
}

const interval = setInterval(() => {
    if (!click) {
        decideValue(lastValue);
    } else {
        click = false;
    }
}, 1800);

//First image
showImageRadio(lastValue);

// Validation and HTTP request

//Regular expresion validation for email
const validateEmail = (email) => {
    let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

//Form validation
const formValidation = (email, pass) => {

    userMessage.innerHTML = '';
    passMessage.innerHTML = '';

    if (email.trim() === '') {
        form.classList.add('errorGeneral', 'errorUser');
        userMessage.innerHTML = 'Enter an email';

    } else if (email.length > 320) {
        form.classList.add('errorGeneral', 'errorUser');
        userMessage.innerHTML = 'The email is too large';

    } else if (!validateEmail(email)) {
        form.classList.add('errorGeneral', 'errorUser');
        userMessage.innerHTML = 'Invalid email';
    }

    if (pass.trim() === '') {
        form.classList.add('errorGeneral', 'errorPass');
        passMessage.innerHTML = 'Enter a password';

    } else if (pass.length < 4) {
        form.classList.add('errorGeneral', 'errorPass');
        passMessage.innerHTML = 'The password is too short';

    } else if (pass.length > 256) {
        form.classList.add('errorGeneral', 'errorPass');
        passMessage.innerHTML = 'The password is too large';
    }
};

//JSON server post request
const urlLogin = 'http://localhost:3000/login';

const postRequest = async (email, pass) => {

    try {

        let resp = await fetch(urlLogin, {
            method: 'POST',
            headers: {
                Accept: "aplication/json",
                "Content-Type": "application/json"
            },
            body:
                JSON.stringify({
                    email: `${email}`,
                    password: `${pass}`
                })
        });

        let respJson = await resp.json();

        if (resp.ok) {
            localStorage.setItem('Access token', respJson.accessToken);
            window.location.href = 'main.html';

        } else {
            form.classList.add('errorGeneral', 'errorUser', 'errorPass');
            inputEmail.value = '';
            inputPassword.value = '';
            passMessage.innerHTML = 'Wrong credentials';
        }

    } catch (error) {

        snackbar.classList.remove('hidden');
    }

    loadingState(false);
};

//Login clicked
form.addEventListener('submit', (evt) => {

    evt.preventDefault();

    const email = inputEmail.value;
    const pass = inputPassword.value;

    snackbar.classList.add('hidden');

    formValidation(email, pass);

    if (form.classList.contains('errorGeneral')) {

        if (form.classList.contains('errorUser')) {
            inputEmail.value = '';
        }
        if (form.classList.contains('errorPass')) {
            inputPassword.value = '';
        }

    } else {

        loadingState(true);
        postRequest(email, pass);

    }
});


//Disable login button and inputs
const loadingState = (bool) => {

    loginButton.disabled = bool;
    inputEmail.disabled = bool;
    inputPassword.disabled = bool;

    if (bool) {
        loginButton.setAttribute('value', 'LOGGING');
    } else {
        loginButton.setAttribute('value', 'LOGIN');
    }
};