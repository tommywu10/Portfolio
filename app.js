const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

//------------------------------------------------------------------

/* const portfolioItem1 = document.querySelector('.portfolio__item-1')

portfolioItem1.addEventListener('mouseover', () => {
    const text = "My Musician Website"
    portfolioItem1.innerHTML = text;

}) */