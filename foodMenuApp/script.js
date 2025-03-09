const buttons = document.querySelectorAll(".button");
const menus = document.querySelectorAll(".menu");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const category = button.getAttribute("category");

    if (category == "all") {
      menus.forEach((menu) => {
        menu.style.display = "flex";
      });
    } else {
      menus.forEach((menu) => {
        menu.style.display = "none";
      });
      document
        .querySelectorAll(`.menu[category="${category}"]`)
        .forEach((menu) => {
          menu.style.display = "flex";
        });
    }
  });
});
