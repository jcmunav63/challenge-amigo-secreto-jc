/* El principal objetivo de este desafío es fortalecer tus habilidades en 
lógica de programación. Aquí deberás desarrollar la lógica para resolver 
el problema.*/

// Creando el array para la lista de amigos.
let listaAmigos = [];
const limite = 8;

// Función para agregar un amigo a la vez. Hace la validación en el input
// y establece un límite de 8 amigos (felxible).
function agregarAmigo() {
  const entrada = document.getElementById('amigo');
  
  if (listaAmigos.length >= limite) {
    alert('Solo se pueden agregar ' + limite + ' amigos');
    entrada.value = '';
    entrada.focus();
    return;
  }

  const amigo = entrada.value.trim();
  if (amigo === '') {
    alert('Ingresa un nombre válido, sólo letras.');
    entrada.focus();
    return;
  }

  // Agrega al amigo en la lista y muestra la lista completa en la página.
  listaAmigos.push(amigo);
  mostrarAmigos();
  entrada.value = '';
  entrada.focus();
}

// Función para mostrar los amigos en la página (usa el DOM).
function mostrarAmigos() {
  const lista = document.getElementById('listaAmigos');
  lista.innerHTML = '';
  listaAmigos.forEach((amigo,i) => {
    const linea = document.createElement('li');
    const texto = document.createElement('span');
    texto.textContent = amigo;
    linea.appendChild(texto);
    lista.appendChild(linea);
  });
}

function sortearAmigo() {
  console.log('Función pendiente');
}

// Event listeners al cargar la página y al presionar el botón de
// 'Añadir amigo'.
document.addEventListener('DOMContentLoaded', () => {
  const entrada = document.getElementById('amigo');
  entrada.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') agregarAmigo();
  });
  mostrarAmigos();
});
