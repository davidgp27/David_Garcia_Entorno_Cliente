export default class Sala {
  constructor(nombre) {
    this.nombre = nombre;
  }

  entrar() {
    return `Has entrado en la ${this.nombre}`;
  }
}
