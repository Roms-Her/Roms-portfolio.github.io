// Menu  hamberger
const menuHamburger = document.querySelector(".menu-hamburger");
console.log(menuHamburger);
        const navLinks = document.querySelector(".navbar__liens");
 
        menuHamburger.addEventListener('click',()=>{
            menuHamburger.classList.toggle("menu-hamburger-rotate");
            navLinks.classList.toggle('mobile-menu');
        })
