const menuIcon = document.querySelector(".menu-icon");
const navlist = document.querySelector(".nav-bar");

if (menuIcon) {
    menuIcon.addEventListener("click", () => {
        navlist.classList.toggle("open");
    });
}