// Menu code
const openMenuBtn = document.getElementById("openBtn");
const closeMenuBtn = document.getElementById("closeBtn");
const Menu = document.querySelector(".container-navbar");

function infiniteLoop(){
    function eventOpen(){
        Menu.classList.toggle('active');
    }  
    function eventClose(){
        Menu.classList.toggle('active');
    }
    
    openMenuBtn.addEventListener('click', eventOpen);
    closeMenuBtn.addEventListener('click', eventClose);
}

infiniteLoop()
