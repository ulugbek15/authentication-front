import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from "./Context/AuthContext"
import { BrowserRouter } from "react-router-dom"

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);