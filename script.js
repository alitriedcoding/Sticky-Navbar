const textEl = document.querySelector(".text");
const navbberEl = document.querySelector(".navebar");

// this fucntion show when we scroll down the color of navebar chage to black

window.addEventListener("scroll", () => {
  if (window.scrollY > textEl.offsetTop - navbberEl.offsetHeight - 40) {
    navbberEl.classList.add("active");
  } else {
    navbberEl.classList.remove("active");
  }
});
