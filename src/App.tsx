import React, { useState } from 'react';
import './App.css';


function App() {

  return (
    <div >
      <h1 className='text-4xl text-red-500'>Nhập liệu firebase</h1>
      <input placeholder='Nhập tên' className="border-4 rounded-2xl border-black"></input>
      <br/>
      <input placeholder='Nhập tuổi' className="border-4 rounded-2xl border-black"></input>
      <br/>
      <button className="bg-sky-700 px-4 py-2 rounded-xl text-white hover:bg-sky-800 sm:px-8 sm:py-3">Push lên firebase</button>
    </div>
  );
}

export default App;
