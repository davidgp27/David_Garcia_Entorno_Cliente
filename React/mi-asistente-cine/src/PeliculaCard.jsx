import { useState } from 'react';

export default function PeliculaCard({ info, toggleFav, isFav }) {
  const [clickCount, setClickCount] = useState(0); // useState obligatorio 

  return (
    <div className="movie-card">
      <h3>{info.titulo}</h3>
      <p className="genero-tag">{info.genero}</p>
      <p>{info.desc}</p>
      <button 
        className={isFav ? 'fav-btn active' : 'fav-btn'} 
        onClick={() => {
          toggleFav(info);
          setClickCount(clickCount + 1);
        }}
      >
        {isFav ? '❤️ En Favoritos' : '🤍 Añadir a Favoritos'}
      </button>
    </div>
  );
}