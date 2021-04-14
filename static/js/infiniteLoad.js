(function () {
  const wrapper = document.querySelector(".infinite");
  const items = document.querySelectorAll(".infinite__item");
  const button = document.querySelector(".infinite__button");

  // items.forEach((item, index) => {
  //   let attribute = document.createAttribute("data-index")
  //   attribute.value = index
  //   item.setAttributeNode(attribute)
  // })

  button.addEventListener("click", e => {
    if (window.innerWidth > 992) {
      Array.prototype.slice
        .call(items)
        .filter(item => item.classList.contains("hidden"))
        .forEach((item, index) => {
          if (index < 12) {
            item.classList.remove("hidden");
            item.classList.add("skeleton");

            setTimeout(() => {
              item.classList.remove("skeleton");
            }, Math.floor(Math.random() * (4000 - 1000 + 1)) + 1000);

            if (item.getAttribute("data-index") == items.length - 1) {
              button.style.display = "none";
            }
          }
        });
    } else if (window.innerWidth > 576) {
      Array.prototype.slice
        .call(items)
        .filter(item => item.classList.contains("hidden"))
        .forEach((item, index) => {
          if (index < 8) {
            item.classList.remove("hidden");
            item.classList.add("skeleton");

            setTimeout(() => {
              item.classList.remove("skeleton");
            }, Math.floor(Math.random() * (4000 - 1000 + 1)) + 1000);

            if (item.getAttribute("data-index") == items.length - 1) {
              button.style.display = "none";
            }
          }
        });
    } else {
      Array.prototype.slice
        .call(items)
        .filter(item => item.classList.contains("hidden"))
        .forEach((item, index) => {
          if (index < 4) {
            item.classList.remove("hidden");
            item.classList.add("skeleton");

            setTimeout(() => {
              item.classList.remove("skeleton");
            }, Math.floor(Math.random() * (4000 - 1000 + 1)) + 1000);

            if (item.getAttribute("data-index") == items.length - 1) {
              button.style.display = "none";
            }
          }
        });
    }
  });
})();
