document.addEventListener('DOMContentLoaded', () => {

  // Radios
  const op1 = document.getElementById('op1');
  const op2 = document.getElementById('op2');

  // Modal
  const modalOverlay = document.getElementById('modalOverlay');
  const closeBtn = document.getElementById('closeBtn');
  const cancelBtn = document.getElementById('cancelBtn');

  // Formulario
  const tratamientoForm = document.getElementById('tratamientoForm');
  const tratamientoEnCurso = document.getElementById('tratamientoEnCurso');
  const fechaFinField = document.getElementById('fechaFinField');
  const fechaFin = document.getElementById('fechaFin');

  // 🔓 Abrir modal
  op1.addEventListener('change', () => {
    modalOverlay.classList.add('active');
  });

  // 🔒 Cerrar si selecciona "No"
  op2.addEventListener('change', cerrarModal);

  // ❌ Botón X (si no existe, evita error)
  if (closeBtn) {
    closeBtn.addEventListener('click', cerrarModal);
  }

  // ❌ Botón cancelar
  if (cancelBtn) {
    cancelBtn.addEventListener('click', cerrarModal);
  }

  // ❌ Click fuera
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
      cerrarModal();
    }
  });

  // 🔁 Función cerrar
  function cerrarModal() {
    modalOverlay.classList.remove('active');

    // reset form
    if (tratamientoForm) tratamientoForm.reset();

    // mostrar fecha fin
    if (fechaFinField) fechaFinField.style.display = 'block';
    if (fechaFin) fechaFin.removeAttribute('required');

    // evitar que se reabra solo
    if (op2) op2.checked = true;
  }

  // 📅 Checkbox
  if (tratamientoEnCurso) {
    tratamientoEnCurso.addEventListener('change', () => {
      if (tratamientoEnCurso.checked) {
        fechaFinField.style.display = 'none';
        fechaFin.removeAttribute('required');
      } else {
        fechaFinField.style.display = 'block';
        fechaFin.setAttribute('required', 'required');
      }
    });
  }

  // 💾 Submit
  if (tratamientoForm) {
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

      setTimeout(cerrarModal, 500);
    });
  }

});