const emailInput = document.getElementById("email");
const emailError = document.querySelector(".error-message");
const button = document.querySelector(".btn");
const box2 = document.querySelector(".box-success");
const box1 = document.querySelector(".main-box");
const displayInput = document.getElementById("displayInput");

button.addEventListener("click", function () {
  const email = emailInput.value;
  const isValid = isValidEmail(email);
  const inputText = emailInput.value;

  if (isValid) {
    box2.classList.remove("hidden");
    box1.classList.add("hidden");
    displayInput.innerHTML = inputText;
  } else {
    emailError.classList.remove("hidden");
    emailInput.style.color = "hsl(4, 100%, 67%)";
    emailInput.style.background = "#ffe6e6";

    if (emailInput.value.trim() === "") {
      // Change the placeholder text color
      emailInput.placeholder = "Enter your email";
      emailInput.setAttribute("style", "color: hsl(4, 100%, 67%);");
      emailInput.style.color = "";
    }
  }
});

emailInput.addEventListener("input", function () {
  if (emailInput.value.trim() === "") {
    emailError.classList.add("hidden");
    emailInput.style.color = ""; // Reset to normal color
    emailInput.style.background = ""; // Reset to normal background

    // Reset the placeholder text color
    emailInput.placeholder = "Enter your email";
    emailInput.setAttribute("style", "color: '';");
  }
});

document.querySelector(".btn2").addEventListener("click", function () {
  box1.classList.remove("hidden");
  box2.classList.add("hidden");
});

emailInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    button.click(); // Programmatically click the button when Enter is pressed
  }
});

function isValidEmail(email) {
  const emailPattern = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
  return emailPattern.test(email);
}
