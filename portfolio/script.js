// script.js

const toggleButton = document.getElementById("toggleButton");
const textContent = document.getElementById("textContent");

toggleButton.addEventListener("click", function () {
    textContent.style.display = textContent.style.display === "none" ? "block" : "none";
});


