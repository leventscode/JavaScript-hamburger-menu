const menuIcon = document.getElementById("menu-icon")
const menu     = document.querySelector(".dropdown-menu")

menuIcon.addEventListener("click", () => {
    if(!menu.classList.contains('show')) {
      menu.classList.add('show');
      menu.classList.remove('hide');
    } else {
      menu.classList.remove('show');
      menu.classList.add('hide');
    }
});