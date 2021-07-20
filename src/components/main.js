//HTML references
const logoutButton = document.querySelector('.header__logout-button');
const searchInput = document.querySelector('.header__search-input');
const searchBox = document.querySelector('.header__search');
const listCards = document.querySelector('.main__ul-grid');

//Radio button displays
const addGrid = () => {
    listCards.classList.add('main__ul-grid');
    listCards.classList.remove('main__ul-flex');
}
const addFlex = () => {
    listCards.classList.remove('main__ul-grid');
    listCards.classList.add('main__ul-flex');
}

//Events for search bar
logoutButton.addEventListener('click', () => {
    window.location.href = 'login.html';
});
searchInput.addEventListener('input', () => {
    searchBox.classList.add('searchSuggestion');
});
searchInput.addEventListener('click', () => {
    searchBox.classList.add('searchSuggestion');
});
searchInput.addEventListener('blur', () => {
    searchBox.classList.remove('searchSuggestion');
});

