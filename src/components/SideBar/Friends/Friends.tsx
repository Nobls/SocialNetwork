import React from 'react';
import {state} from "../../../redux/state";

const Friends = (props:any) => {

    const {name} = props

    return (
        <div>
            <img style={{width:'50px', height:'50px'}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq_I0JFO2DxoAV3J-sI7ajtx0qW0Q5neaY_A&usqp=CAU' alt="avatar"/>
            <div>{name}</div>
        </div>
    );
};

export default Friends;