const hamburgerEl = document.querySelector(".hamburger-menu");

//functions
const hamburgerClickHandler = () => (
    hamburgerEl.classList.contains("click") ? 
        hamburgerEl.classList.remove("click") : hamburgerEl.classList.add("click")
  )

//EventListeners
hamburgerEl.addEventListener("click",hamburgerClickHandler);