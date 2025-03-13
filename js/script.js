document.addEventListener("DOMContentLoaded", function () {
  // current year in the footer
  document.getElementById("current-year").textContent = new Date().getFullYear();

  // Dark mode 
  const darkModeToggle = document.getElementById("dark-mode-toggle");
  darkModeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    //  update button text based on mode
    if (document.body.classList.contains("dark-mode")) {
      darkModeToggle.textContent = "Light Mode";
    } else {
      darkModeToggle.textContent = "Dark Mode";
    }
  });
  // toggle
  const toggleButtons = document.querySelectorAll(".toggle-details");

      toggleButtons.forEach(button => {
        button.addEventListener("click", function () {
          // Get the closest card container
          const card = this.closest(".card");
          // Within that card, find the project details element
          const details = card.querySelector(".project-details");

          if (details.classList.contains("visible")) {
            details.classList.remove("visible");
            this.textContent = "Show Details";
          } else {
            details.classList.add("visible");
            this.textContent = "Hide Details";
          }
        });
      });
});
