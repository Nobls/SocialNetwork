import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {RootStateType, store} from "./redux/state";

let renderEntireTree = (state: RootStateType)=>{
    ReactDOM.render(
        <React.StrictMode>
            <App state={state}
                 store={store}
                 dispatch={store.dispatch.bind(store)}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderEntireTree(store.getState());

store.subscribe(renderEntireTree)


reportWebVitals();
