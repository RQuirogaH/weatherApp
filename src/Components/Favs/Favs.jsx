import React from "react";
import { useSelector } from "react-redux";
import CityMini from '../CityMini/CityMini.jsx';
import s from './Favs.module.css';


const Cards = () => {
    const cities = useSelector(state => state.cities)

    return(
        <div className={s.container}>
            Aqui van las ciudades favoritas
            <br/>
            Aún no funciona xD
            {cities?.map(c => <CityMini
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
