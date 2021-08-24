let button = document.querySelector('.main-nav__toggle');
let form = document.querySelector('.main-nav__list');
form.classList.add('main-nav__list--hidden');
button.onclick = function() {
    form.classList.toggle('main-nav__list--hidden');
}
