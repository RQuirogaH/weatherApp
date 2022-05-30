import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getCity } from "../../Redux/actions";

const SearchBar = (props) => {

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
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="search location" value={input} onChange={handleChange}/>
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default SearchBar