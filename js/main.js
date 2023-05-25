document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector(".mob-menu");
  const menu = document.querySelector(".menu-wrapper");
  const menuItems = document.querySelectorAll(".menu-item-click");

  menuBtn.addEventListener("click", () => {
    if (getComputedStyle(menu).display === "flex") {
      menu.style.display = "none";
      document.body.style.overflow = "auto";
    } else {
      menu.style.display = "flex";
      window.scrollTo(0, 0);
      document.body.style.overflow = "hidden";
    }
  });

  menuItems.forEach((el) => {
    el.addEventListener("click", () => {
      menu.style.display = "none";
      document.body.style.overflow = "auto";
    });
  });

  //document.body.style.overflow = 'hidden';
});
