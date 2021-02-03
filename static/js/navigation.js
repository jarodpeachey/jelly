(function () {
  // ELEMENTS
  const menu = document.querySelector(".navigation-menu");
  const mobileMenuToggle = document.querySelector(".mobile-menu__toggle");
  const wrapper = document.getElementById("wrapper");
  const menuItems = document.querySelectorAll(".menu__item");

  // VARIABLES
  let open = false;

  // ADD EVENT LISTENER
  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener("click", toggleMobileMenu);
  }

  document.addEventListener("scroll", e => {
    if (window.scrollY > 80) {
      document.querySelector("nav").classList.add("scrolled");
    } else {
      document.querySelector("nav").classList.remove("scrolled");
    }
  });

  menuItems.forEach(item => {
    item.addEventListener("click", e => {
      menu.classList.remove("open");
      mobileMenuToggle.classList.remove("open");
      wrapper.classList.remove("blur");
    });
  });

  // TOGGLE MENU FUNCTION
  function toggleMobileMenu() {
    if (open) {
      menu.classList.remove("open");
      mobileMenuToggle.classList.remove("open");
      wrapper.classList.remove("blur");
      open = false;
    } else {
      menu.classList.add("open");
      mobileMenuToggle.classList.add("open");
      wrapper.classList.add("blur");
      open = true;
    }
  }
})();
