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
const customMenu = document.querySelector('.menu');
const menuButton = document.querySelector('.header__menu-button');
const wrapper = document.querySelector('.wrapper');

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

//Menu pop up
// wrapper.addEventListener('click', () => {
//     if (customMenu.classList.contains('tabletMenu')) {
//         customMenu.classList.remove('tabletMenu');
//     }
// });
menuButton.addEventListener('click', () => {
    customMenu.classList.add('tabletMenu');
});
customMenu.addEventListener('click', () => {
    customMenu.classList.remove('tabletMenu');
})

//Events for search bar
searchInput.addEventListener('focus', () => {
    searchBox.classList.add('searchSuggestion');
    searchBox.classList.add('isFocused');
});
searchInput.addEventListener('blur', () => {
    searchBox.classList.remove('isFocused');
    searchBox.classList.remove('searchSuggestion');
    // setTimeout(() => {
    // }, 3000);
});