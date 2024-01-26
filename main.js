const navItems = document.querySelector('.navItems')
const navbar = document.querySelector('.navbar')
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

    console.log(isOpen)
    if(isOpen) {
        navbar.classList.add('navbarIsOpen')
        navbarIcon.classList.remove('isOpenIcon')
        navbarCloseIcon.classList.add('isOpenIcon')
    } else {
        navbar.classList.remove('navbarIsOpen')
        navbarIcon.classList.add('isOpenIcon')
        navbarCloseIcon.classList.remove('isOpenIcon')
    }

    document.html.style.overflow = isOpen ? 'hidden' : 'auto'
}

window.addEventListener('resize', () => {
    document.html.style.overflow = isOpen && window.innerWidth < 768 ? 'hidden' : 'auto'
})

headerToggleButton.addEventListener('click', openMenu)

const openCollapse = () => {
    isOpenCollapse = !isOpenCollapse
    collapseContent.style.display = isOpenCollapse ? 'flex' : 'none'
    collapseIcon.style.transform = isOpenCollapse ? 'rotate(90deg)' : 'rotate(0)'
}

navItemCollapse.addEventListener('click', openCollapse)

const addEvents = (duplicatedItem, index) => {
    duplicatedItem.setAttribute("aria-hidden", true);
    duplicatedItem.addEventListener('mouseover', () => {
        pauseAnimation('add', index);
    });
    duplicatedItem.addEventListener('mouseout', () => {
        pauseAnimation('remove', index);
    });
};

const addAnimation = () => {

    slides.forEach((slide, index) => {
        const sliderContainer = slide.querySelector('.sliderContainer');
        const slideContent = Array.from(sliderContainer.children);

        slideContent.forEach((item) => {
            const duplicatedItem = item.cloneNode(true);
            addEvents(duplicatedItem, index);
            sliderContainer.appendChild(duplicatedItem);
        });
    });
}

addAnimation()