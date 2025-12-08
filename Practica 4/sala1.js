const tesoroSymbol = Symbol("tesoro");

const cofre = {
  estado: "cerrado",
  contenido: {
    mensaje: "El cofre está dañado. Necesitas clonar este objeto."
  },

  abrir() {
    return this[tesoroSymbol];
  },
  [tesoroSymbol]: " Un diamante brillante"
};

let cofreClonado = null;


function mostrarPista() {
  document.getElementById("pista").textContent = cofre.contenido.mensaje;
}