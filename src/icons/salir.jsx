import React from 'react'
import { IoMdArrowRoundBack } from "react-icons/io";
import './iconos.css'; // Asegúrate de que el archivo CSS está en la misma carpeta o ajusta la ruta


const Salir = () => {
    return (
      <div className='boton-salir'>
        <IoMdArrowRoundBack className='icono-salir' /> {/*El clasname iva aqui mala mia xd*/}
      </div>
    );
}

export default Salir