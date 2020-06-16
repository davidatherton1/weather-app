import React, {useState} from 'react';
import apiConfig from './apiKey'
import DayCard from './DayCard'
import Search from './search'
let zipcodes = require('zipcodes');

class WeekContainer extends React.Component {
    constructor(props) {
        super(props);
        this.cityname = zipcodes.lookup(55414).city;
        this.statename = zipcodes.lookup(55414).state;
        this.state = {
            city: '',
            fullData: [],
            dailyData: [],
        };

        this.onFormSubmit = this.onFormSubmit.bind(this);
    }


    onFormSubmit(city){
        this.setState({ city });
        this.cityname = zipcodes.lookup(city).city;
        this.statename = zipcodes.lookup(city).state;
        const weatherURL = `http://api.openweathermap.org/data/2.5/forecast?zip=${city}&units=imperial&APPID=${apiConfig.openWeatherAPI}`
        fetch(weatherURL)
            .then(res => res.json())
            .then(data => {
                const dailyData = data.list.filter(reading => reading.dt_txt.includes("18:00:00"))
                this.setState({
                    fullData: data.list,
                    dailyData: dailyData
                }, () => console.log(this.state))
            })
    }

    componentDidMount = () => {
        const weatherURL = `http://api.openweathermap.org/data/2.5/forecast?zip=55414&units=imperial&APPID=${apiConfig.openWeatherAPI}`
        fetch(weatherURL)
            .then(res => res.json())
            .then(data => {
                const dailyData = data.list.filter(reading => reading.dt_txt.includes("18:00:00"))
                this.setState({
                    fullData: data.list,
                    dailyData: dailyData
                }, () => console.log(this.state))
            })
    };

    formatDayCards = () => {
        return this.state.dailyData.map((reading, index) => <DayCard reading={reading} key={index} />)
    };

    render() {
        return (
            <div className="container">
                <Search onSubmit={this.onFormSubmit}/>
                <h1 className="display-1 jumbotron">{ this.cityname }, { this.statename } </h1>
                <div className="row justify-content-center">

                    {this.formatDayCards()}

                </div>
            </div>
        )
    }
}

export default WeekContainer;