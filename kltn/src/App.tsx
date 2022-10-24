import React, { useState } from 'react';
import Modal from './Components/Modal';
import './App.css';


function App() {
  const [showModal,setShowModal] = useState(false)  
const handleClick = () => {
    setShowModal(!showModal)
}
  return (
    <div className='App'>
      <h1>Test Modal</h1>
      <button className='openModalBtn' onClick={handleClick}>Open Modal</button>
      {
        showModal ? <Modal setShowModal={true}/>:null
      }
    </div>
  );
}

export default App;
