import { useEffect } from 'react';
import styles from './index.module.scss';

const Modal = ({ onRequestClose, isOpen, children }) => {
  const { modal_container, modal_overlay, active } = styles;
  useEffect(() => {
    document.addEventListener('keyup', (e) => { if (e.key === "Escape") onRequestClose() });

    return () => document.removeEventListener('keyup', (e) => { if (e.key === "Escape") onRequestClose() });
  }, [onRequestClose])


  return (
    <div >
      <div className={isOpen ? modal_overlay : ''} onClick={onRequestClose}>
      </div>
      <div className={`${isOpen ? active : ''} ${modal_container}`} >
        {children}
      </div>
    </div>
  )
}

export default Modal;