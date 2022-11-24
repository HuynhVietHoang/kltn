import './App.css';
import { getDatabase,set,ref } from "firebase/database";
import app from './firebase'
import Login from './components/Login';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { ProSidebarProvider } from 'react-pro-sidebar';
import React from 'react';
import Layout from './Layout/Layout';
const AdminPages = React.lazy(() => import("./Layout/Layout"));


function App() {
 
  return (
    
  //   <BrowserRouter>
  //   <Routes>
  //     <Route path="/*" element={<AdminPages></AdminPages>}></Route>
  //   </Routes>
  // </BrowserRouter>
  <Layout></Layout>
            

  );
}
export default App;
