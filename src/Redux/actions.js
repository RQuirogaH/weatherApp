export const GET_CITY = 'GET_CITY';

const APIkey = '0b394c26e2f876b7d4c4c779ffe2afff'

export function getCity(city) {
    return async function(dispatch) {
        return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}&units=metric`)
        .then(response =>  response.json())
        .then(data => {
            if(data.cod === 200) dispatch({type: GET_CITY, payload: data})
        })
        .catch(err => console.log('la ciudad no existe'))
    }
}