import React from "react";
import { useSelector } from "react-redux";
import CardCity from "./CardCity";
import s from './Cards.module.css';


const Cards = () => {
    const cities = useSelector(state => state.cities)

    return(
        <div className={s.container}>
            {cities?.map(c => <CardCity
                key = {c.id}
                name= {c.name}
                id = {c.id}
                min = {c.main.temp_min}
                max = {c.main.temp_max}
            />)}
        </div>
    )
}

export default Cards;
