import React from 'react';
import ReactDOM from 'react-dom';
import AllRoutes from './routes';
import { Provider } from 'react-redux'
import ReduxStore from './components/store';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={ReduxStore()}>
      <AllRoutes />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

