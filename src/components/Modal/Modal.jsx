import { createPortal } from "react-dom";

import styles from "./Modal.module.scss";

function Modal({ variant = "modal", closeModal, children }) {
  return createPortal(
    <div className={styles.backDrop} onClick={() => closeModal(false)}>
      <div className={styles[variant]} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>,
    document.querySelector("#modal-root")
  );
}

export default Modal;
