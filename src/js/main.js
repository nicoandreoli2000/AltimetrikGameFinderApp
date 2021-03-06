// ------------ Variables -----------

//General
const header = document.querySelector('.header');
const menu = document.querySelector('.menu');
const main = document.querySelector('.main');
const listCards = document.querySelector('.main__ul-grid');
const groupRadio = document.querySelectorAll('.main__radio');

//Logout
const logoutButtonHeader = document.querySelector('.header__logout-button');
const logoutButtonMenu = document.querySelector('.menu__logout-button');

//Menu
const homeButton = document.querySelector('.nav__item:first-child a');
const menuOpenButton = document.querySelector('.header__menu-button');
const menuCloseButton = document.querySelector('.menu__button-close');

//Search
const buttonsSuggestion = document.querySelectorAll('.header__button-suggestion');
const searchButton = document.querySelector('.header__search-button');
const searchInput = document.querySelector('.header__search-input');
const searchFor = document.querySelector('.main__title h2');
const searchValue = document.querySelector('.main__subtitle p');
const searchParent = document.querySelector('.header__search');

//Modal
const modalButton = document.querySelectorAll('.main__card-button');
const modalWrapper = document.querySelector('.modal-wrapper');
const modalView = document.querySelector('.modal');

//Svg platforms
const play = `<svg width="17" heigth="13" viewBox="0 0 17 13" xmlns="http://www.w3.org/2000/svg" fill="white">
<path
    d="M6.5 0.149317L6.5 12.0296L9.07955 12.8818L9.07955 2.92038C9.07955 2.45098 9.28024 2.13932 9.60212 2.2465C10.023 2.36823 10.1048 2.80063 10.1048 3.2648L10.1048 7.24326C11.7104 8.05369 12.9745 7.24283 12.9745 5.10456C12.9745 2.91953 12.2334 1.94614 10.0527 1.16352C9.19249 0.864854 7.59836 0.360857 6.5 0.149317Z" />
<path
    d="M9.75 11.1429L13.6492 9.45771C14.0903 9.25915 14.1578 8.9894 13.8008 8.84764C13.4382 8.70325 12.791 8.74457 12.3452 8.93895L9.75 10.0506V8.27688L9.89861 8.21729C9.89861 8.21729 10.6498 7.89415 11.7064 7.75502C12.7609 7.61465 14.0541 7.77328 15.0706 8.2385C16.2156 8.68019 16.3439 9.32446 16.0542 9.77281C15.7603 10.2165 15.0478 10.5375 15.0478 10.5375L9.75 12.8484" />
<path
    d="M1.18907 11.3389C-0.0278308 10.9683 -0.230758 10.1851 0.324385 9.73273C0.836458 9.31962 1.70854 9.00863 1.70854 9.00863L5.31353 7.60333L5.31353 9.20276L2.72172 10.2185C2.26263 10.398 2.1938 10.6507 2.56358 10.7828C2.93997 10.9203 3.60794 10.8834 4.0673 10.698L5.31353 10.2068V11.6346C5.23321 11.6494 5.1439 11.6642 5.06238 11.6794C3.81985 11.9049 2.49607 11.8123 1.18907 11.3389Z" />
<path fill-rule="evenodd" clip-rule="evenodd"
    d="M16.1271 12.7978C16.0247 12.8989 15.8903 12.9561 15.7455 12.9561C15.6008 12.9561 15.462 12.8989 15.3594 12.7978C15.2582 12.6948 15.2021 12.5603 15.2021 12.4154C15.2021 12.1153 15.4451 11.8727 15.7455 11.8727C15.8903 11.8727 16.0247 11.928 16.1271 12.0314C16.2284 12.1324 16.2855 12.2692 16.2855 12.4154C16.2855 12.5603 16.2284 12.6948 16.1271 12.7978ZM15.2934 12.4154C15.2934 12.292 15.3396 12.1788 15.4239 12.095C15.5104 12.0092 15.6257 11.963 15.7455 11.963C15.8655 11.963 15.9779 12.0092 16.0622 12.095C16.1473 12.1788 16.1932 12.292 16.1932 12.4154C16.1932 12.6627 15.9922 12.8634 15.7455 12.8634C15.6257 12.8634 15.5104 12.8177 15.4239 12.7331C15.3396 12.6477 15.2934 12.5358 15.2934 12.4154ZM15.9927 12.6405C15.9976 12.6544 16.0034 12.6627 16.0118 12.6651L16.0193 12.6694V12.7038H15.9018L15.8996 12.6969L15.8916 12.6761C15.8903 12.6651 15.8887 12.6508 15.8871 12.6267L15.8819 12.5325C15.8805 12.4991 15.8696 12.4796 15.8494 12.4667C15.8345 12.4617 15.8141 12.4579 15.7837 12.4579H15.6205V12.7038H15.5134V12.0997H15.7941C15.8399 12.0997 15.8785 12.1078 15.908 12.1204C15.9672 12.1482 15.9976 12.1984 15.9976 12.269C15.9976 12.3037 15.9889 12.3362 15.9741 12.3601C15.9612 12.377 15.946 12.3924 15.9295 12.4075L15.9339 12.4106C15.9451 12.4185 15.9563 12.4263 15.9628 12.4378C15.9778 12.4543 15.9846 12.482 15.9858 12.5177L15.9885 12.5946C15.9889 12.6143 15.9905 12.6296 15.9927 12.6405ZM15.8661 12.3435C15.8835 12.3323 15.8916 12.31 15.8916 12.276C15.8916 12.2401 15.8792 12.2162 15.8549 12.2042C15.8399 12.1984 15.8214 12.1942 15.7964 12.1942H15.6205V12.3639H15.7867C15.8198 12.3639 15.846 12.3571 15.8661 12.3435Z" />
</svg>`;
const apple = `<svg width="15" height="16" version="1.1" xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
    viewBox="0 0 22.773 22.773" xml:space="preserve" fill="white">
    <path d="M15.769,0c0.053,0,0.106,0,0.162,0c0.13,1.606-0.483,2.806-1.228,3.675c-0.731,0.863-1.732,1.7-3.351,1.573
c-0.108-1.583,0.506-2.694,1.25-3.561C13.292,0.879,14.557,0.16,15.769,0z" />
    <path
        d="M20.67,16.716c0,0.016,0,0.03,0,0.045c-0.455,1.378-1.104,2.559-1.896,3.655c-0.723,0.995-1.609,2.334-3.191,2.334
c-1.367,0-2.275-0.879-3.676-0.903c-1.482-0.024-2.297,0.735-3.652,0.926c-0.155,0-0.31,0-0.462,0
c-0.995-0.144-1.798-0.932-2.383-1.642c-1.725-2.098-3.058-4.808-3.306-8.276c0-0.34,0-0.679,0-1.019
c0.105-2.482,1.311-4.5,2.914-5.478c0.846-0.52,2.009-0.963,3.304-0.765c0.555,0.086,1.122,0.276,1.619,0.464
c0.471,0.181,1.06,0.502,1.618,0.485c0.378-0.011,0.754-0.208,1.135-0.347c1.116-0.403,2.21-0.865,3.652-0.648
c1.733,0.262,2.963,1.032,3.723,2.22c-1.466,0.933-2.625,2.339-2.427,4.74C17.818,14.688,19.086,15.964,20.67,16.716z" />
</svg>`;
const windows = `<svg width="13" height="13" viewBox="0 0 13 13" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd"
        d="M13 5.95833H5.95833V0.998704L13 0V5.95833ZM5.41667 1.08333V5.95833H0V1.80612L5.41667 1.08333ZM5.41667 6.5H0V11.1145L5.41667 11.9167V6.5ZM5.95833 11.912V6.5H13V13L5.95833 11.912Z"
        fill="white" />
</svg>`;
const linux = `<svg width="15" height="16" version="1.1" xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
    viewBox="0 0 841.9 980" xml:space="preserve" fill="white">
    <path class="st0"
        d="M617.9,980c-5.7,0-11.3,0-17,0c-5-1.2-10-2.1-14.9-3.7c-17.7-5.7-28.4-19.1-37-34.6c-1.5-2.7-3.2-4.2-6.3-4.9
c-72.9-16.9-145.5-12.8-218.1,2.1c-1.5,0.3-3.2,1.7-4,3c-14.4,24.7-37.5,35.3-65.9,30.6c-23-3.8-44.7-11.5-66.5-19.3
c-24.9-8.9-49.5-18.9-75.6-23.7c-18-3.3-36.2-5.4-54.2-8.7c-14.3-2.6-28.3-6.4-40.7-14.3c-13.2-8.4-16.7-18.4-12-33.4
c3.1-10,6.3-20,9.5-30c5.1-15.7,5.5-31.3-0.1-47c-1.7-4.7-2.7-9.6-3.6-14.5c-4-21.5,4.9-35.7,25.8-41.6c1.6-0.5,3.2-0.7,4.9-1.2
c11.1-2.9,22.3-5.4,33.2-9c16.4-5.5,30.3-14.7,38.2-30.8c5.9-12,12.8-23,25.1-29.4c-5.3-15.7-6.3-31.5-1.6-47
c3.1-10.1,8.7-19.4,12.6-29.3c9.6-24.8,19.6-49.5,27.9-74.8c14.2-42.8,34.6-82,62.9-117.2c14.3-17.8,27.3-36.6,40.9-54.9
c4.7-6.3,8-13.3,8.4-21.1c1.1-21.1,2.9-42.3,2.2-63.3c-1-31.1-4-62.2-5.7-93.3c-1.4-25-0.3-50,5.5-74.5c6.3-26,18-48.7,40.7-64.3
C350.3,18,369.7,9.7,390.5,5c9.4-2.1,18.9-3.4,28.4-5c8.7,0,17.3,0,26,0c1.3,0.3,2.5,0.8,3.8,0.9c46.2,5.2,81.7,27.1,104.8,67.7
c19.2,33.8,27.6,70.9,30.3,109.3c1.9,26.9,2.4,53.9,4.2,80.8c2,30.5,10.9,58.6,29.3,83.6c17.6,23.9,34.4,48.3,51.1,72.8
c25.9,38,50.9,76.5,70.9,118c11.7,24.3,18.7,49.7,18.9,76.9c0.2,24.6-2.8,48.8-8.6,72.7c-0.5,1.9-0.1,4.8,1.1,6.1
c14.1,15.3,21.3,32.9,20.6,54c-0.5,16.2,5.4,30.4,18.4,40.3c8.6,6.6,18.4,11.9,28.2,16.6c20.9,10.1,26.6,31.7,12.7,50.3
c-6.2,8.3-14.6,14.1-23.5,19c-23.3,12.8-46.8,25.4-70,38.6c-26.7,15.2-52.7,31.1-74.7,53.1c-5.4,5.4-12.6,9.4-19.7,12.4
C634.9,976.3,626.2,977.7,617.9,980z M311.9,304.5c0.3,1.8,0.6,3.5,0.8,5.1c0.2,1.8,0.3,3.7,0.2,5.5c-1.2,32.2-12.4,60.6-31.8,86.1
c-3.3,4.3-6.9,8.8-9,13.7c-7.4,17.8-14.5,35.7-21.2,53.8c-7.6,20.6-13.6,41.9-24.9,60.9c-19.9,33.5-28.2,69.8-27.1,108.4
c0.7,23.2,7.9,43.8,25.9,59.6c8.9,7.8,17.7,15.7,26.8,23.2c16.5,13.5,33.4,26.5,49.5,40.4c6.2,5.3,11.7,12,15.9,19
c8.2,13.7,3.2,31.4-10.6,39.6c-4,2.3-8.4,3.9-12.7,5.8c0.1,0.2,0.2,0.7,0.5,1.1c12.7,14.6,25.3,29.2,38.2,43.6
c1.3,1.5,4,2.3,6.1,2.6c21.4,2.9,42.9,2.8,64.3,0.8c18.4-1.7,37-3.2,54.8-7.5c43.3-10.5,76.5-36.9,104.4-70.7
c1.3-1.6,1.7-4.2,1.8-6.4c0.4-16.5,0.4-33,1.1-49.5c0.6-14.6,1.9-29.2,3.2-43.8c0.6-6.7,4.4-12.1,10.9-13.5
c6.9-1.5,14.1-1.4,21.2-1.7c2.5-0.1,5.1,0.6,7.7,1c0.4-1.2,0.6-1.9,0.7-2.5c11.9-50.3,11.6-100.2-4.6-149.7
c-18.8-57.3-42-112.9-67.1-167.6c-9.6-21-20.3-41.5-30.8-62.1c-3.1-6.2-5.1-6.6-11.8-4.7c-1.8,0.5-3.6,0.9-5.2,1.8
c-12.3,6.3-24.6,12.6-36.8,19c-18.7,9.9-37.2,20.1-55.9,29.8c-10.6,5.5-21.8,5.3-32.2-0.2c-9.4-4.9-18.5-10.6-26.8-17.1
C328.7,321.1,320.8,312.7,311.9,304.5z M258.4,946c4.1-1.1,9.1-1.1,12.1-3.5c7.6-6.1,15-12.8,21.1-20.3c8.9-10.9,10.4-23.8,6.4-37.3
c-4.2-14-12.4-25.6-21.5-36.8c-8.5-10.5-17.1-20.9-24.4-32.2c-16.7-26.1-32-53-48.9-79c-7.4-11.3-16.8-21.4-25.9-31.5
c-3.7-4.1-8.8-7.1-13.8-9.7c-8.4-4.4-14.3-3-20.1,4.6c-3,3.9-5.4,8.4-7.8,12.8c-3.5,6.4-6.6,13.1-10.2,19.4
c-5.1,8.9-12.6,15-22.6,17.7c-6.6,1.8-13.2,3.3-19.8,5c-9.8,2.6-19.7,5-29.3,8.1c-8,2.6-11.7,8.5-10.8,17c0.6,5.3,1.2,10.6,2.4,15.8
c3.5,14.8,3.3,29.3-1.3,43.8c-3.2,10-6.3,20.1-8.1,30.3c-2,11.6,1,16.3,12.3,19c16.5,3.9,33.2,7.1,49.9,9.9
c24.3,4.1,48.3,8.9,71,19.3c13.6,6.2,27.8,11.1,41.9,16.1C226.4,939.7,241.9,944.4,258.4,946z M613.3,711.1
c-1.3-0.1-2.8-0.4-4.3-0.4c-8.8-0.1-12.3,2.8-12.8,11.5c-0.3,5.8,0.1,11.7,0.3,17.5c0.6,18,3.1,36.1,1.5,53.8
c-2.3,25.3-7.3,50.4-11.8,75.4c-2.5,14-5.1,27.8-2.3,42.1c6.5,32.8,30.7,44.6,60,29.1c14.6-7.7,26.9-18.3,38.7-29.7
c5.7-5.5,11.6-11.3,18.4-15.3c23.7-13.8,47.9-26.7,71.9-40.1c9.6-5.4,19.2-10.6,28.4-16.7c6.4-4.2,6.7-10.1,1.5-15.8
c-2.7-2.9-5.8-5.6-9.1-7.7c-5.6-3.6-11.3-7.1-17.3-10c-12.8-6.1-20.8-16.2-25.8-29.1c-3.9-9.9-5.3-20.2-5-30.8
c0.2-9.1-2.3-17.2-10.3-22.8c-0.5,0.4-0.7,0.5-0.8,0.6c-1.4,2.5-2.8,4.9-4.2,7.4c-9.6,17.8-23.4,30.6-43.1,36.4
c-7.8,2.3-15.8,4.6-23.8,5.2c-27.7,2-43.1-8.3-48-35.6C614.2,728,614,719.8,613.3,711.1z M385.5,327.4c5.2-1.8,10.9-2.9,15.7-5.5
c25.6-14.1,51.1-28.6,76.4-43.2c7.1-4.1,7.7-11.2,1.5-16.6c-4.5-3.9-9.6-7.4-15-9.6c-19.6-7.9-39.5-15-59.1-22.8
c-10.2-4.1-19.5-2.6-28.4,3.1c-2,1.3-4.1,2.3-5.9,3.8c-14.8,11.9-29.6,23.7-44.2,35.8c-1.5,1.2-2.4,4.8-1.8,6.5
c1.6,4.3,3.8,8.6,6.7,12c11.6,13.6,26.6,23,41.8,32.1C376.7,325.1,380.9,325.8,385.5,327.4z M438.4,219.1c0.3-0.7,0.4-0.9,0.4-1
c-0.5-1.4-1-2.8-1.4-4.2c-3-10.3-2.8-20.5,2.1-30.1c4.3-8.5,10.5-14.8,20.8-14.8c10.2,0,16.5,6.3,20.8,14.8
c8.3,16.6,4.1,34.8-10.8,47.9c13.1,6.6,10.7,7.8,20.9-2.5c22.6-22.8,21.9-66-0.9-88.6c-15.9-15.8-38.6-17.3-55.7-3.3
c-21,17.1-26.1,48.6-17,72.1c0.5,1.2,1.8,2.3,3,2.9C426.4,214.5,432.3,216.8,438.4,219.1z M353.9,220.5c5-3.5,9.1-7.7,14-9.6
c6.6-2.5,8.4-6.9,8.6-13.2c0.9-18.4-2.3-35.6-14.8-49.9c-12.7-14.6-31.3-14.6-44.4-0.3c-1.8,2-3.6,4-4.9,6.3
c-14.1,24.9-14.5,50.1-0.2,74.9c3,5.3,8.5,9.1,13,13.4c0.8,0.8,3.2,1.3,3.9,0.7c4.4-3.4,8.6-7.2,12.5-10.6c-4.1-1.4-8-2-11.1-3.9
c-14.6-9.2-19.2-37.5-8.6-51.2c5.5-7.1,13.8-8.9,20.5-3.1c4.7,4.1,8.6,9.7,11.2,15.4C358.2,199.3,357.9,209.8,353.9,220.5z" />

</svg>`;
const xbox = `<svg width="13" height="13" viewBox="0 0 13 13" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd"
        d="M6.5 0C7.75357 0 8.79048 0.40056 9.73452 1.07423C9.75 1.07423 9.75 1.09244 9.75 1.11064C9.75 1.12885 9.73452 1.12885 9.71905 1.12885C8.5119 0.819328 6.68571 2.03922 6.51548 2.16667H6.5H6.48452C6.31429 2.03922 4.4881 0.819328 3.28095 1.12885C3.26548 1.12885 3.25 1.12885 3.25 1.11064C3.25 1.09244 3.25 1.07423 3.26548 1.07423C4.20952 0.40056 5.24643 0 6.5 0ZM10.6537 11.4392C11.6287 10.4302 8.40504 6.86712 6.5023 5.41667C6.5023 5.41667 6.48658 5.41667 6.48658 5.43243C4.59957 6.86712 1.3602 10.4302 2.35088 11.4392C3.45164 12.4167 4.91407 13 6.5023 13C8.09054 13 9.53724 12.4167 10.6537 11.4392ZM1.78082 2.19751C1.7734 2.19751 1.76969 2.20158 1.76598 2.20566C1.76227 2.20973 1.75856 2.2138 1.75114 2.2138C0.667808 3.40327 0 5.04896 0 6.8576C0 8.34035 0.460046 9.72534 1.21689 10.817C1.21689 10.8333 1.23174 10.8333 1.24658 10.8333C1.26142 10.8333 1.26142 10.817 1.24658 10.8007C0.78653 9.25282 3.11644 5.52149 4.31849 3.95726L4.33333 3.94097C4.33333 3.93257 4.33333 3.9285 4.3313 3.92653C4.32939 3.92467 4.32568 3.92467 4.31849 3.92467C2.49315 1.93681 1.8847 2.14863 1.78082 2.19751ZM8.66667 3.93424L8.68151 3.91793C10.5068 1.94443 11.1153 2.15646 11.2043 2.18908C11.2105 2.18908 11.2141 2.18908 11.2173 2.19025C11.2217 2.1919 11.2253 2.19586 11.234 2.20539C12.3322 3.39602 13 5.04332 13 6.85372C13 8.33792 12.54 9.72426 11.7831 10.817C11.7831 10.8333 11.7683 10.8333 11.7534 10.8333V10.8007C12.1986 9.25127 9.88356 5.5163 8.68151 3.95055C8.66667 3.95055 8.66667 3.93424 8.66667 3.93424Z"
        fill="white" />
</svg>`;
const android = `<svg width="15" height="16" version="1.1" xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
    viewBox="0 0 475.071 475.071" style="enable-background:new 0 0 475.071 475.071;"
    xml:space="preserve" fill="white">
    <path d="M65.947,153.884c-8.183,0-15.136,2.853-20.844,8.566c-5.708,5.711-8.564,12.562-8.564,20.555v122.772
c0,8.179,2.855,15.126,8.564,20.837c5.708,5.712,12.657,8.562,20.841,8.562c8.186,0,15.085-2.851,20.699-8.562
c5.618-5.711,8.425-12.658,8.425-20.837V183.005c0-7.996-2.857-14.847-8.565-20.555C80.794,156.74,73.939,153.884,65.947,153.884z
" />
    <path d="M106.494,349.457c0,8.754,3.046,16.177,9.136,22.269c6.091,6.085,13.512,9.13,22.27,9.13h21.128l0.288,64.81
c0,8.186,2.855,15.129,8.564,20.841c5.708,5.711,12.562,8.565,20.555,8.565c8.188,0,15.133-2.854,20.844-8.565
c5.711-5.712,8.564-12.655,8.564-20.841v-64.81h39.397v64.81c0,8.186,2.854,15.129,8.562,20.841
c5.715,5.711,12.662,8.565,20.848,8.565c8.179,0,15.126-2.854,20.834-8.565c5.708-5.712,8.559-12.655,8.559-20.841v-64.81h21.416
c8.56,0,15.89-3.039,21.98-9.13c6.092-6.092,9.138-13.515,9.138-22.269V159.308H106.494V349.457z" />
    <path d="M302.345,43.682L322.61,6.279c1.335-2.474,0.855-4.377-1.424-5.708c-2.478-1.143-4.38-0.572-5.708,1.714L294.918,39.97
c-18.082-7.994-37.205-11.991-57.384-11.991c-20.174,0-39.304,3.997-57.387,11.991L159.591,2.286
c-1.328-2.286-3.234-2.857-5.708-1.714c-2.285,1.331-2.758,3.234-1.426,5.708l20.271,37.402
c-20.559,10.467-36.923,25.076-49.108,43.824c-12.181,18.749-18.273,39.259-18.273,61.525h264.095
c0-22.266-6.091-42.777-18.273-61.525C338.982,68.758,322.717,54.148,302.345,43.682z M185.144,98.068
c-2.187,2.19-4.803,3.284-7.849,3.284c-3.046,0-5.614-1.093-7.71-3.284c-2.091-2.187-3.14-4.805-3.14-7.85
c0-3.046,1.049-5.664,3.14-7.854c2.093-2.19,4.665-3.282,7.71-3.282c3.042,0,5.659,1.091,7.849,3.282
c2.19,2.19,3.284,4.808,3.284,7.854C188.428,93.264,187.334,95.878,185.144,98.068z M305.489,98.068
c-2.098,2.19-4.668,3.284-7.713,3.284c-3.046,0-5.657-1.093-7.848-3.284c-2.19-2.187-3.281-4.805-3.281-7.85
c0-3.046,1.091-5.664,3.281-7.854c2.19-2.19,4.802-3.282,7.848-3.282c3.045,0,5.615,1.091,7.713,3.282
c2.088,2.19,3.139,4.808,3.139,7.854C308.628,93.264,307.58,95.878,305.489,98.068z" />
    <path d="M429.964,162.306c-5.708-5.614-12.655-8.422-20.841-8.422c-7.991,0-14.843,2.808-20.551,8.422
c-5.711,5.616-8.568,12.517-8.568,20.699v122.772c0,8.179,2.857,15.126,8.568,20.837c5.708,5.712,12.56,8.562,20.551,8.562
c8.186,0,15.133-2.851,20.841-8.562c5.715-5.711,8.568-12.658,8.568-20.837V183.005
C438.532,174.822,435.679,167.921,429.964,162.306z" />
</svg>`;
const nintendo = `<svg width="13" height="13" viewBox="0 0 13 13" fill="white" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.67443 13H7.67506C7.62406 13 7.58325 12.9591 7.58325 12.908V0.081761C7.58325 0.0408805 7.61385 0 7.66486 0H9.67443C11.5106 0 12.9999 1.49214 12.9999 3.33176V9.66824C12.9999 11.5079 11.5106 13 9.67443 13ZM11.4596 7.15409C11.4596 6.42846 10.8679 5.83569 10.1437 5.83569C9.41941 5.83569 8.83796 6.42846 8.82776 7.15409C8.82776 7.87972 9.41941 8.47248 10.1437 8.47248C10.8679 8.47248 11.4596 7.87972 11.4596 7.15409Z" fill="white"/>
    <path d="M2.16675 4.33333C2.16675 4.92917 2.65425 5.41667 3.25008 5.41667C3.84591 5.41667 4.33341 4.92917 4.33341 4.33333C4.33341 3.7375 3.84591 3.25 3.25008 3.25C2.64522 3.25 2.16675 3.72847 2.16675 4.33333Z" fill="white"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.45677 0H6.40457C6.45759 0 6.5 0.0408805 6.5 0.0919811V12.908C6.5 12.9591 6.45759 13 6.40457 13H3.45677C1.54812 13 0 11.5079 0 9.66824V3.33176C0 1.49214 1.54812 0 3.45677 0ZM3.45677 11.9575H5.41843V1.04245H3.45677C2.82055 1.04245 2.22675 1.28774 1.7814 1.71698C1.32545 2.14623 1.08157 2.71855 1.08157 3.33176V9.66824C1.08157 10.2814 1.33605 10.8538 1.7814 11.283C2.22675 11.7225 2.82055 11.9575 3.45677 11.9575Z" fill="white"/>
    </svg>`;

//Information msgs
const searchMsg = 'Search results';
const newMsg = 'New and trending';
const basedMsg = 'Based on player counts and release date';
const notFoundMsg = '<p>No serach results found</p>';

//Loading gif
const loadingGif = `<img width="30" src="../assets/other/loading.gif">`;

//Error msgs
const descriptionMsg = 'The description of this game is not available';
const unknownMsg = 'Unknown';

//Img not found
const urlImgNotFound = '../assets/img/main/img-not-found.jpg';


// ----------- Simple actions -------------

//Radio buttons changing view
groupRadio[0].addEventListener('input', () => {
    listCards.classList.remove('main__ul-grid--display');
});
groupRadio[1].addEventListener('input', () => {
    listCards.classList.add('main__ul-grid--display');
});

//Media query - Hiding one column style when passing to mobile version
const mediaQueryOneColHide = window.matchMedia("(max-width: 768px)");
mediaQueryOneColHide.addEventListener('change', () => {
    if (mediaQueryOneColHide.matches) {
        listCards.classList.remove('main__ul-grid--display');
        groupRadio[0].checked = 'checked';
        groupRadio[1].checked = '';
    }
});

//Logout events
[logoutButtonHeader, logoutButtonMenu].forEach(button => {
    button.addEventListener('click', () => {
        window.location.href = 'login.html';
        localStorage.clear();
    });
});

//Clicking outside box events - Modal, Menu and Suggestions
document.addEventListener('click', ({ path }) => {

    if (checkParent(path, menuOpenButton)) {
        menu.classList.add('showMenu');

    } else {
        if (!checkParent(path, menu) || checkParent(path, menuCloseButton)) {
            menu.classList.remove('showMenu');
        }
    }

    if (!checkParent(path, searchParent)) {
        searchParent.classList.remove('searchSuggestion')
    }

    if (!modalView.classList.contains('hidden') && !checkParent(path, modalView)) {
        closeModal();
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
    header.classList.toggle('showSearch');
});


// ---------- API connection ------------

//Api info
const url = 'https://api.rawg.io/api/games';
const key = 'e47665a812c8462aa8519397b488ec98';

const urlGeneral = `${url}?key=${key}`;
const optionalInfo = {
    method: "GET",
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
    }
};

//action = 0 ---> Load cards
//action = 1 ---> Load suggestions
//action = 2 ---> Load modal

const gamesRequest = async (url) => {

    try {

        let resp = await fetch(url, optionalInfo);

        if (resp.ok) {
            return await resp.json();
        }

    } catch (error) {
        console.log(error);
    }
}

// ---------------- Aux functions ---------------

const auxGenres = (genres) => {
    let genreString = '';

    if (genres.length !== 0) {
        genreString = '';
        genres.forEach(({ name }) => {
            if (genreString !== '') {
                genreString += ', ' + name;
            } else {
                genreString = name;
            }
        });
    }

    return genreString;
}
const auxDate = (date) => {
    const dateArr = (new Date(date)).toString().split(' ');
    return `${dateArr[1]} ${dateArr[2]} ${dateArr[3]}`;
}
const auxPlats = (platforms) => {

    let titles = '';
    let svgs = '';

    if (platforms !== []) {
        platforms.forEach(({ platform: { id, name } }) => {

            if (titles === '') {
                titles = name;

            } else {
                titles += ', ' + name;
            }

            switch (id) {
                case 1:
                    svgs += windows;
                    break;
                case 2:
                    svgs += play;
                    break;
                case 3:
                    svgs += xbox;
                    break;
                case 5:
                    svgs += apple;
                    break;
                case 6:
                    svgs += linux;
                    break;
                case 7:
                    svgs += nintendo;
                    break;
                case 8:
                    svgs += android;
                    break;
                default:
                    break;
            }
        });
    }


    return [svgs, titles];
}
const auxImgs = (results) => {
    let imgs = [];

    results.forEach(({ image }) => {
        imgs.push(image);
    });

    return imgs;
}

// ----------------- Cards --------------------

const loadCards = async (results, descriptionList) => {

    listCards.innerHTML = '';
    let number = 1;
    const div = document.createElement('div');

    results.forEach(({ name: title, genres, background_image: img, released: date, parent_platforms: platforms = [], id }) => {

        div.innerHTML = `<li class="main__card">
            <button class="main__card-button flex-start-column" onclick="openModal(${id}, event)">
                <div class="main__image-box">
                    <img class="main__image" src="${img || urlImgNotFound}" alt="${title} image">
                </div>

                <div class="main__info-container">
                    <div class="main__title-game">
                        <h3>${title}</h3>
                    </div>
                    <div class="main__play-icons flex-vertical">
                        ${auxPlats(platforms)[0]}
                    </div>
                    <div class="main__card-date">

                        <div class="main__text flex-space">
                            <p>Release date</p>
                            <p>${auxDate(date)}</p>
                        </div>
                        <div class="main__hr">
                            <hr>
                        </div>

                    </div>

                    <div class="main__number ">
                        <p>#${number}</p>
                    </div>

                    <div class="main__card-genre">

                        <div class="main__text flex-space">
                            <p>Genres</p>
                            <p>${auxGenres(genres)}</p>
                        </div>

                        <div class="main__hr">
                            <hr>
                        </div>

                    </div>

                    <div class="main__gift flex-horizontal-vertical">
                        <p><b>+</b></p>
                        <svg width="15" height="15" version="1.1" xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 16 16"
                            style="enable-background:new 0 0 16 16;" xml:space="preserve">

                            <path fill="white" class="st0" d="M3,2.5C3,1.1,4.1,0,5.5,0S8,1.1,8,2.5C8,1.1,9.1,0,10.5,0S13,1.1,13,2.5v0c0,0.1,0,0.3,0,0.5h2c0.6,0,1,0.4,1,1
    v1c0,0.6-0.4,1-1,1H1C0.4,6,0,5.6,0,5V4c0-0.6,0.4-1,1-1h2C3,2.8,3,2.7,3,2.5L3,2.5z M4.1,3H7V2.5C7,1.7,6.3,1,5.5,1S4,1.7,4,2.5
    C4,2.6,4,2.8,4.1,3C4.1,3,4.1,3,4.1,3z M9,3h2.9c0,0,0,0,0-0.1c0-0.2,0-0.3,0-0.4C12,1.7,11.3,1,10.5,1S9,1.7,9,2.5V3z M15,7v7.5
    c0,0.8-0.7,1.5-1.5,1.5l0,0H9V7H15z M2.5,16C1.7,16,1,15.3,1,14.5l0,0V7h6v9H2.5z" />
                        </svg>
                    </div>

                    <div class="main__card-description">
                        <p>${descriptionList[number - 1] || descriptionMsg}
                        </p>
                    </div>
                </div>

            </button>

        </li>`;

        listCards.append(div.firstChild);
        number++;
    });
}

// ----------------- Modal ------------------
const openModal = (id, event) => {
    event.stopPropagation();
    header.classList.remove('showSearch');
    modalWrapper.classList.remove('hidden');
    main.classList.add('modalView');
    modalRequest(`${url}/${id}?key=${key}`, `${url}/${id}/screenshots?key=${key}`);
}

const modalRequest = (urlDetails, urlScreens) => {
    modalView.innerHTML = loadingGif;

    Promise.all([gamesRequest(urlDetails), gamesRequest(urlScreens)])
        .then(values => {
            console.log(values);
            loadModal(values);
        })
        .catch(console.log);
}

const loadModal = ([{ description_raw: description, background_image: img, name: title, released: date, genres, parent_platforms: platforms, website, publishers: [publisher], developers: [developer] }, { results }]) => {

    const release = auxDate(date);
    const genresInfo = auxPlats(platforms);
    const screenshots = auxImgs(results);

    modalView.innerHTML = `<div class="modal__bg">
        <img src="${img || urlImgNotFound}" alt="${title} principal image">
        <div class="modal__bg-shadow">
        </div>
    </div>
    <button class="modal__cross" onclick="closeModal()">
        <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M16 8C16 10.1217 15.1571 12.1566 13.6569 13.6569C12.1566 15.1571 10.1217 16 8 16C5.87827 16 3.84344 15.1571 2.34315 13.6569C0.842855 12.1566 0 10.1217 0 8C0 5.87827 0.842855 3.84344 2.34315 2.34315C3.84344 0.842855 5.87827 0 8 0C10.1217 0 12.1566 0.842855 13.6569 2.34315C15.1571 3.84344 16 5.87827 16 8ZM5.354 4.646C5.26011 4.55211 5.13278 4.49937 5 4.49937C4.86722 4.49937 4.73989 4.55211 4.646 4.646C4.55211 4.73989 4.49937 4.86722 4.49937 5C4.49937 5.13278 4.55211 5.26011 4.646 5.354L7.293 8L4.646 10.646C4.59951 10.6925 4.56264 10.7477 4.53748 10.8084C4.51232 10.8692 4.49937 10.9343 4.49937 11C4.49937 11.0657 4.51232 11.1308 4.53748 11.1916C4.56264 11.2523 4.59951 11.3075 4.646 11.354C4.73989 11.4479 4.86722 11.5006 5 11.5006C5.06574 11.5006 5.13084 11.4877 5.19158 11.4625C5.25232 11.4374 5.30751 11.4005 5.354 11.354L8 8.707L10.646 11.354C10.6925 11.4005 10.7477 11.4374 10.8084 11.4625C10.8692 11.4877 10.9343 11.5006 11 11.5006C11.0657 11.5006 11.1308 11.4877 11.1916 11.4625C11.2523 11.4374 11.3075 11.4005 11.354 11.354C11.4005 11.3075 11.4374 11.2523 11.4625 11.1916C11.4877 11.1308 11.5006 11.0657 11.5006 11C11.5006 10.9343 11.4877 10.8692 11.4625 10.8084C11.4374 10.7477 11.4005 10.6925 11.354 10.646L8.707 8L11.354 5.354C11.4005 5.30751 11.4374 5.25232 11.4625 5.19158C11.4877 5.13084 11.5006 5.06574 11.5006 5C11.5006 4.93426 11.4877 4.86916 11.4625 4.80842C11.4374 4.74768 11.4005 4.69249 11.354 4.646C11.3075 4.59951 11.2523 4.56264 11.1916 4.53748C11.1308 4.51232 11.0657 4.49937 11 4.49937C10.9343 4.49937 10.8692 4.51232 10.8084 4.53748C10.7477 4.56264 10.6925 4.59951 10.646 4.646L8 7.293L5.354 4.646Z" />
        </svg>
    </button>
    <div class="modal__icons flex-vertical">
        ${genresInfo[0]}
    </div>
    <div class="modal__title">
        <h1>${title}</h1>
    </div>

    <div class="modal__top flex-start">
        <div class="modal__top-box flex-horizontal-vertical">
            <p>${release}</p>
        </div>
        <div class="modal__top-box flex-horizontal-vertical">
            <p><strong>#1</strong></p>
            <p>TOP 2021</p>
        </div>
        <div class="modal__top-box flex-horizontal-vertical">
            <p><strong>#342</strong></p>
            <p>RPG</p>
        </div>
    </div>

    <div class="modal__buttons flex-start">
        <button class="modal__button modal__button--buy flex-horizontal-vertical">
            <p>Where to <b>BUY</b></p>
            <p><b>+</b></p>
        </button>
        <button class="modal__button modal__button--wish flex-horizontal-vertical">
            <p>Add to<br><b>WISH LIST</b></p>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px" y="0px" viewBox="0 0 16 16" style="enable-background:new 0 0 16 16;"
                xml:space="preserve" fill="white">
                <path d="M3,2.5C3,1.1,4.1,0,5.5,0S8,1.1,8,2.5C8,1.1,9.1,0,10.5,0S13,1.1,13,2.5v0c0,0.1,0,0.3,0,0.5h2c0.6,0,1,0.4,1,1
    v1c0,0.6-0.4,1-1,1H1C0.4,6,0,5.6,0,5V4c0-0.6,0.4-1,1-1h2C3,2.8,3,2.7,3,2.5L3,2.5z M4.1,3H7V2.5C7,1.7,6.3,1,5.5,1S4,1.7,4,2.5
    C4,2.6,4,2.8,4.1,3C4.1,3,4.1,3,4.1,3z M9,3h2.9c0,0,0,0,0-0.1c0-0.2,0-0.3,0-0.4C12,1.7,11.3,1,10.5,1S9,1.7,9,2.5V3z M15,7v7.5
    c0,0.8-0.7,1.5-1.5,1.5l0,0H9V7H15z M2.5,16C1.7,16,1,15.3,1,14.5l0,0V7h6v9H2.5z" />
            </svg>
        </button>
    </div>

    <div class="modal__description">
        <p>${description || descriptionMsg}</p>
    </div>

    <div class="modal__comment-review flex-start">
        <button class="modal__button-bot modal__button-bot--comment flex-horizontal-vertical">
            <p>Leave a comment</p>
            <svg viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M8 14C12.418 14 16 10.866 16 7C16 3.134 12.418 0 8 0C3.582 0 0 3.134 0 7C0 8.76 0.744 10.37 1.969 11.6C1.873 12.616 1.553 13.73 1.199 14.566C1.12 14.752 1.272 14.96 1.472 14.928C3.728 14.558 5.069 13.99 5.653 13.694C6.41859 13.8982 7.20765 14.0011 8 14ZM4 6C4.55228 6 5 6.44772 5 7C5 7.55228 4.55228 8 4 8C3.44772 8 3 7.55228 3 7C3 6.44772 3.44772 6 4 6ZM9 7C9 6.44772 8.55229 6 8 6C7.44772 6 7 6.44772 7 7C7 7.55228 7.44772 8 8 8C8.55229 8 9 7.55228 9 7ZM13 7C13 7.55228 12.5523 8 12 8C11.4477 8 11 7.55228 11 7C11 6.44772 11.4477 6 12 6C12.5523 6 13 6.44772 13 7Z"
                    fill="white" />
            </svg>
        </button>
        <button class="modal__button-bot modal__button-bot--write flex-horizontal-vertical">
            <p>Write a review</p>
            <p><b>+</b></p>
        </button>
    </div>

    <div class="modal__images flex-space">

        <div>
            <img src="${screenshots[1] || urlImgNotFound}" alt="Modal first game image">
        </div>
        <div>
            <img src="${screenshots[2] || urlImgNotFound}" alt="Modal second game image">
        </div>
        <div>
            <img src="${screenshots[3] || urlImgNotFound}" alt="Modal third game image">
        </div>
        <div>
            <img src="${screenshots[4] || urlImgNotFound}" alt="Modal fourth game image">
        </div>
        <div class="modal__img-special">
            <div>
            </div>
            <img src="${screenshots[5] || urlImgNotFound}" alt="Modal fifth game image">
            <p>View all</p>
            <svg viewBox="0 0 9 2" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M1.02823 1.875C0.460355 1.875 0 1.45527 0 0.9375C0 0.419733 0.460355 0 1.02823 0C1.59611 0 2.05647 0.419733 2.05647 0.9375C2.05647 1.45527 1.59611 1.875 1.02823 1.875ZM4.4557 1.87512C3.88783 1.87512 3.42747 1.45539 3.42747 0.937622C3.42747 0.419855 3.88783 0.00012207 4.4557 0.00012207C5.02358 0.00012207 5.48394 0.419855 5.48394 0.937622C5.48394 1.45539 5.02358 1.87512 4.4557 1.87512ZM6.85486 0.937622C6.85486 1.45539 7.31522 1.87512 7.8831 1.87512C8.45097 1.87512 8.91133 1.45539 8.91133 0.937622C8.91133 0.419855 8.45097 0.00012207 7.8831 0.00012207C7.31522 0.00012207 6.85486 0.419855 6.85486 0.937622Z"
                    fill="white" />
            </svg>
        </div>
    </div>

    <div class="modal__links flex-start-column">
        <div class="modal__link flex-start-column">
            <p>Platforms</p>
            <a>${genresInfo[1] || unknownMsg}</a>
        </div>
        <div class="modal__link flex-start-column">
            <p>Release date</p>
            <a>${release}</a>
        </div>
        <div class="modal__link flex-start-column">
            <p>Publisher</p>
            <a>${publisher?.name || unknownMsg}</a>
        </div>
        <div class="modal__link flex-start-column">
            <p>Website</p>
            <a>${website || unknownMsg}</a>
        </div>
        <div class="modal__link flex-start-column">
            <p>Genre</p>
            <a>${auxGenres(genres) || unknownMsg}</a>
        </div>
        <div class="modal__link flex-start-column">
            <p>Developer</p>
            <a>${developer?.name || unknownMsg}</a>
        </div>
        <div class="modal__link flex-start-column">
            <p>Age rating</p>
            <a>Not rated</a>
        </div>

    </div>`;
}

const closeModal = () => {
    modalWrapper.classList.add('hidden');
    modalView.innerHTML = '';
    main.classList.remove('modalView');
}


// ------------ Search -----------------

let hasSearch = true;
let lastSearch = '';

searchInput.addEventListener('keyup', (evt) => {

    const inputValue = (searchInput.value).trim();

    if (inputValue.length > 2) {

        if (evt.keyCode === 13) {

            if (inputValue !== lastSearch) {
                hasSearch = true;
                lastSearch = inputValue;
                searchFor.innerHTML = searchMsg;
                searchValue.innerHTML = `${inputValue}`;
                searchRequest(`${urlGeneral}&search=${inputValue}`);
            }
        } else {

            // suggestionRequest(inputValue);
        }

    }

});

const searchRequest = (url = urlGeneral) => {

    listCards.innerHTML = loadingGif;
    loadingState(true);

    gamesRequest(url)
        .then(({ results }) => {

            if (results.length > 0) {

                Promise.all(getPromises(results))
                    .then((responses) => {
                        let descriptionList = [];
                        responses.forEach(({ description_raw: description }) => {
                            descriptionList.push(description);
                        });
                        loadCards(results, descriptionList);
                        loadingState(false);
                    });

            } else {
                listCards.innerHTML = notFoundMsg;
            }

        })
}

const getPromises = (results) => {

    let promises = [];

    results.forEach(({ id }) => {
        promises.push(gamesRequest(`${url}/${id}?key=${key}`));
    });

    return promises;
}

const loadingState = (bool) => {
    searchInput.disabled = bool;
    groupRadio.forEach(radio => {
        radio.disabled = bool;
    });

    // if (bool) {
    //     homeButton.href = '';
    //     // console.log('hola');
    // } else {
    //     // console.log('chau');
    //     homeButton.href = 'javascript: homeAction()';
    // }

}

const homeAction = () => {

    if (hasSearch) {

        hasSearch = false;
        lastSearch = '';
        searchInput.value = '';
        searchFor.innerHTML = newMsg;
        searchValue.innerHTML = basedMsg;
        listCards.innerHTML = loadingGif;

        searchRequest();
    }
}

//Popular page load
homeAction();


// ------------- Suggestions --------------

// const suggestionRequest = (url) => {

//     gamesRequest(url).then(({ results }) => {

//     });
// }

// // Load suggestions
// const loadSuggestions = (results) => {
//     let count = 0;
//     results.forEach(({ name, id }) => {
//         buttonsSuggestion[count].innerHTML = `${name}`;
//         buttonsSuggestion[count].setAttribute('value', `${name}`);
//         count++;
//     });
// }

// //Suggestion addings
// buttonsSuggestion.forEach(button => {
//     button.addEventListener('click', () => {
//         const inputValue = button.getAttribute('value');

//         if (inputValue === '') {
//             homeAction();

//         } else {
//             searchParent.classList.remove('searchSuggestion');
//             searchInput.value = inputValue
//             searchAction(inputValue);
//             lastSearch = inputValue;
//         }
//     });
// });

// searchInput.addEventListener('click', () => {
//     if (searchInput.value.trim().length > 2) {
//         searchParent.classList.add('searchSuggestion');
//     }
// });

// const clearSuggestions = () => {
//     buttonsSuggestion.forEach(button => {
//         button.innerHTML = '...';
//         button.setAttribute('value', '');
//     });
// }