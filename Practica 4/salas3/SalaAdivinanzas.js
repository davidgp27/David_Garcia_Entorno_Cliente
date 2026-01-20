import Sala from "./sala.js";

export default class SalaAdivinanzas extends Sala {

  constructor() {
    super("Sala de Adivinanzas");

    this.preguntas = [
      { pregunta: "Oro parece, plata no es", respuesta: "platano" },
      { pregunta: "Blanco por dentro, verde por fuera", respuesta: "pera" },
      { pregunta: "Tiene agujas y no cose", respuesta: "reloj" }
    ];

    this.indice = 0;
    this.aciertos = 0;
  }

  obtenerPregunta() {
    return this.preguntas[this.indice].pregunta;
  }

  responder(texto) {
    if (texto.toLowerCase() === this.preguntas[this.indice].respuesta) {
      this.aciertos++;
      this.indice++;
      return "Correcto";
    }

    return "Incorrecto";
  }
}
