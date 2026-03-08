import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Navbar({ darkMode, setDarkMode }) {
  const [menuAbierto, setMenuAbierto] = useState(false);  

  return (
    <nav className="navbar">
      <div className="nav-links">
        <Link to="/">Inicio</Link>
        <Link to="/chat">Asistente</Link>
      </div>
      <button onClick={() => setDarkMode(!darkMode)} className="theme-btn">
        {darkMode ? '☀️ Modo Claro' : '🌙 Modo Oscuro'}
      </button>
    </nav>
  );
}