const menuIcon = document.getElementById('menu-icon')
const navMenu = document.querySelector('.nav__menu')

menuIcon.addEventListener('click', function () {
    navMenu.classList.toggle('hidden')
})