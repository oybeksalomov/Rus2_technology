const navItems = document.querySelector('.navItems')
const navbar = document.querySelector('.navbar')
const headerToggleButton = document.querySelector('.headerToggle')
const navbarIcon = headerToggleButton.querySelector('#openIcon')
const navbarCloseIcon = headerToggleButton.querySelector('#closeIcon')

headerToggleButton.addEventListener('click', () => {
    navbar.classList.toggle('navbarIsOpen')
    navbarIcon.classList.toggle('isOpenIcon')
    navbarCloseIcon.classList.toggle('isOpenIcon')
})