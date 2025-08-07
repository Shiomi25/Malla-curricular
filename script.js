// Guardar estado en localStorage
document.querySelectorAll('input[type=checkbox]').forEach(input => {
  const id = input.id;
  input.checked = localStorage.getItem(id) === 'true';

  input.addEventListener('change', () => {
    localStorage.setItem(id, input.checked);
  });
});

