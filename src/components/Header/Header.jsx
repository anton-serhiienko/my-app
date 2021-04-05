import React from "react";
import css from "./Header.module.css"
import {NavLink} from "react-router-dom";


const Header = (props) => {

    return(
        <header className={css.header}>
            <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCCmV4hdR0WwQdDksdPtHdYPSGo27bnOl0dA&usqp=CAU'}/>
            <div className={css.loginBlock}>
                {props.isAuth ? props.login
                    : <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    );
}

export default Header;