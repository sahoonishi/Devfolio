//--------------------------------- SLIDING LOGIC ---------------------------------------

document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".category-cards");
  const arrows = document.querySelectorAll(".arrow");
  const leftArrow = arrows[0];
  const rightArrow = arrows[1];
  const dots = document.querySelectorAll(".progress-dots .dot");

  let currentDot = 0;
  const scrollAmount = 350;

  function updateDots(index) {
    dots.forEach((dot) => dot.classList.remove("filled"));
    if (dots[index]) {
      dots[index].classList.add("filled");
    }
  }

  rightArrow.addEventListener("click", () => {
    slider.scrollBy({ left: scrollAmount, behavior: "smooth" });

    if (currentDot < dots.length - 1) {
      currentDot++;
      updateDots(currentDot);
    }
  });

  leftArrow.addEventListener("click", () => {
    slider.scrollBy({ left: -scrollAmount, behavior: "smooth" });

    if (currentDot > 0) {
      currentDot--;
      updateDots(currentDot);
    }
  });
  updateDots(currentDot);
});

//------------------------------------- NAVBAR -------------------------------------


document.addEventListener("DOMContentLoaded", function () {
  const nav = document.querySelector(".nav");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 10) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  });
});

// document.addEventListener("DOMContentLoaded", function () {
//   const toggleIcon = document.querySelectorAll(".toggle-icon");

//   let isOpen = false;

//   toggleIcon.forEach(icon=>{
//       icon.addEventListener("click", function () {
//         let answer = icon.closest('answer');
//         isOpen = !isOpen;

//         if (isOpen) {
//           answer.style.display = "block";
//           toggleIcon.src = "./assets/Icon (7).svg";
//         } else {
//           answer.style.display = "none";
//           toggleIcon.src = "./assets/Icon (6).svg";
//         }
//       });
//   })
// });

//--------------------------------------------- ACCORDION LOGIC ------------------------------------------


document.querySelectorAll(".outer").forEach((box) => {
  box.addEventListener("click", function () {
    const answer = box.querySelector("div.answer");
    const icon = box.querySelector(".questions img");
    answer.style.display = answer.style.display === "none" ? "block" : "none";
    answer.style.display === "none"
      ? (icon.src = "./assets/Icon (6).svg")
      : (icon.src = "./assets/Icon (7).svg");
  });
});
