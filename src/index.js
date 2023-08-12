import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Nav from './components/nav/Nav';
import Body from './components/body/Body';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Nav />
    <Body />
    <Header />
    <Footer />
  </React.StrictMode>
);

