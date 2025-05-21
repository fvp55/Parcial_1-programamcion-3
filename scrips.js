function cargarUsuarios(pagina = 1) {
  fetch(`https://reqres.in/api/users?page=${pagina}`, {
    headers: {
      'x-api-key': 'reqres-free-v1'
    }
  })
    .then(response => response.json())
    .then(data => {
      const usuariosDiv = document.getElementById('usuarios');
      data.data.forEach(user => {
        const div = document.createElement('div');
        div.classList.add('usuario');
        div.innerHTML = `
          <img src="${user.avatar}" width="100">
          <h3>${user.first_name} ${user.last_name}</h3>
          <p><strong>Email:</strong> ${user.email}</p>
        `;
        usuariosDiv.appendChild(div);
      });
    })
    .catch(error => console.error('Error al consumir la API:', error));
}

// Cargar primera página automáticamente
cargarUsuarios();

// Función para abrir/cerrar barra lateral
function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('collapsed');
  document.body.classList.toggle('collapsed');
}

