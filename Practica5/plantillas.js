
//OPCION 1
// 1. Selección de elementos (Lo primero siempre)
const miTitulo = document.querySelector('#titulo');
const miBoton = document.querySelector('#btn');

// 2. Función normal (La declaras aparte)
function saludar(event) {
    console.log("Has pulsado en:", event.target); // event.target es el elemento pulsado
    miTitulo.style.color = 'red';
}

// 3. Conexión mediante Listener (La forma recomendada)
miBoton.addEventListener('click', saludar);

// opcion 2
// Selección directa y Listener con función de flecha anónima
document.querySelector('#btn').addEventListener('click', (event) => {
    // Aquí el código va directo dentro
    document.querySelector('#titulo').innerText = "Cambiado con Flecha";
    console.log("Tipo de evento:", event.type);
});

// opcion 3
// Clase manejadora
class MiManejador {
    constructor(elemento) {
        this.elemento = elemento;
    }

    // Método OBLIGATORIO para que funcione
    handleEvent(event) {
        if (event.type === 'click') {
            this.elemento.style.fontWeight = 'bold';
        }
    }
}

const elTitulo = document.querySelector('#titulo');
const instanciaManejador = new MiManejador(elTitulo);

// IMPORTANTE: Pasas el objeto entero, NO una función
elTitulo.addEventListener('click', instanciaManejador);



Lo que quieres hacer,Código maestro
Evitar que un form se recargue,event.preventDefault();
Saber qué elemento pulsaste,event.target
Detener el burbujeo (bubbling),event.stopPropagation();
Leer un texto de un input,document.querySelector('input').value;
Cambiar CSS,elemento.style.property = 'valor';
Añadir una clase CSS,elemento.classList.add('nombre-clase');