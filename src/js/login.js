// Custom security
localStorage.clear();

// HTML references
const form = document.querySelector('form');
const loginButton = document.querySelector('.form__login-button');
const buttonHidePassword = document.querySelector('.form__hidepass-btn');
const inputEmail = document.querySelector('.form__input--email');
const emailBox = document.querySelector('.form__input-box--email');
const inputPassword = document.querySelector('.form__input--pass');
const passwordBox = document.querySelector('.form__input-box--pass');
const snackbar = document.querySelector('.snackbar')
const snackbarCross = document.querySelector('.snackbar__button');
const userMessage = document.querySelector('.form__error--user p');
const passMessage = document.querySelector('.form__error--pass p');
const loginLabel = document.querySelector('.form__login-label');

//Show/Hide password icons
const hidepassIcon = `<svg class="form__svg-input form__svg-input--hidepass" width="20" height="13.75" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
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
const showpassIcon = `<svg class="form__svg-input form__svg-input--hidepass" width="20" height="13.75" version="1.1" xmlns="http://www.w3.org/2000/svg"
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

//Helper
inputEmail.value = 'probando@hotmail.com';
inputPassword.value = 'password';

//Validation functions for email
const validateEmail = (email) => {
    let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

//Prevent defaul of label remember
loginLabel.addEventListener('click', (e) => {
    e.preventDefault();
})

//Show/Hide password
buttonHidePassword.addEventListener('click', () => {

    const div = document.createElement('div');
    const svg = document.querySelector('.form__svg-input--hidepass');
    svg.remove();

    if (inputPassword.type === 'password') {
        inputPassword.type = 'text';
        div.innerHTML = showpassIcon;
        buttonHidePassword.append(div.firstChild);

    } else {
        inputPassword.type = 'password';
        div.innerHTML = hidepassIcon;
        buttonHidePassword.append(div.firstChild);
    }
});

//Snackbar close
snackbarCross.addEventListener('click', () => {
    snackbar.classList.remove('snackbarShow');
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
    form.classList.remove('errorGeneral', 'errorUser', 'errorPass');
    snackbar.classList.remove('snackbarShow');
});
inputEmail.addEventListener('blur', () => {
    emailBox.classList.remove('isFocused', 'isActive');
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
    form.classList.remove('errorGeneral', 'errorUser', 'errorPass');
    snackbar.classList.remove('snackbarShow');
});
inputPassword.addEventListener('blur', () => {
    passwordBox.classList.remove('isFocused', 'isActive');
});


//Http request to json server
const urlLogin = 'http://localhost:3000/login';

const httpRequest = (email, pass) => {

    fetch(urlLogin, {

        method: 'POST',

        headers: {
            "Content-Type": "application/json",
        },

        body: JSON.stringify({
            email: `${email}`,
            password: `${pass}`
        })
    })

    .then(async(resp) => {

        const respJson = await resp.json();

        finishLoading();

        if (resp.status === 200) {
            localStorage.setItem('Access token', JSON.stringify(respJson.accessToken));
            window.location.href = 'main.html';
        };

        if (resp.status === 400) {
            inputEmail.value = '';
            inputPassword.value = '';
            form.classList.add('errorGeneral', 'errorUser', 'errorPass');
            passMessage.innerHTML = 'Wrong credentials';
        };


    })

    .catch((error) => {

        finishLoading();
        snackbar.classList.add('snackbarShow');
        throw error;
    });


};

//Form validation
loginButton.addEventListener('click', () => {

    const email = inputEmail.value;
    const pass = inputPassword.value;

    snackbar.classList.remove('snackbarShow');

    userMessage.innerHTML = '';
    passMessage.innerHTML = '';

    if (email === '') {
        form.classList.add('errorGeneral', 'errorUser');
        userMessage.innerHTML = 'Enter an email';

    } else if (email.length > 320 || !validateEmail(email)) {
        form.classList.add('errorGeneral', 'errorUser');
        userMessage.innerHTML = 'The email is invalid';
    }

    if (pass === '') {
        form.classList.add('errorGeneral', 'errorPass');
        passMessage.innerHTML = 'Enter a password';

    } else if (pass.length < 4 || pass.length > 256) {
        form.classList.add('errorGeneral', 'errorPass');
        passMessage.innerHTML = 'The password is too short';

    }

    if (form.classList.contains('errorUser')) {
        inputEmail.value = '';
    }
    if (form.classList.contains('errorPass')) {
        inputPassword.value = '';
    }

    if (!form.classList.contains('errorGeneral')) {

        loadingAttributes();

        try {
            httpRequest(email, pass);

        } catch (error) {
            console.log(error);
        }
    }

});

const loadingAttributes = () => {
    loginButton.classList.add('disabled');
    loginButton.setAttribute('value', 'LOGGING');
    inputEmail.setAttribute('disabled', 'true');
    inputPassword.setAttribute('disabled', 'true');
}

const finishLoading = () => {
    loginButton.classList.remove('disabled');
    loginButton.setAttribute('value', 'LOGIN');
    inputEmail.removeAttribute('disabled');
    inputPassword.removeAttribute('disabled');
}


/* Carousel vanilla - like it*/

const carouselImages = document.querySelectorAll('.carousel__img');
const carouselRadio = document.querySelectorAll('.carousel__radio input');
let lastValue = 0;
let click = false;

const showImage = (value) => {
    carouselImages[lastValue].classList.add('hidden');
    carouselImages[value].classList.remove('hidden');
    lastValue = value;
}

const changeRadio = (value) => {
    if (value < 6) {
        carouselRadio[value].removeAttribute('checked');
        carouselRadio[value + 1].setAttribute('checked', '');
        showImage(value + 1);
    } else {
        carouselRadio[value].removeAttribute('checked');
        carouselRadio[0].setAttribute('checked', '');
        showImage(0);
    }
}


carouselRadio.forEach((element) => {
    element.addEventListener('click', () => {
        click = true;
    });
})

const interval = setInterval(() => {
    if (!click) {
        changeRadio(lastValue);
    } else {
        click = false;
    }
}, 1800);