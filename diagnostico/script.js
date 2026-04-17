document.addEventListener("DOMContentLoaded", () => {

    const modal = document.getElementById("modal");
    const btnAbrir = document.getElementById("btn-diagnostico");
    const btnCerrar = document.getElementById("btn-cerrar");

    const modal2 = document.querySelector(".modal2");
    const radioSi = document.getElementById("opcion1");
    const radioNo = document.getElementById("opcion2");

    const checkContinua = document.getElementById("hospitalizacioncontinua");
    const fechaSalida = document.getElementById("fechasalidahospi");

    // 🔥 ABRIR
    btnAbrir.addEventListener("click", () => {
        modal.classList.add("active");
    });

    // 🔥 CERRAR
    btnCerrar.addEventListener("click", () => {
        modal.classList.remove("active");
    });

    // 🔹 Mostrar hospitalización
    radioSi.addEventListener("change", () => {
        modal2.style.display = "block";
    });

    // 🔹 Ocultar hospitalización
    radioNo.addEventListener("change", () => {
        modal2.style.display = "none";
    });

    // 🔹 Checkbox
    checkContinua.addEventListener("change", () => {
        if (checkContinua.checked) {
            fechaSalida.disabled = true;
            fechaSalida.value = "";
        } else {
            fechaSalida.disabled = false;
        }
    });

    // 🔹 Cerrar haciendo click fuera
    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.classList.remove("active");
        }
    });

});