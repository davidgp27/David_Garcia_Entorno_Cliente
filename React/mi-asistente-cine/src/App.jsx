import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './Navbar';
import Chat from './chat';
import datosRaw from './datos.json'; // Importado como módulo 
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false); // useState 1 

  // REQUISITO: Usar JSON.parse con reactivador 
  const datosFinales = JSON.parse(JSON.stringify(datosRaw), (key, value) => {
    if (key === 'genero') return value.toUpperCase(); // Formateo de salida 
    return value;
  });

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <BrowserRouter> {/* React Router  */}
        <Navbar setDarkMode={setDarkMode} darkMode={darkMode} />
        <Routes>
          <Route path="/" element={<h1 style={{textAlign: 'center', marginTop: '50px'}}>Inicio CineBot</h1>} />
          <Route path="/chat" element={<Chat datos={datosFinales} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;