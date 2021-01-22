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
const portfolioLinkText = document.getElementById('portfolio_link_text')

portfolioItem1.addEventListener('mouseover', () => {

    portfolioLinkText.style.display = 'block';
    portfolioLinkText.style.transition = 'ease .8s';
    
})

portfolioItem1.addEventListener('mouseout', () => {

    portfolioLinkText.style.display = 'none';
})


 */