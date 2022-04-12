import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import {state} from "./redux/state";
import {addPost, changeNewPostText, RootStateType} from "./redux/state";

export let renderEntireTree = (state:RootStateType)=>{
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} changeNewPostText={changeNewPostText}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

reportWebVitals();
