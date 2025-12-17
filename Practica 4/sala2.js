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
const lucesJuego = [...lucesArray]; //copia del array original

//ya tengo el array creado y modificado con los metodos, ahora solo le agrego el console.log para que salga por consola.
console.log[lucesJuego]

//Commit 4

const lucesValidas = lucesJuego
  .filter(color => reglas.get("correctas").includes(color))
  .sort();

//Esto es para la practica de la segunda sala
    let [color1, color2, color3, color4, color5] = lucesUnicas
    console.log(color1);
    console.log(color2);

    for (let valor of reglas)
        console.log(valor)

  //Commit 5

document.getElementById("mensaje").textContent = reglas.get("mensaje");

const listaPistas = document.getElementById("pistas");
reglas.get("pistas").forEach(pista => {
  const li = document.createElement("li");
  li.textContent = pista;
  listaPistas.appendChild(li);
});

function pulsarLuz(color) {
  seleccionJugador.push(color);
  document.getElementById("seleccion").textContent =
    "Has pulsado: " + seleccionJugador.join(" → ");
}

function comprobarPanel() {
  const ordenCorrecto = reglas.get("orden");

  const correcto = seleccionJugador.every(
    (color, index) => color === ordenCorrecto[index]
  );

  if (correcto && seleccionJugador.length === ordenCorrecto.length) {
    alert("Panel desbloqueado");
    window.location.href = "sala3.html";
  } else {
    alert("Secuencia incorrecta");
    seleccionJugador = [];
    document.getElementById("seleccion").textContent = "";
  }
}
  