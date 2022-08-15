const openMenuBtn = document.querySelector('.Open-Menu');
const closeMenuBtn = document.querySelector('Close-Menu');

openMenuBtn.addEventListener('click', () => {
    MenuBody.classList.toggle('Open')
})