import React from 'react';
import ReactDOM from 'react-dom';

// Skeleton files for calendar
// import '~react-date-range/dist/styles.css'; // main style file
// import '~react-date-range/dist/theme/default.css'; // theme css file

// Redux Imports
import { Provider } from 'react-redux';
import store from './redux/store';

// CSS Import
import './stylesheets/index.css';

// Component Import
import App from './App';


// Redux Imports

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);

