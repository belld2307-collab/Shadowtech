document.getElementById("year").textContent = new Date().getFullYear();

const navBtn = document.getElementById("nav-btn");
const nav = document.getElementById("nav");

navBtn.addEventListener("click", () => {
  nav.classList.toggle("open");
});
