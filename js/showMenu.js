/******************* 
*** REQUIRE STATEMENTS
*******************/
const buttonMenu = document.querySelector("#header-menuBtn");
const nav = document.querySelector("#nav");
const openMenuButton = document.querySelector("#header-menuIcons-open");
const closeMenuButton = document.querySelector("#header-menuIcons-close");

/******************* 
*** CLICK EVENT
*******************/
buttonMenu.addEventListener("click", showMenu);

/******************* 
*** SHOW MENU
*******************/
function showMenu() {
    if (document.querySelector(".show")) {
        nav.removeAttribute("class");
        openMenuButton.removeAttribute("class");
        closeMenuButton.removeAttribute("class");
    } else {
        nav.setAttribute("class", "show");
        openMenuButton.setAttribute("class", "show");
        closeMenuButton.setAttribute("class", "show");
    }

    // another alternative:
    // nav.classList.toggle("show");
};