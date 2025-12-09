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


//Mostar por consola el symbol y su descripción.

console.log(tesoroSymbol);
console.log(tesoroSymbol.description);

//Mostrar por consola las propiedades del objeto original
console.log("Propiedades del Objeto Cofre: ")
for (let key in cofre){
    console.log (key);
    console.log (cofre[key]);  
}


//Clonar objeto y mostrar propiedades por consola

let clone = Object.assign({}, cofre);
console.log("Propiedades del Objeto Cofre clonado: ")
for (let key in clone){
    console.log (key);
    console.log (clone[key]);  
}


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

  window.location.href = "sala2.html";
}