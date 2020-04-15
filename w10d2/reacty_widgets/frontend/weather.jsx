import React from 'react';
class Weather extends React.Component{
    constructor(props){
        super(props);
        this.state = {lat:"",lon:""}
    }

    render(){
        
    }
    getWeather() {
        return $.ajax({
            url: `api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lon}&appid=${c3d8482d05210b39fb53842c311bcbed}`,
            type: 'GET'
        })
    }
}

export default Weather