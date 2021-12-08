import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './index.css';
import App from './App';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com'

ReactDOM.render(<App />, document.getElementById('root'));
