import './App.css';
import { getDatabase,set,ref } from "firebase/database";
import app from './firebase'
import Login from './components/Login';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { ProSidebarProvider } from 'react-pro-sidebar';
import React, { useEffect } from 'react';
import Layout from './Layout/Layout';
const AdminPages = React.lazy(() => import("./Layout/Layout"));


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
