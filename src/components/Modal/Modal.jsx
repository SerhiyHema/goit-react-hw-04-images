import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal__root');

const Modal = ({ src, alt, onClose }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleDropClick = e => {
    if (e.currentTarget === e.target) {
      return onClose();
    }
  };
  return createPortal(
    <div className="modal__backdrop" onClick={handleDropClick}>
      <div className="modal__box">
        <img src={src} alt={alt} />
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
