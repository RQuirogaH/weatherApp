import React from "react";
import { useSelector } from "react-redux";
import s from './CityMain.module.css'

const CityMain = (props) => {

    const city = useSelector(state => state.city)

    console.log(city)

    if(city.id){
        return (
            <div className={s.container} key={city.id}>
                <h1>Aqui va la info de la ciudad</h1>
                <h3>{city.name}</h3>
                <img src={`http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`} alt="" />
                <p>{city.main.temp} °C</p>
                <p>Feels like: {city.main.feels_like}° </p>
                <p>{city.main.temp_max}° | {city.main.temp_min}°</p>
                
            </div>
        )
    }

    return (
        <div className={s.container}>
            <h1>Busca una ciudad omeeee</h1>
        </div>
    )

}

export default CityMain;