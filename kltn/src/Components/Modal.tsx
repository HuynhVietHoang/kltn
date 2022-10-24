import React from 'react';
import "./Modal.css";


function Modal({setShowModal}) {
  return (
    <div className="modalBackground">
    <div className="modalContainer">
      <div className="titleCloseBtn">
        <button
          onClick={() => {
            setShowModal(false);
          }}
        >
          X
        </button>
      </div>
      <div className="title">
        <h1>Test title</h1>
      </div>
      <div className="body">
        <p>Test body</p>
      </div>
      <div className="footer">
        <button
          onClick={() => {
            setShowModal(false);
          }}
          id="cancelBtn"
        >
          Cancel
        </button>
        <button>Continue</button>
      </div>
    </div>
  </div>
  );
}

export default Modal;
