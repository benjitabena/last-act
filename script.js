let respuestasCorrectas = ["link", "jett"]; // Agrega más respuestas correctas según sea necesario
let indiceImagenActual = 0;

function verificarRespuesta() {
  let respuestaUsuario = document.getElementById('respuesta').value.toLowerCase();
  let respuestaCorrecta = respuestasCorrectas[indiceImagenActual];

  if (respuestaUsuario === respuestaCorrecta) {
    console.log('¡Correcto! ¡Has adivinado al personaje!');

    // Cambiar a la siguiente imagen (si hay más)
    if (indiceImagenActual < respuestasCorrectas.length - 1) {
      indiceImagenActual++;
      cargarNuevaImagen();
    } else {
      console.log('¡Has completado el juego!');
    }
  } else {
    console.log('Incorrecto. Sigue intentando.');
  }
}

function cargarNuevaImagen() {
  console.log('Cargando nueva imagen...');
  document.getElementById('respuesta').value = ''; // Limpiar el campo de entrada
  document.getElementById('resultado').innerText = ''; // Limpiar el mensaje de resultado

  // Cambiar la fuente de la imagen
  let nuevaImagenSrc = 'imagen' + indiceImagenActual + '.jpg'; // Reemplaza con la ruta completa de la nueva imagen
  console.log('Nueva imagen:', nuevaImagenSrc);
  document.getElementById('imagen').src = nuevaImagenSrc;
}