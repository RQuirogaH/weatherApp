import React from "react";
import { useSelector } from "react-redux";
import { useRef } from "react";
import s from './CityMain.module.css';

const CityMain = (props) => {

    const city = useSelector(state => state.city)
    const fecha = useRef('')
    let fechaDeHoy = '12 de junio'

    let getDateDatails = () => {
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const months = ['Jan', 'Feb', 'Mar','Apr','May','Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        let date = new Date(city.dt * 1000);
        let day = days[date.getDay()];
        let dayN = date.getDate();
        let mont = months[date.getMonth()];
        fecha.current = `Today • ${day}, ${dayN} ${mont}`
        fechaDeHoy = `Today • ${day}, ${dayN} ${mont}`
    }

    if(city.id){
        getDateDatails();
        return (
            <div className={s.container} key={city.id}>
                <div className={s.bg_image}>
                    <img src={require(`../../Assets/Images/${city.weather[0].icon}.png`)} alt="" className={s.icon}/>
                </div>
                <p><span>{Math.round(city.main.temp)}</span> °C</p>
                <p>Feels like: {Math.round(city.main.feels_like)}° </p>
                <p>{city.weather[0].main}</p>
                <p>{fechaDeHoy}</p>

                <p> {city.name}</p>                
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