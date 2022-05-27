import React from "react";
import { Link } from "react-router-dom";
import imgLogo from '../../Assets/Images/weather.png'
import s from './Navbar.module.css'

function Navbar(props) {

    return (
        <nav className={s.container}>
            <Link to='/'><img src={imgLogo} alt="logo" /></Link>
            <ul>
                <Link to='/'>Home</Link>
                <Link to='/about'>AboutUs</Link>
            </ul>
        </nav>
    )
}

export default Navbar