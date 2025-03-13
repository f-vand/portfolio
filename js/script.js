document.addEventListener("DOMContentLoaded", function () {
  // current year in the footer
  document.getElementById("current-year").textContent = new Date().getFullYear();

  // Dark mode 
  const darkModeToggle = document.getElementById("dark-mode-toggle");
  darkModeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    //  update button text 
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
        //  contact form element
        const form = document.querySelector("form");

        // Listen  submit event on  form
        form.addEventListener("submit", function(e) {
          e.preventDefault(); // Prevent submission
  
          // Clear  error messages
          document.getElementById("nameError").textContent = "";
          document.getElementById("emailError").textContent = "";
          document.getElementById("messageError").textContent = "";
  
          //  trim values from form
          const name = document.getElementById("name").value.trim();
          const email = document.getElementById("email").value.trim();
          const message = document.getElementById("message").value.trim();
  
          let isValid = true;
  
          // Validate Name
          if (name === "") {
            document.getElementById("nameError").textContent = "Please enter your name.";
            isValid = false;
          }
  
          // Validate Email 
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (email === "") {
            document.getElementById("emailError").textContent = "Please enter your email.";
            isValid = false;
          } else if (!emailRegex.test(email)) {
            document.getElementById("emailError").textContent = "Please enter a valid email address.";
            isValid = false;
          }
  
          // Validate msg
          if (message === "") {
            document.getElementById("messageError").textContent = "Please enter your message.";
            isValid = false;
          }
  
          //   success submit.
          if (isValid) {
            console.log("Form submitted successfully!");
            form.reset();
            alert("Thank you for your message!");
          }
        });
});
