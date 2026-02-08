const sections = document.querySelectorAll(".menu-section");
const selector = document.getElementById("selector");
const buttons = document.querySelectorAll("[data-name]");
let activeBtn;
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const name = btn.dataset.name;

    buttons.forEach((b) => b.classList.remove("active"));

    btn.classList.add("active");
    sections.forEach((section) => {
      if (name === "All" || section.dataset.name === name) {
        section.style.display = "flex";
      } else {
        section.style.display = "none";
      }
    });
  });
  selector.addEventListener("change", () => {
    const selectedOptions = selector.options[selector.selectedIndex];
    const name = selectedOptions.dataset.name;
    sections.forEach((section) => {
      if (name === "All" || section.dataset.name === name) {
        section.style.display = "flex";
      } else {
        section.style.display = "none";
      }
    });
  });
});
