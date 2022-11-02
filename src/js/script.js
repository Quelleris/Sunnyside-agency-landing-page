const navbar = document.querySelector('[data-navbar]');
const navToggle = document.querySelector('.nav-mobile-toggle');
const header = document.querySelector('[data-header]');

navToggle.addEventListener('click', () => {
    if (navbar.classList.contains('active')) {
        navToggle.classList.remove('active');
        navbar.classList.remove('active');
    } else {
        navToggle.classList.add('active');
        navbar.classList.add('active');
    }
})

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('fixed');
        console.log('sticky');
    } else {
        header.classList.remove('fixed');
        console.log('static');
    }
})