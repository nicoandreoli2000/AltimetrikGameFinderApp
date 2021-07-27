//Custom security
// if (!JSON.parse(localStorage.getItem('Access token'))) {
//     window.location.href = 'login.html';
// }
// localStorage.setItem('Access token', JSON.stringify('pepe'));


//HTML references
const logoutButton1 = document.querySelector('.header__logout-button');
const logoutButton2 = document.querySelector('.menu__logout-button');
const searchInput = document.querySelector('.header__search-input');
const searchBox = document.querySelector('.header__search');
const listCards = document.querySelector('.main__ul-grid');
const customMenu = document.querySelector('.menu');
const menuButton = document.querySelector('.header__menu-button');
const searchButton = document.querySelector('.header__search-button');
const searchMobile = document.querySelector('.header__search--mobile');
const header = document.querySelector('.header');

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
logoutButton1.addEventListener('click', () => {
    window.location.href = 'login.html';
});
logoutButton2.addEventListener('click', () => {
    window.location.href = 'login.html';
});

//Menu pop up
menuButton.addEventListener('click', (event) => {

    customMenu.classList.add('tabletMenu');
    // console.log('agrego menu');
    // setTimeout(() => {
    //     listen();
    // }, 100);
});

customMenu.addEventListener('click', () => {
    customMenu.classList.remove('tabletMenu');
});

// const listen = () => {
//     document.addEventListener('click', (event) => {

//         if (customMenu.classList.contains('tabletMenu')) {

//             const path = event.path;
//             const actual = document.querySelector('.menu.tabletMenu');
//             let has = true;

//             path.forEach(element => {
//                 if (actual === element) {
//                     has = false;
//                 }

//             });

//             if (has) {
//                 customMenu.classList.remove('tabletMenu');
//                 document.removeEventListener();
//                 console.log('remuevo menu');
//             }
//         }
//     })
// };


//Search bar pop up
searchButton.addEventListener('click', () => {

    searchMobile.classList.toggle('flex-horizontal');

    if (searchMobile.classList.contains('flex-horizontal')) {
        header.style.height = '166px';

    } else {
        header.style.height = '';
    }

});


//Events for search bar
searchInput.addEventListener('focus', () => {
    searchBox.classList.add('searchSuggestion');
    searchBox.classList.add('isFocused');
});
searchInput.addEventListener('blur', () => {
    searchBox.classList.remove('isFocused');
    searchBox.classList.remove('searchSuggestion');
});