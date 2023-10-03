import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppNew } from 'components/AppNew';
import './index.css';
import { Provider } from 'react-redux';
import { store } from 'components/redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store = {store}>
    <AppNew />
    </Provider>
  </React.StrictMode>
);
