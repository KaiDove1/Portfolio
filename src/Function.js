
/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

if (navClose) {
    console.log("Close button found!");
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
        console.log("Close button clicked!");
    });
} else {
    console.log("Close button not found!");
}