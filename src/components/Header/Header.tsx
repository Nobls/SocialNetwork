import React from "react";
import s from './Header.module.css'

function Header() {
    return (
        <header className={s.header}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXEqO70btC_vEXT-70l1blyQI7cJpT30QFCw&usqp=CAU" alt="logo"/>
        </header>
    )
}

export default Header