window.addEventListener("load", function () {
    alert("Welcome to My Personal Profile Page!");
});

// Dark Mode Toggle
const toggleBtn = document.getElementById("toggleDark");

toggleBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        toggleBtn.textContent = "Light Mode";
    } else {
        toggleBtn.textContent = "Dark Mode";
    }
});
