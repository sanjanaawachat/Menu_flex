const menuToggle = [...document.querySelectorAll(".menuToggle")];

// const navbar1 = document.querySelector(".navbar1");
// const navbar2 = document.querySelector(".navbar2");

menuToggle.forEach((btn) => {
   btn.addEventListener("click", function () {
      this.parentElement.nextElementSibling.classList.toggle("active");
   });
});