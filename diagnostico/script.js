      function irPagina() {
    window.location.href = "/diagnostico/eliminarpac/index.html";
  }
document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modal");
    const btnAbrir = document.getElementById("btn-diagnostico");
    const btnCerrar = document.getElementById("btn-cerrar");

    const modal2 = document.querySelector(".modal2");
    const radioSi = document.getElementById("opcion1");
    const radioNo = document.getElementById("opcion2");

    const checkContinua = document.getElementById("hospitalizacioncontinua");
    const fechaSalida = document.getElementById("fechasalidahospi");
    const grupoFechaSalida = document.getElementById("grupo-fecha-salida");

    btnAbrir.addEventListener("click", () => {
        modal.classList.add("active");
    });

    btnCerrar.addEventListener("click", () => {
        modal2.classList.remove("active");
    });

    radioSi.addEventListener("change", () => {
        modal2.classList.add("active");
    });

    radioNo.addEventListener("change", () => {
        modal2.classList.remove("active");
    });

    checkContinua.addEventListener("change", () => {
        if (checkContinua.checked) {
            fechaSalida.disabled = true;
            fechaSalida.value = "";
            grupoFechaSalida.style.display = "none";
        } else {
            fechaSalida.disabled = false;
            grupoFechaSalida.style.display = "block";
        }
    });

    window.addEventListener("click", (e) => {
        if (e.target === modal2) {
            modal2.classList.remove("active");
        }

        if (e.target === modal) {
            modal.classList.remove("active");
        }
    });
});
