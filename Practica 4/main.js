import SalaAdivinanzas from "./salas3/SalaAdivinanzas.js";

const sala = new SalaAdivinanzas();

const pregunta = document.getElementById("pregunta");
const mensaje = document.getElementById("mensaje");
const contador = document.getElementById("contador");

pregunta.textContent = sala.obtenerPregunta();
contador.textContent = sala.progreso();

window.responder = function () {
  const input = document.getElementById("respuesta");

  try {
    mensaje.textContent = sala.responder(input.value);
    pregunta.textContent = sala.obtenerPregunta();
  } catch (error) {
    mensaje.textContent = error.message;
  }

  contador.textContent = sala.progreso();
  input.value = "";
};