import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getCity } from "../../Redux/actions";
import lupa from '../../Assets/Images/lupa.png'

import s from './SearchBar.module.css'

const SearchBar = () => {

    const dispatch = useDispatch();

    const [input, setInput] = useState('')

    const handleChange = (e) => {
        setInput(
            e.target.value
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(getCity(input))
        setInput('');
    }

    return(
        <form onSubmit={handleSubmit} className={s.form}>
            <input type="text" placeholder="search location" value={input} onChange={handleChange} className={s.input}/>
            <button type="submit" className={s.boton}><img src={lupa} alt="" className={s.img}/></button>
        </form>
    )
}

export default SearchBar