const card = document.getElementById("card");
const cash = document.getElementById("cash");
const cardFields = document.querySelector(".card-fields");

const cashFields = document.querySelector(".cash-fields");
card.addEventListener("change", () => {
  cardFields.style.display = "block";

  cashFields.style.display = "none";
});
cash.addEventListener("change", () => {
  cardFields.style.display = "none";
  cashFields.style.display = "block";
});
