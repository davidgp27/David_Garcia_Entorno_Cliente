//Commit 1
const luces = [
  "roja", "verde", "azul", "amarilla", "morada",
  "roja", "azul", "verde"
];

let seleccionJugador = [];

//Commit 2
const reglas = new Map();

reglas.set("correctas", ["roja", "verde", "azul", "amarilla", "morada"]);

reglas.set("orden", ["amarilla", "roja", "verde", "azul", "morada"]);

reglas.set("pistas", [
  "Empieza por el color del sol",
  "Después viene el color del fuego",
  "Sigue con el color de la naturaleza",
  "Luego el color del mar",
  "Termina con el color de la magia"
]);

reglas.set("mensaje", "Activa las luces correctas siguiendo las pistas");

//Commit 3

const lucesUnicas = new Set(luces);
const lucesArray = Array.from(lucesUnicas);
const lucesJuego = [...lucesArray];

//Commit 4

const lucesValidas = lucesJuego
  .filter(color => reglas.get("correctas").includes(color))
  .sort();


  //Commit 5

  function pulsarLuz(color) {
  seleccionJugador.push(color);
}

function comprobarPanel() {
  const ordenCorrecto = reglas.get("orden");

  const correcto = seleccionJugador.every(
    (color, index) => color === ordenCorrecto[index]
  );

  if (correcto && seleccionJugador.length === ordenCorrecto.length) {
    window.location.href = "sala3.html";
  } else {
    seleccionJugador = [];
  }
}
