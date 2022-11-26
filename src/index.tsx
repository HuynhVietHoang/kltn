import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Login from './components/Login';
import SideBar from './Layout/SideBar';
import { ProSidebarProvider } from 'react-pro-sidebar';
import Body from './Layout/Body';
import InsuranceForm from './components/InsuranceForm';
import { Provider } from 'react-redux';

// const container = document.getElementById("root")!;
// const root = createRoot(container);
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <ProSidebarProvider>
      <App />
    </ProSidebarProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
