import React from "react";
import { useSelector } from "react-redux";
import { useRef } from "react";
import SearchBar from "../Search/SearchBar";
import s from './CityMain.module.css';

const CityMain = (props) => {

    const city = useSelector(state => state.city)
    const fecha = useRef('')

    let getDateDatails = () => {
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const months = ['Jan', 'Feb', 'Mar','Apr','May','Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        let date = new Date(city.dt * 1000);
        let day = days[date.getDay()];
        let dayN = date.getDate();
        let mont = months[date.getMonth()];
        fecha.current = `Today • ${day}, ${dayN} ${mont}`
    }

    if(city.id){
        getDateDatails();
        return (
                <div className={s.container} key={city.id}>
                    <SearchBar/>
                    <div className={s.bg_image}>
                        <img src={require(`../../Assets/Images/${city.weather[0].icon}.png`)} alt="" className={s.icon}/>
                    </div>
                    <p className={s.temp}>
                        <span>{Math.round(city.main.temp)}</span> °C
                    </p>
                    <p className={s.feelsLike}>
                        Feels like: {Math.round(city.main.feels_like)}° 
                    </p>
                    <p className={s.weatherD}>
                        {city.weather[0].main}
                    </p>
                    <p className={s.fecha}>
                        {fecha.current}
                    </p>
                    <p className={s.location}>
                        <img src={require('../../Assets/Images/location.png')} alt="" className={s.locationIMG}/>
                        {city.name}
                    </p>                
                </div>
        )
    }

    return (
        <div className={s.container}>
            <SearchBar/>
            <h1>Busca una ciudad omeeee</h1>
        </div>
    )

}

export default CityMain;