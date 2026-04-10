document.addEventListener('DOMContentLoaded', () => {

    // Radios
    const op1 = document.getElementById('op1'); // Sí
    const op2 = document.getElementById('op2'); // No

    // Modal
    const modalOverlay = document.getElementById('modalOverlay');
    const closeBtn = document.getElementById('closeBtn');
    const cancelBtn = document.getElementById('cancelBtn');

    // Formulario
    const tratamientoForm = document.getElementById('tratamientoForm');
    const tratamientoEnCurso = document.getElementById('tratamientoEnCurso');
    const fechaFinField = document.getElementById('fechaFinField');
    const fechaFin = document.getElementById('fechaFin');

    // 🔓 Abrir modal (CLICK mejor que change)
    op1.addEventListener('click', () => {
        modalOverlay.classList.add('active');
    });

    // 🔒 Si selecciona "No", cerrar modal
    op2.addEventListener('click', () => {
        cerrarModal();
    });

    // ❌ Botón X
    closeBtn.addEventListener('click', cerrarModal);

    // ❌ Botón cancelar
    cancelBtn.addEventListener('click', cerrarModal);

    // ❌ Click fuera del modal
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            cerrarModal();
        }
    });

    // 🔁 Función cerrar limpia
    function cerrarModal() {
        modalOverlay.classList.remove('active');

        // Reset del formulario
        tratamientoForm.reset();

        // Reset del campo fecha fin
        fechaFinField.style.display = 'block';
        fechaFin.removeAttribute('required');

        // Dejar seleccionado "No" para evitar bugs
        op2.checked = true;
    }

    // 📅 Mostrar/ocultar fecha fin
    tratamientoEnCurso.addEventListener('change', () => {
        if (tratamientoEnCurso.checked) {
            fechaFinField.style.display = 'none';
            fechaFin.removeAttribute('required');
        } else {
            fechaFinField.style.display = 'block';
            fechaFin.setAttribute('required', 'required');
        }
    });

    // 💾 Enviar formulario
    tratamientoForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const datos = {
            tipo: document.getElementById('tipoTratamiento').value,
            costo: document.getElementById('costo').value,
            estado: document.getElementById('estadoTratamiento').value,
            fechaInicio: document.getElementById('fechaInicio').value,
            enCurso: tratamientoEnCurso.checked,
            fechaFin: !tratamientoEnCurso.checked ? fechaFin.value : null
        };

        console.log('Datos del tratamiento:', datos);

        alert('Tratamiento guardado ✅');

        setTimeout(() => {
            cerrarModal();
        }, 800);
    });

});