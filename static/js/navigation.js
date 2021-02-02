;(function () {
  // ELEMENTS
  const menu = document.querySelector(".navigation-menu")
  const mobileMenuToggle = document.querySelector(".mobile-menu__toggle")

  // VARIABLES
  let open = false

  // ADD EVENT LISTENER
  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener("click", toggleMobileMenu)
  }

  // TOGGLE MENU FUNCTION
  function toggleMobileMenu() {
    if (open) {
      menu.classList.remove("open")
      mobileMenuToggle.classList.remove("open")
      open = false
    } else {
      menu.classList.add("open")
      mobileMenuToggle.classList.add("open")
      open = true
    }
  }
})()
