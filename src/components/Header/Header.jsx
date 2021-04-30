import React from "react";
import css from "./Header.module.css"
import {NavLink} from "react-router-dom";
import {Navbar, Nav, Button} from "react-bootstrap";



const Header = (props) => {

    //const logo = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCCmV4hdR0WwQdDksdPtHdYPSGo27bnOl0dA&usqp=CAU'

    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className={css.header}>
            <Navbar.Brand>Social Network</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav classname={"mr-auto"}>
                        <NavLink to="/profile" activeClassName={css.activeLink}>Profile</NavLink>
                        <NavLink to="/dialogues" activeClassName={css.activeLink}>Messages</NavLink>
                        <NavLink to="/users" activeClassName={css.activeLink}>Users</NavLink>
                        <NavLink to="/news" activeClassName={css.activeLink}>News</NavLink>
                        <NavLink to="/music" activeClassName={css.activeLink}>Music</NavLink>
                        <NavLink to="/settings" activeClassName={css.activeLink}>Settings</NavLink>
                </Nav>
            </Navbar.Collapse>
            {/*<img src={logo}/>*/}

            <div className={css.loginBlock}>
                {props.isAuth ? <div>{props.login} -- <Button onClick={props.logout}>Log Out</Button></div>
                    : <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </Navbar>
    );
}

export default Header;