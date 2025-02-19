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
});
