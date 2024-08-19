import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import kawa from "../assets/kawasaki.jpg";
import lazeta from "../assets/laz.jpg";
import gsr from "../assets/suzuki.jpg";
import yz from "../assets/yz.jpg";
import "../components/ImageDetails.css";
import Salir from "../icons/salir";

const images = [kawa, lazeta, gsr, yz];

const ImageDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const imageSrc = images[id] || "";
  const imageAlt = `Image ${id}`;

  const handleSalirClick = () => {
    navigate("/gallery"); 
  };

  const handleGuardarClick = () => {
    let savedImages = JSON.parse(localStorage.getItem("savedImages")) || [];
    if (!savedImages.includes(imageSrc)) {
      savedImages.push(imageSrc);
      localStorage.setItem("savedImages", JSON.stringify(savedImages));
    }
  };

  return (
    <div className="principio">
      <div>
        <button className="boton-salir" onClick={handleSalirClick}>
          <Salir />
        </button>
      </div>
      <div className="pagina-dos">
        <div>
          <img className="foto-dentro" src={imageSrc} alt={imageAlt} />
        </div>
        <div>
          <button className="boton-guardado" onClick={handleGuardarClick}>Guardar</button>
          <h1 className="parrafo">Motocicletas Increibles</h1>
          <h1 className="todavia">Todavia no hay comentarios</h1>
          <h2 className="sin-comentarios">
            Todavía no hay comentarios. Agrega uno para iniciar la conversación.
          </h2>
          <h1>
            <input
              className="comentario"
              type="text"
              placeholder="   Agregar un comentario"
            />
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ImageDetailPage;
