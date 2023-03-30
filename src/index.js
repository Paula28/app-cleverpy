import React from 'react';
import './index.css';
import AppRoutes from './routes';
import { Provider } from 'react-redux';
import store from './redux/store/store';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

render((
  <Provider store={store}>
     <Router>
        <AppRoutes />
      </Router>
  </Provider>
), document.getElementById('root'));