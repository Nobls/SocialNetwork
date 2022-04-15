import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {addPost, changeNewPostText, RootStateType, state, subscribe} from "./redux/state";

let renderEntireTree = (state: RootStateType)=>{
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} changeNewPostText={changeNewPostText}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderEntireTree(state);

subscribe(renderEntireTree)


reportWebVitals();
