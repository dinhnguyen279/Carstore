import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import Header from './header/header';
// import Navbar from './navbar/navbar';
import './index.css';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
    {/* <Header /> */}
    {/* <Navbar /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
