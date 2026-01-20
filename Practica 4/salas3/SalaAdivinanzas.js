import Sala from "./sala.js";

export default class SalaAdivinanzas extends Sala {

    static ACIERTOS_NECESARIOS = 3;

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
    return this.#preguntas[this.#indice].pregunta;
  }

  responder(texto) {

    try {
        this.#comprobarRespuesta(texto.toLowerCase());
        this.#aciertos++;
        this.#indice++;

        if(this.#aciertos === SalaAdivinanzas.ACIERTOS_NECESARIOS){
        throw new Error ("Has superado la sala");
    }
    
        return "Correcto";
    } catch (error){
        throw error;
    }
    
  }

  #comprobarRespuesta(respuesta) {
    if  (respuesta !== this.#preguntas[this.#indice].respuesta){
        throw new Error ("Respuesta incorrecta");
    }
  }
}

