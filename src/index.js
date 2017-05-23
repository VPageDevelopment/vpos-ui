import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {injectGlobal} from 'styled-components';

injectGlobal`
  body {
    background-color:pink;
    margin:0;
    padding: 0;
    font-family: sans-serif;
    overflow:hidden;
  }
`;


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
