// Custom security
// const token = JSON.parse(localStorage.getItem('Access token'));
// if (!token || token.length !== 183) {
//     window.location.href = 'login.html';
// }

// Issue
// localStorage.setItem('Access token', JSON.stringify('custom'));

//HTML references
const logoutButton1 = document.querySelector('.header__logout-button');
const logoutButton2 = document.querySelector('.menu__logout-button');
const searchInputs = document.querySelectorAll('.header__search-input');
const listCards = document.querySelector('.main__ul-grid');
const customMenu = document.querySelector('.menu');
const menuButton = document.querySelector('.header__menu-button');
const menuCloseButton = document.querySelector('.menu__button-close');
const searchButton = document.querySelector('.header__search-button');
const searchMobile = document.querySelector('.header__search--mobile');
const header = document.querySelector('.header');
const modalButton = document.querySelector('.main__card-button');
const modalView = document.querySelector('.modal-wrapper');
var subwrapperMain = document.querySelector('.sub-wrapper');

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
document.addEventListener('click', ({ path }) => {

    if (checkParent(path, menuButton)) {
        customMenu.classList.add('show');

    } else {
        if (!checkParent(path, document.querySelector('.menu')) || checkParent(path, menuCloseButton)) {
            customMenu.classList.remove('show');
        }
    }
});

const checkParent = (path, ref) => {
    let has = false;

    path.forEach(element => {
        if (element === ref) {
            has = true;
        }
    });

    return has;
};

//Search bar pop in mobile
searchButton.addEventListener('click', () => {
    searchMobile.classList.toggle('show');
    header.classList.toggle('expand');
});

//Events for search bar
searchInputs.forEach(ref => {
    ref.addEventListener('focus', () => {
        ref.parentElement.classList.add('searchSuggestion');
        ref.parentElement.classList.add('isFocused');
    });
});
searchInputs.forEach(ref => {
    ref.addEventListener('blur', () => {
        ref.parentElement.classList.remove('searchSuggestion');
        ref.parentElement.classList.remove('isFocused');
    });
});


//Opening modal view
modalButton.addEventListener('click', () => {
    modalView.classList.add('show');
    subwrapperMain.classList.add('hidden');
});

//Close modal function
const closeModal = () => {
    document.querySelector('.modal-wrapper').classList.remove('show');
    subwrapperMain.classList.remove('hidden');
}