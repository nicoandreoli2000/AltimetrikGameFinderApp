//HTML references
const logoutButton = document.querySelector('.header__logout-button');

//Events
logoutButton.addEventListener('click', () => {
    window.location.href = 'login.html';
});