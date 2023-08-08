const mobileNavMenu = document.querySelector('.mobile-navigation-menu');
const hamburgerMenuIcon = document.querySelector('.ham-menu');

hamburgerMenuIcon.addEventListener('mousedown', function() {
    mobileNavMenu.style.display = "flex";
})

const mobileMenuCloseIcon = document.querySelector('.mobile-nav-close');
mobileMenuCloseIcon.addEventListener('mousedown', function() {
    mobileNavMenu.style.display = "none";
})