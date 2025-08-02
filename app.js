let amigos = [];

function agregarAmigo() {
  // Capturar el valor del campo de entrada o id del html
  let nombreAmigo = document.getElementById("amigo").value;
  
  // Valida que la entrada no este vacia
  if (nombreAmigo.trim() === "") {
    alert("Por favor, inserte un nombre.");
    return;
  }
  
  // Actualiza el array de amigos
  amigos.push(nombreAmigo);
  
  actualizarListaAmigos(amigos);
  
  // Limpia el campo de entrada
  document.getElementById("amigo").value = "";
}

function actualizarListaAmigos(amigos) {
  // Obtener el elemento de la lista
  const lista = document.getElementById('listaAmigos');
  
  lista.innerHTML = "";
  
  for (let i = 0; i < amigos.length; i++) {
    const li = document.createElement('li');
    li.textContent = amigos[i];
    lista.appendChild(li);
  }
}

//funcio del sorteo
function sortearAmigo() {
  if (amigos.length === 0) {
    alert("No hay amigos en la lista para sortear.");
    return;
  }
  
  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  
  const amigoSorteado = amigos[indiceAleatorio];
  
  const resultado = document.getElementById('resultado');
  resultado.innerHTML = `<li>El amigo secreto es: ${amigoSorteado} !!!</li>`;
}