// Custom security - Avoiding people changing the url and go to the main page
const token = localStorage.getItem('Access token');
if (!token || token.length !== 183) {
    window.location.href = 'login.html';
}

// Issue - Set mannually an access token from the console with a length of 183
// localStorage.setItem('Access token', JSON.stringify('custom'));