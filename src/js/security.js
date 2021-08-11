// Custom security
const token = localStorage.getItem('Access token');

const checkToken = (token) => {
    let ok = true;

    if (!token || token.length !== 183) {
        ok = false;
    }

    return ok;
}

const validation = () => {

    if (window.location.pathname === '/src/pages/login.html' && checkToken(token)) {
        window.location.href = 'main.html';
    }

    if (window.location.pathname === '/src/pages/main.html' && !checkToken(token)) {
        window.location.href = 'login.html';
    }
}

validation();


// Issue 1 - Set mannually an access token from the console with a length of 183
// Issue 2 - Access token timout is not set, users will be logged in forever if they do not logout