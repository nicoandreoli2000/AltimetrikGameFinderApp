// Custom security

const validation = () => {

    const token = localStorage.getItem('Access token');

    if (window.location.pathname === '/src/pages/login.html' && checkToken(token)) {
        window.location.href = 'main.html';
    }

    if (window.location.pathname === '/src/pages/main.html' && !checkToken(token)) {
        window.location.href = 'login.html';
    }
}

const checkToken = (token) => {
    let ok = true;

    if (!token || token.length < 150) {
        ok = false;
    }

    return ok;
}

validation();

// Issue 1 - Set mannually an access token from the console with a 150 characters or more
// Issue 2 - Access token expiration time is not considered, users will be logged in forever if they do not logout