const hamburger = document.querySelector('.js-hamburger');


hamburger.addEventListener('click', event => {
  document.body.classList.toggle('menu-is-open');
});