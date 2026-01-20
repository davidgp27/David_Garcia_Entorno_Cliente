import Sala from "./sala.js";

export default class SalaAdivinanzas extends Sala {

  // PROPIEDAD ESTÁTICA
  static ACIERTOS_NECESARIOS = 3;

  // PROPIEDADES PRIVADAS
  #preguntas;
  #indice;
  #aciertos;

  constructor() {
    super("Sala de Adivinanzas");

    this.#preguntas = [
      { pregunta: "Oro parece, plata no es", respuesta: "platano" },
      { pregunta: "Blanco por dentro, verde por fuera", respuesta: "pera" },
      { pregunta: "Tiene agujas y no cose", respuesta: "reloj" }
    ];

    this.#indice = 0;
    this.#aciertos = 0;
  }

  obtenerPregunta() {
  if (this.#indice >= this.#preguntas.length) {
    return "No hay más preguntas";
  }
  return this.#preguntas[this.#indice].pregunta;
}

  responder(texto) {
  this.#comprobarRespuesta(texto.toLowerCase());
  this.#aciertos++;
  this.#indice++;

  if (this.#aciertos === SalaAdivinanzas.ACIERTOS_NECESARIOS) {
    throw new Error(" Has acertado 3. Sala superada.");
  }

  return " Correcto";
}

  progreso() {
    return `Aciertos: ${this.#aciertos} / ${SalaAdivinanzas.ACIERTOS_NECESARIOS}`;
  }

  #comprobarRespuesta(respuesta) {
    if (respuesta !== this.#preguntas[this.#indice].respuesta) {
      throw new Error(" Respuesta incorrecta");
    }
  }
}

