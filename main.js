// Duplicar linea: CTRL+Alt+Abajo
// Eliminar línea: Shift+Suprim
// Comentar código: CTRL+K seguido CTRL+C
// Código comillas simples: Alt+39
// Mueve línea a otra parte: Alt

const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
}
function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive');
}
