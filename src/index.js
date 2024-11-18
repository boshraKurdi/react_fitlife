import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './Website/Style/Animation.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import './Api/axios-global';
import { store } from './Redux/index'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
