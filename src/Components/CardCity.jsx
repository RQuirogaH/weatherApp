import React from "react";
import s from './CardCity.module.css';


const CardCity = (props) => {

    return (
        <div className={s.container}>
            <h5 className={s.city}>{props.name}</h5>
            <p>{props.min} °C</p>
        </div>
    )
}

export default CardCity;