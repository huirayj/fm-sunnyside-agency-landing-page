const hamburgerEle = document.querySelector("#hamburger");
const menuEle = document.querySelector(".menu");

hamburgerEle.addEventListener("click", () => {
    const isMenuDisplay = menuEle.style.display === "flex";

    if (isMenuDisplay) {
        menuEle.style.display = "none";
    } else {
        menuEle.style.display = "flex";
    }
});

window.onresize = () => {
    if (window.innerWidth > 600) {
        menuEle.style.display = "flex";
    }

    if (window.innerWidth < 600) {
        menuEle.style.display = "none";
    }
}