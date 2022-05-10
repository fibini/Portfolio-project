const ham = document.querySelector(".button");
const navbar = document.querySelector(".nav-bar");
const clos = document.querySelector(".clos");

ham.addEventListener("click", () => {
    ham.classList.toggle("show")
    navbar.classList.toggle("show")
    clos.classList.toggle("show")
})

document.querySelectorAll(".adj,.clos").forEach(n => n.addEventListener("click", () => {
    ham.classList.remove("show")
    navbar.classList.remove("show")
    clos.classList.remove("show")

}))