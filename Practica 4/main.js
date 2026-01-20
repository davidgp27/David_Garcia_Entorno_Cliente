import SalaAdivinanzas from "./salas/SalaAdivinanzas.js";

const sala = new SalaAdivinanzas();

window.responder = function () {
  const input = document.getElementById("respuesta");

  try {
    alert(sala.responder(input.value));
  } catch (error) {
    alert(error.message);
  }

  input.value = "";
};
