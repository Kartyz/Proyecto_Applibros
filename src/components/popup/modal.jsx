// Importa createRoot de react-dom
import { createRoot } from 'react-dom/client';
import React, { useState, useEffect } from 'react';
import './modal.css';


// Cambia el componente Modal a una función que devuelve JSX
function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(prevModal => !prevModal);
  };

  useEffect(() => {
   
    if(!localStorage.getItem('modalShown')){
      
      const openModalTimeout = setTimeout(() => {
        toggleModal();
      }, 0);

      const closeModalTimeout = setTimeout(() => {
        toggleModal();
        localStorage.setItem('modalShown',true);
      }, 2500);
    // Limpia los timeouts para evitar problemas cuando el componente se desmonta
    return () => {
      clearTimeout(openModalTimeout);
      clearTimeout(closeModalTimeout);
   };
  }
  }, []); // El segundo argumento vacío asegura que useEffect se ejecute solo una vez al montar el componente

  useEffect(() => {
    // Añade o elimina la clase del body dependiendo del estado de la modal
    if (modal) {
      document.body.classList.add('active-modal');
    } else {
      document.body.classList.remove('active-modal');
    }
  }, [modal]);
    
  return (
    <>
      {modal && (
        <div className="modal">
          <div className="overlay"></div>
          <div className="modal-content">
            <h2>AppLibros</h2>
          </div>
        </div>
      )}
    </>
  );
}


export default Modal;