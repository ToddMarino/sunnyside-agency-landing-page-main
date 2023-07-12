const menuIcon = document.querySelector('.menu-icon')
const navMenu = document.querySelector('[data-nav]')
const header = document.querySelector('header')
const heroTitle = document.querySelector('.hero--title')
const heroImage = document.querySelector('.hero--image')

let isOpen = false

menuIcon.addEventListener('click', () => {
    if (isOpen === true) {
        navMenu.classList.remove('menu-open')
        heroTitle.classList.remove('hidden')
        heroImage.classList.remove('hidden')
        isOpen = false
    } else {
        navMenu.classList.add('menu-open')
        heroTitle.classList.add('hidden')
        heroImage.classList.add('hidden')
        isOpen = true
}


})