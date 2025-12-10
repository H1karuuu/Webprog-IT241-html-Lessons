const toggleBtn = document.getElementById("toggleDark");

toggleBtn.addEventListener("click", function () {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        toggleBtn.textContent = "Dark Mode";
    } else {
        toggleBtn.textContent = "Light Mode";
    }
});
