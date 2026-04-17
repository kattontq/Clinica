const btn = document.getElementById("btn-diagnostico");
const modal = document.getElementById("modal");

btn.addEventListener("click", () => {
  modal.style.display = "block";
});
document.addEventListener("DOMContentLoaded", () => {
  const checkbox = document.getElementById("hospitalizacioncontinua");
  const modal2 = document.querySelector(".modal2");

  // Ocultar al inicio
  modal2.style.display = "none";

  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      modal2.style.display = "block";
    } else {
      modal2.style.display = "none";
    }
  });
});