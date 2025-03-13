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

// Matrix digital rain code:
const canvas = document.getElementById("matrixCanvas");
const ctx = canvas.getContext("2d");

// Resize canvas to match container dimensions
function resizeCanvas() {
  const container = document.querySelector(".matrix-container");
  canvas.width = container.clientWidth;
  canvas.height = container.clientHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

// Matrix settings
const fontSize = 16;
const characters = "01"; // Using simple '0' and '1'
const charsArray = characters.split("");
let columns = Math.floor(canvas.width / fontSize);
let drops = Array(columns).fill(1);

function draw() {
  // Create a translucent black background to achieve a trailing effect
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  // Set text style for the digital rain
  ctx.fillStyle = "#0F0"; // Bright green text
  ctx.font = fontSize + "px monospace";
  
  // Draw each drop of digital rain
  for (let i = 0; i < drops.length; i++) {
    let text = charsArray[Math.floor(Math.random() * charsArray.length)];
    let x = i * fontSize;
    let y = drops[i] * fontSize;
    ctx.fillText(text, x, y);
    
    // Reset drop randomly when it goes off-screen
    if (y > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}

// Animate the Matrix rain effect at roughly 30 frames per second
setInterval(draw, 33);