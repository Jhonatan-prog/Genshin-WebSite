// Menu code
const openMenuBtn = document.getElementById("openBtn");
const closeMenuBtn = document.getElementById("closeBtn");
const Menu = document.querySelector(".container-li-menu")

function MenuCode() {
    openMenuBtn.addEventListener('click', () => {
        Menu.classList.toggle('transition');
    })
    closeMenuBtn.addEventListener('click', () => {
        Menu.classList.toggle('transition');
    }) 
}

MenuCode();