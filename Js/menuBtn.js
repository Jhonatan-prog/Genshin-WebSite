const openMenuBtn = document.querySelector('.Open-Menu');
const closeMenuBtn = document.querySelector('Close-Menu');
const MenuBody = document.querySelector('container-navbar');

openMenuBtn.addEventListener('click', () => {
    MenuBody.classList.toggle('Open')
})