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
};

function clonarCofre() {

  cofreClonado = JSON.parse(JSON.stringify(cofre));

  cofreClonado.abrir = function () {
    return this[tesoroSymbol];
  };

  cofreClonado[tesoroSymbol] = cofre[tesoroSymbol];

  alert("Cofre clonado con éxito");
};


function abrirClon() {
  if (!cofreClonado) {
    alert("Primero debes clonar el cofre.");
    return;
  }
  const tesoro = cofreClonado.abrir();
  alert("Has encontrado: " + tesoro);

  window.location.href = "Sala2.html";
}