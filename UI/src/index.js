import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
<<<<<<< HEAD
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
=======
import { Provider } from 'react-redux'
import store from './redux/cartRedux'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <
    Provider store = { store } >
    <
    App / >
    <
    /Provider>
);
>>>>>>> d80578104672cc85a84546b4fe8db10703563159
