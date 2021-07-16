//HTML references
const logoutButton = document.querySelector('.header__logout-button');
const searchInput = document.querySelector('.header__search-input');
const searchBox = document.querySelector('.header__search');

//Events
logoutButton.addEventListener('click', () => {
    window.location.href = 'login.html';
});
searchInput.addEventListener('input', () => {
    searchBox.classList.add('searchSuggestion');
});
searchInput.addEventListener('blur', () => {
    searchBox.classList.remove('searchSuggestion');
});