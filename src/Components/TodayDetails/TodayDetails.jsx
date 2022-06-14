import React from "react";
import { useSelector } from "react-redux";

import s from './TodayDetails.module.css'

const TodayDetails = (props) => {
    const city = useSelector(state => state.city);

    if(city.id){
        return(
            <div className={s.container}>
                <h3>Today's hightligths</h3>
                <div className={s.details}>
                    <div className={s.wind}>
                        <p>Wind status</p>
                        <p className={s.data}>
                            <span>{(city.wind.speed)}</span>m/s
                        </p>
                        <div className={s.navIcon}>
                            <img src={require('../../Assets/Images/up-arrow.png')} alt="" />
                        </div>
                    </div>  
                    <div className={s.humidity}>
                        <p>Humidity</p>
                        <p className={s.data}>
                            <span>{(city.main.humidity)}</span>%
                        </p>
                        <div className={s.bar}>
                            <ul className={s.values}>
                                <li>0</li>
                                <li>50</li>
                                <li>100</li>
                            </ul>
                            <div className={s.progBorder}>
                                <div className={s.progCont} style={{width: `${city.main.humidity}%`}}></div>
                            </div> 
                            <ul className={s.percent}>
                                <li>%</li>
                            </ul>
                        </div>
                    </div>
                    <div className={s.visibility}>
                        <p>Visibility</p>
                        <p className={s.data}>
                            <span>{(city.visibility/1000)}</span>km
                        </p>
                    </div>
                    <div className={s.airP}>
                        <p>Air pressure</p>
                        <p className={s.data}>
                            <span>{Math.round(city.main.pressure)}</span>hPa
                        </p>
                    </div>  
                </div>
            </div>
        )
    }

    return(
        <div></div>
    )
}

export default TodayDetails

