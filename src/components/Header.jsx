import React from "react";
import css from "./Header.module.css"


const Header = () => {
    return(
        <header className={css.header}>
            <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCCmV4hdR0WwQdDksdPtHdYPSGo27bnOl0dA&usqp=CAU'}/>
        </header>
    );
}

export default Header;