/* El principal objetivo de este desafío es fortalecer tus habilidades en 
lógica de programación. Aquí deberás desarrollar la lógica para resolver 
el problema.*/

// Creando el array para la lista de amigos
let listaAmigos = [];
const limite = 10;

function agregarAmigo() {
  const entrada = document.getElementById('amigo');
  
  if (listaAmigos.length >= limite) {
    alert('Solo se pueden agregar 10 amigos');
    entrada.value = '';
    entrada.focus();
    return;
  }

  const amigo = entrada.value.trim();
  if (alumno === '') {
    alert('Ingresa un nombre válido, sólo letras.');
    entrada.focus();
    return;
  }

  listaAmigos.push(amigo);
  entrada.value = '';
  entrada.focus();
}

document.addEventListener('DOMContentLoaded', () => {
  const entrada = document.getElementById('amigo');
  entrada.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') agregarAmigo();
  });
});
 