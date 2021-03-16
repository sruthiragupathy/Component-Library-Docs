const hamburgerEl = document.querySelector(".hamburger-menu");
const mobilemenuEl = document.querySelector(".menu__mobile-none");

//functions
const hamburgerClickHandler = () => {
    console.log("hi")
    
    hamburgerEl.classList.contains("click") ? 
        hamburgerEl.classList.remove("click") : hamburgerEl.classList.add("click")
    mobilemenuEl.classList.contains("menu__mobile") ? 
        mobilemenuEl.classList.remove("menu__mobile") : mobilemenuEl.classList.add("menu__mobile")
}

//EventListeners
hamburgerEl.addEventListener("click",hamburgerClickHandler);