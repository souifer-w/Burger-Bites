const dash = document.querySelector(".dash-b");
const menu = document.querySelector(".nav");
dash.addEventListener("click", () => {
  menu.classList.toggle("open");
});

addEventListener("DOMContentLoaded", () => {
  const prev = document.querySelector(".prev");
  const next = document.querySelector(".next");
  const review = document.querySelector(".js-reviwe");
  const person = document.querySelector(".js-person");
  let index = 0;
  const reviews = [
    {
      review:
        "Absolutely loved the Veggie Delight Burger! Fresh ingredients and perfect flavor. Will definitely come back for more!",
      namePersone: "John",
    },
    {
      review:
        "Fast delivery and the burger was still hot and juicy. The flavors were amazing! My new favorite spot.",
      namePersone: "Maria",
    },
    {
      review:
        "The Spicy Chicken Burger had just the right kick! Generous portions and the staff were super helpful. Thumbs up!",
      namePersone: "Kevin",
    },
    {
      review:
        "Best burger experience ever! The ambiance, service, and of course, the burger itself were top-notch. Can't wait to return!",
      namePersone: "Sophia",
    },
    {
      review:
        "Incredible taste and perfectly cooked! I appreciate how consistent they are with quality. Highly recommended for burger lovers!",
      namePersone: "Daniel",
    },
  ];
  prev.addEventListener("click", () => {
    index = (index - 1 + reviews.length) % reviews.length;

    review.style.opacity = 0;
    person.style.opacity = 0;
    setTimeout(() => {
      review.innerHTML = reviews[index].review;
      person.innerHTML = reviews[index].namePersone;
      review.style.opacity = 1;
      person.style.opacity = 1;
    }, 300);
  });
  next.addEventListener("click", () => {
    index = (index + 1) % reviews.length;

    review.style.opacity = 0;
    person.style.opacity = 0;
    setTimeout(() => {
      review.innerHTML = reviews[index].review;
      person.innerHTML = reviews[index].namePersone;
      review.style.opacity = 1;
      person.style.opacity = 1;
    }, 500);
  });
});
