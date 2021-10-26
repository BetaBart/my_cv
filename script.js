const burgerMenu = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');

burgerMenu.addEventListener('click', () => {
    navbar.classList.toggle('open');
    burgerMenu.classList.toggle('open');
});

navbar.addEventListener('click', () => {
    navbar.classList.toggle('open');
    burgerMenu.classList.toggle('open');
});

console.log('135 points');