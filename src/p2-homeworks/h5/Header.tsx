import React from 'react'
import { NavLink } from 'react-router-dom'
import {PATH} from "./Routes";
import classes from "./Header.module.css"

function Header() {
    return (
        <div className={classes.header}>
            <NavLink className={classes.navClass} to={PATH.PRE_JUNIOR}>Pre-Junior</NavLink>
            <NavLink className={classes.navClass} to={PATH.JUNIOR}>Junior</NavLink>
            <NavLink className={classes.navClass} to={PATH.JUNIOR_PLUS}>Junior-Plus</NavLink>
        </div>
    )
}

export default Header
