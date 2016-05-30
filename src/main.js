import  React from 'react';
import  ReactDOM from 'react-dom';
import Hello from './component.jsx';
import App from './component.jsx';
import './main.css';
import '../node_modules/antd/dist/antd.min.css';
import '../node_modules/antd/dist/antd.min.js';
main();
function main(){
    ReactDOM.render(<App />,document.getElementById('app'));
}