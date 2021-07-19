//HTML references
const logoutButton = document.querySelector('.header__logout-button');
const searchInput = document.querySelector('.header__search-input');
const searchBox = document.querySelector('.header__search');
const radioDisplays = document.querySelectorAll('.main__radio');
const listCards = document.querySelector('.main__ul-grid');

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


//Events for radio displays
radioDisplays.addEventListener('click', () => {
    listCards.classList.toggle('main__ul-grid');
})