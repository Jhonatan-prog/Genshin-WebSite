// Menu code
const openMenuBtn = document.getElementById("openBtn");
const closeMenuBtn = document.getElementById("closeBtn");
const Menu = document.querySelector(".container-navbar");

function ButtonsMenu(){

    openMenuBtn.addEventListener('click', () => {
        Menu.classList.toggle('active')
    })
    
    closeMenuBtn.addEventListener('click', () => {
        Menu.classList.toggle('active')
    })

}

ButtonsMenu()

// Indexers code (contents)