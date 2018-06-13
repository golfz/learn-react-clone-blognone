import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Blognone from './blognone/Blognone';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Blognone />, document.getElementById('root'));
registerServiceWorker();
