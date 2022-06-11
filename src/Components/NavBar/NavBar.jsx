import React from "react";
import SearchBar from "../Search/SearchBar";

import s from './NavBar.module.css'

const NavBar = () => {
    return (
        <div className={s.navBar}>
            <h3>Weather App</h3>
            <SearchBar />
        </div>
    )
}

export default NavBar;
