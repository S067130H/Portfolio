const icon = document.getElementById("navigation").querySelector("i");

function toggleMenu() {
    const menu = document.getElementById("navigation").querySelector("menu");
    if (menu.style.display === "none" || menu.style.display === "") {
        menu.style.display = "block";
        menu.classList.add("fade-slide-in");
        menu.classList.remove("fade-slide-out");
    } else {
        menu.classList.add("fade-slide-out");
        menu.classList.remove("fade-slide-in");
        setTimeout(() => {
            menu.style.display = "none";
        }, 500);
    }
}

icon.addEventListener("click", toggleMenu);
