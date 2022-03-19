import React from "react";
import "./modal.scss";

const Modal = ({ children, modalHandler }) => (
  <div className="modal" >
    <button onClick={modalHandler} className="modal__btn--close">
      <span></span>
      <span></span>
    </button>
    {children}
  </div>
);

export default Modal;
