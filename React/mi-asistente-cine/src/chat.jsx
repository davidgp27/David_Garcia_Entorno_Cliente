import { useState, useEffect } from 'react';
import data from './datos.json'; // Importar datos del JSON
import PeliculaCard from './PeliculaCard';

export default function Chat({ datos }) { // Recibe props
  const [paso, setPaso] = useState(0); // useState 2 [cite: 53]
  const [seleccion, setSeleccion] = useState("");
  const [favoritos, setFavoritos] = useState([]); // Estado para favoritos

  useEffect(() => {
    console.log("Asistente cargado con éxito"); // useEffect [cite: 56]
  }, []);

  const toggleFav = (pelicula) => {
    setFavoritos(prev => 
      prev.some(fav => fav.id === pelicula.id) 
        ? prev.filter(fav => fav.id !== pelicula.id)
        : [...prev, pelicula]
    );
  };

  return (
    <div className="chat-container">
      <h2>Chat Asistente</h2>
      {paso === 0 ? (
        <div className="opciones-box">
          <p>¿Qué género buscas?</p>
          {/* Recorrer colección para mostrar dinámicamente el HTML  */}
          {data.opciones.map((opt) => (
            <button 
              key={opt} 
              onClick={() => { setSeleccion(opt); setPaso(1); }} // Manejo de evento 
            >
              {opt}
            </button>
          ))}
        </div>
      ) : (
        <div>
          <p>Recomendaciones para {seleccion}:</p>
          {data.recomendaciones
            .filter(p => p.genero === seleccion)
            .map(p => (
              <PeliculaCard 
                key={p.id} 
                info={p} 
                toggleFav={toggleFav} 
                isFav={favoritos.some(fav => fav.id === p.id)} 
              />
            ))
          }
          <button onClick={() => setPaso(0)}>Volver</button>
        </div>
      )}
    </div>
  );
}