//Custom security
// if (!JSON.parse(localStorage.getItem('Access token'))) {
//     window.location.href = 'login.html';
// }
// localStorage.setItem('Access token', JSON.stringify('pepe'));


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

//Logout event
logoutButton.addEventListener('click', () => {
    window.location.href = 'login.html';
});

//Events for search bar
searchInput.addEventListener('focus', () => {
    searchBox.classList.add('searchSuggestion');
    searchBox.classList.add('isFocused');
});
searchInput.addEventListener('blur', () => {
    searchBox.classList.remove('isFocused');
    auxSearch();
});

const auxSearch = () => {
    setTimeout(() => {
        searchBox.classList.remove('searchSuggestion');
    }, 3000);
}