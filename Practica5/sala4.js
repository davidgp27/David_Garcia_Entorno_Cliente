// Práctica Unidad 5. Sala Laboratorio. Variables y coordenadas del sensor
let frascosRecogidos = 0;
let errores = 0;
let passwordDescubierta = "";

let mesa = document.getElementById('mesa');
let textoCoords = document.getElementById('coords');
let inputCodigo = document.getElementById('input-codigo');
let mensajeTeclado = document.getElementById('mensaje-teclado');

let pistas = ["AGE", "NTE", "007"];

mesa.addEventListener('mousemove', (e) => {
    textoCoords.innerText = `X: ${e.clientX}, Y: ${e.clientY}`;
});

// Práctica Unidad 5. Sala Laboratorio. Control de errores y burbujeo
mesa.addEventListener('click', () => {
    errores++;
    if (errores >= 2) {
        alert("¡DEMASIADOS ERRORES! La seguridad te ha pillado. Reiniciando...");
        location.reload();
    } else {
        alert("¡CUIDADO! Has tocado la mesa. Tienes 1 intento más.");
    }
});

// Práctica Unidad 5. Sala Laboratorio. Recoger frascos y dar pistas
let frascos = document.querySelectorAll('.frasco');
frascos.forEach((frasco, index) => {
    frasco.addEventListener('click', (e) => {
        
        e.stopPropagation(); 
        
        if (e.target.style.backgroundColor !== "lime") {
            e.target.style.backgroundColor = "lime";
            frascosRecogidos++;
            passwordDescubierta += pistas[index];
            mensajeTeclado.innerText = `Pista obtenida. Password actual: ${passwordDescubierta}`;
            mensajeTeclado.style.color = "blue";
        }
    });
});

// Práctica Unidad 5. Sala Laboratorio. Validación alfanumérica y teclas especiales
inputCodigo.addEventListener('keydown', (e) => {
    
    // Tecla Enter para comprobar la victoria
    if (e.key === 'Enter') {
        if (frascosRecogidos === 3 && inputCodigo.value.toUpperCase() === "AGENTE007") {
            alert("¡SALA COMPLETADA! Has descifrado el código y recogido las muestras.");
            // Aquí iría el enlace a la Sala 2
        } else {
            alert("Código incorrecto o te faltan frascos.");
        }
    }

    // Tecla Escape para limpiar el terminal
    if (e.key === 'Escape') {
        inputCodigo.value = "";
    }

// Práctica Unidad 5. Sala Laboratorio. Validación alfanumérica y preventDefault
    let permitido = /^[a-zA-Z0-9]$/;
    if (!permitido.test(e.key) && e.key.length === 1) {
        e.preventDefault(); 
        mensajeTeclado.innerText = "Error: Solo letras y números";
        mensajeTeclado.style.color = "red";
    }

    });

let tengoTarjeta = false; 
let monitorOk = false;

// Práctica Unidad 5. Sala Seguridad. Arrastrar y soltar (Drag and Drop)
let miTarjeta = document.getElementById('tarjeta-id');
let elLector = document.getElementById('lector-biometrico');

miTarjeta.addEventListener('dragstart', function(e) {
    // Guardo el ID de lo que estoy moviendo
    e.dataTransfer.setData("text", e.target.id);
});

elLector.addEventListener('dragover', function(e) {
    e.preventDefault(); 
});

elLector.addEventListener('drop', function(e) {
    e.preventDefault();
    let datos = e.dataTransfer.getData("text");
    if (datos == "tarjeta-id") {
        tengoTarjeta = true;
        elLector.innerHTML = "TARJETA LEÍDA";
        elLector.style.background = "lightgreen";
    }
});

// Práctica Unidad 5. Sala Seguridad. Evento de redimensión 
// Uso window porque el evento es de la ventana del navegador
window.addEventListener('resize', function() {
    if (window.innerWidth < 800) {
        monitorOk = true;
        console.log("Monitor calibrado correctamente");
    }
});

// Práctica Unidad 5. Sala Seguridad. Evento de desplazamiento
let manual = document.getElementById('manual-instrucciones');
manual.addEventListener('scroll', function() {
    // Cuando el usuario baja el texto, el fondo se pone gris
    manual.style.backgroundColor = "grey";
});

// Práctica Unidad 5. Sala Seguridad. Formulario y Expresiones Regulares
let miForm = document.getElementById('form-final');
miForm.addEventListener('submit', function(e) {
    // Práctica Unidad 5. Uso de preventDefault
    e.preventDefault(); // Para que no se recargue la página al dar al botón
    
    // Esta es la RegEx para el código SEC- y 4 números
    let miExpresion = /^SEC-\d{4}$/; 
    let textoEscrito = document.getElementById('input-final').value;

    if (tengoTarjeta == true && monitorOk == true) {
        if (miExpresion.test(textoEscrito)) {
            // Práctica Unidad 5. Evento personalizado con CustomEvent
            let eventoVictoria = new CustomEvent('salaTerminada');
            document.dispatchEvent(eventoVictoria);
        } else {
            alert("Error: El código debe ser tipo SEC-1234");
        }
    } else {
        alert("Falta pasar la tarjeta o ajustar el tamaño de la ventana");
    }
});

// Práctica Unidad 5. Sala Seguridad. Delegación de eventos y propagación
let zonaBotones = document.getElementById('contenedor-ayuda');
zonaBotones.addEventListener('click', function(e) {
    if (e.target.className == 'btn-extra') {
        alert("Pista: El código es SEC- seguido de cuatro números");
        
        // Práctica Unidad 5. Detener propagación
        e.stopPropagation(); // Corto el evento aquí para que no siga subiendo
    }
});
