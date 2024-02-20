// Menu  hamberger
const menuHamburger = document.querySelector(".menu-hamburger");
console.log(menuHamburger);
        const navLinks = document.querySelector(".navbar__liens");
 
        menuHamburger.addEventListener('click',()=>{
            menuHamburger.classList.toggle("menu-hamburger-rotate");
            navLinks.classList.toggle('mobile-menu');
        })


// Fonction pour gérer l'événement de défilement
const profileBack = document.querySelector(".profile-back__color");

window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    if (scrollTop > 800) {
        profileBack.style.visibility = "visible";
        profileBack.style.animation = "animateImg 1.5s ease-in-out";
    }
});


// Gestion Arrows scrollY 100vh

const arrows = document.querySelectorAll(".black-arrow");

arrows.forEach(arrow => arrow.addEventListener("click", (event) => {
    const fullHeight = document.documentElement.scrollHeight;
 
    window.scrollTo({
        top: fullHeight,
        behavior: 'smooth'
    });
}));

