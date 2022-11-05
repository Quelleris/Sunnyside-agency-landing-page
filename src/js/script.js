const navbar = document.querySelector('[data-navbar]');
const navToggle = document.querySelector('.nav-mobile-toggle');
const header = document.querySelector('[data-header]');
const body = document.querySelector('body');

navToggle.addEventListener('click', () => {
    if (navbar.classList.contains('active')) {
        navToggle.classList.remove('active');
        navbar.classList.remove('active');
        body.classList.remove('body-fixed');
    } else {
        navToggle.classList.add('active');
        navbar.classList.add('active');
        body.classList.add('body-fixed');
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
