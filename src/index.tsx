import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


let dialogs = [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Andrey'},
    {id: 3, name: 'Sveta'},
    {id: 4, name: 'Sasha'},
    {id: 5, name: 'Viktor'},
    {id: 6, name: 'Valera'}
]

let messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How is your name?'},
    {id: 3, message: 'HO HO'},
    {id: 3, message: 'HA HA'},
    {id: 3, message: 'Yo'}
]

let posts = [
    {id: 1, message: 'Hi, how are you?', likesCount: 23},
    {id: 2, message: 'It\'s my first post', likesCount: 34},
]

ReactDOM.render(
  <React.StrictMode>
    <App dialogs={dialogs} messages={messages} posts={posts}/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
