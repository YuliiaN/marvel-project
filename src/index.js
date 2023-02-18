import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import './index.css';
// import MarvelService from 'services/MarvelService';

// const api = new MarvelService();
// console.log(api.getAllCharacters());

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
