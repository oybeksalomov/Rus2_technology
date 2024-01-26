const navbar = document.querySelector('.navbar')
const navItems = navbar.querySelector('.navItems')
const headerToggleButton = document.querySelector('.headerToggle')
const navbarIcon = headerToggleButton.querySelector('#openIcon')
const navbarCloseIcon = headerToggleButton.querySelector('#closeIcon')
const slides = document.querySelectorAll('.slider')
const navItemCollapse = document.querySelector('.navItemCollapse')
const collapseContent = document.querySelector('.collapseContent')
const collapseIcon = navItemCollapse.querySelector('.collapseIcon')

let isOpen = false
let isOpenCollapse = false

const openMenu = () => {
    isOpen = !isOpen

    if(isOpen) {
        navbar.classList.add('navbarIsOpen')
        navbarIcon.classList.remove('isOpenIcon')
        navbarCloseIcon.classList.add('isOpenIcon')
    } else {
        navbar.classList.remove('navbarIsOpen')
        navbarIcon.classList.add('isOpenIcon')
        navbarCloseIcon.classList.remove('isOpenIcon')
    }

    document.documentElement.style.overflow = isOpen ? 'hidden' : 'auto'
}

headerToggleButton.addEventListener('click', openMenu)

const openCollapse = () => {
    isOpenCollapse = !isOpenCollapse
    collapseContent.style.display = isOpenCollapse ? 'flex' : 'none'
    collapseIcon.style.transform = isOpenCollapse ? 'rotate(90deg)' : 'rotate(0)'
}

navItemCollapse.addEventListener('click', openCollapse)

window.addEventListener('resize', () => {
    document.documentElement.style.overflow = isOpen && window.innerWidth < 768 ? 'hidden' : 'auto'
    if(window.innerWidth > 768 && isOpen) {
        openMenu()
        if(isOpenCollapse) {
            openCollapse()
        }
    }
})

const addEvents = (duplicatedItem) => {
    duplicatedItem.setAttribute("aria-hidden", true);
};

const addAnimation = () => {

    slides.forEach((slide) => {
        const sliderContainer = slide.querySelector('.sliderContainer');
        const slideContent = Array.from(sliderContainer.children);

        slideContent.forEach((item) => {
            const duplicatedItem = item.cloneNode(true);
            addEvents(duplicatedItem);
            sliderContainer.appendChild(duplicatedItem);
        });
    });
}

addAnimation()
