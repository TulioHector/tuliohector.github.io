import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './assets/icons/fa/css/all.min.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Footer from './components/Footer';
import PageHeader from './components/PageHeader';
import Navigation from './components/Navigation';
import './styles/index.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Navigation />
    <PageHeader />
    <App />

    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();