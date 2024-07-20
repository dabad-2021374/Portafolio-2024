import React, { useState } from 'react'
import './TaskCard.css'

const Modal = ({ imageUrl, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content">
        <img src={imageUrl} alt="Task Image" className="modal-image" />
      </div>
    </div>
  )
}

export const TaskCard = ({ titulo, descripcion, habilidades, link, imagenUrl }) => {
  const [showModal, setShowModal] = useState(false)

  const openModal = () => setShowModal(true)
  const closeModal = () => setShowModal(false)

  return (
    <div className="my-4 mx-auto p-relative card shadow-1">
      <div className="card-content">
        <div className="image-container" onClick={openModal}>
          <img src={imagenUrl} alt="imagen tarea" className="imagenUrl" />
          <div className="overlay">
            <div className="text">Ver</div>
          </div>
        </div>
        <div className="px-2">
          <h1 className="card-heading mt-2 mb-2">{titulo}</h1>
          <p className="mb-3 color-text">{descripcion}</p>
          <strong>
            <p className="mb-1 skills">Tecnologías usadas:</p>
          </strong>
          <p className="mb-3 color-text" >{habilidades}</p>
        </div>
      </div>
      <a href={link} className="text-uppercase d-inline-block font-weight-medium lts-2px ml-2 mb-2 text-center styled-link">Descargar</a>
      {showModal && (
        <Modal
          imageUrl={imagenUrl}
          onClose={closeModal}
        />
      )}
    </div>
  )
}
