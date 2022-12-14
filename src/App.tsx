import './App.css';
import {  Link, Route, Routes } from 'react-router-dom';
import  { useEffect } from 'react';
import Layout from './Layout/Layout';


function App() {
  useEffect(() => {
    document.title = "new title"
 }, []);

  return (
      <Routes>
        <Route path="/*" element={<Layout></Layout>}></Route>
      </Routes>
    

  );
}
export default App;
