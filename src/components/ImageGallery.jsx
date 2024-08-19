import React from "react";
import { useNavigate } from "react-router-dom";
import kawa from "../assets/kawasaki.jpg";
import lazeta from "../assets/laz.jpg";
import gsr from "../assets/suzuki.jpg";
import yz from "../assets/yz.jpg";
import "./ImageGallery.css";

const images = [
  { src: kawa, alt: "Kawasaki", className: "kawa__image" },
  { src: lazeta, alt: "La Zeta", className: "lazeta__image" },
  { src: gsr, alt: "Suzuki", className: "gsr__image" },
  { src: yz, alt: "YZ", className: "yz__image" },
];

const ImageGallery = () => {
  const navigate = useNavigate();

  const handleImageClick = (index) => {
    navigate(`/image/${index}`);
  };

  return (
    <div className="images__container">
      {images.map((image, index) => (
        <div
          key={index}
          className={`image__wrapper ${image.className}`}
          onClick={() => handleImageClick(index)}
        >
          <img className="gallery__image" src={image.src} alt={image.alt} />
          <div className="overlay">
            <button className="save__button">Guardar</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
