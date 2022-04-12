import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {state} from "./redux/state";
import {addPost} from "./redux/state";

ReactDOM.render(
  <React.StrictMode>
    <App state={state} addPost={addPost}/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
