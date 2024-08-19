// src/components/SavedImagesPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Salir from '../icons/salir';
import '../components/SavedImagePage.css'




const SavedImagesPage = () => {
  const navigate = useNavigate();
  const [savedImages, setSavedImages] = React.useState(
    JSON.parse(localStorage.getItem("savedImages")) || []
  );

  const handleBackClick = () => {
    navigate("/gallery");
  };

  const handleRemoveClick = (src) => {
    const updatedImages = savedImages.filter(image => image !== src);
    setSavedImages(updatedImages);
    localStorage.setItem("savedImages", JSON.stringify(updatedImages));
  };

  const handleClearAllClick = () => {
    localStorage.removeItem("savedImages");
    setSavedImages([]);
  };

  return (
    <div className='pagina-prin'>
      <button onClick={handleBackClick}> <Salir /> </button>
      <h1 className='letra'>Imágenes Guardadas</h1>
      <button className='borrar-boton' onClick={handleClearAllClick} style={{ marginBottom: '10px', color: 'white' }}>
        Borrar Todo
      </button>
      <div className="saved-images__container">
        {savedImages.length === 0 ? (
          <p>No hay imágenes guardadas.</p>
        ) : (
          savedImages.map((src, index) => (
            <div key={index} className="saved-image__wrapper">
              <img src={src} alt={`Saved ${index}`} className="saved-image" />
              <button onClick={() => handleRemoveClick(src)} className="remove__button">
                Eliminar
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default SavedImagesPage;
