const navbarSelector = 'nav.navbar'
const navbar = document.querySelector(navbarSelector)

window.addEventListener('scroll', () => 
    window.scrollY > 10 ? navbar.classList.add('small') : navbar.classList.remove('small')
)
