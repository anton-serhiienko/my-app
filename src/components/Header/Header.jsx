import React from "react";
import css from "./Header.module.css"
import {NavLink} from "react-router-dom";


const Header = () => {
    return(
        <header className={css.header}>
            <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCCmV4hdR0WwQdDksdPtHdYPSGo27bnOl0dA&usqp=CAU'}/>
            <div className={css.loginBlock}>
                <NavLink to={'/login'}>Login</NavLink>
            </div>
        </header>
    );
}

export default Header;