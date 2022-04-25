import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import {AllActionCreatorType, RootStateType, StoreType} from "./redux/state";

type PropsType = {
    store: StoreType
    state: RootStateType
    dispatch: (action: AllActionCreatorType) => void
}

function App(props: PropsType) {

    const {state,dispatch} = props

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar state={state}/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={()=><Dialogs state={state.dialogsPage} dispatch={dispatch} newMessageText={state.dialogsPage.newMessageText}/>}/>
                    <Route path='/profile' render={()=><Profile state={state.profilePage} dispatch={dispatch}/>}/>
                    <Route path='/news' render={()=><News/>}/>
                    <Route path='/music' render={()=><Music/>}/>
                    <Route path='/settings' render={()=><Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
