import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import SearchBar from './SearchBar'; // Importación del componente de búsqueda

const Navbar = () => {
  const navigate = useNavigate();

  const handleGuardadosClick = () => {
    navigate("/saved-images");
  };

  // 

  return (
    <div className="principal flex justify-between">
      <div className="primero">
        <img src={logo} alt="Logo" />
        <h1 className='inicio-estilos'>Inicio</h1>
        <h1>Explorar</h1>
        <h1>Crear</h1>
      </div>
      <div className="fondo-buscar">
        <div className='el-buscador'>
          <SearchBar />
        </div>
        {/* Uso del componente SearchBar */}
      </div>
      <div>
        <button onClick={handleGuardadosClick}>Guardados</button>
      </div>
    </div>
  );
};

export default Navbar;
