let button = document.querySelector('.main-nav__toggle');
let modal = document.querySelector('.main-nav__list');
modal.classList.add('main-nav__list--hidden');
button.onclick = function() {
    modal.classList.toggle('main-nav__list--hidden');
}
