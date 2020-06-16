import React, { useState } from 'react';

class Search extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            city: ''
        };

        this.inputUpdated = this.inputUpdated.bind(this);
        this.submitCity = this.submitCity.bind(this);
    }

    submitCity(e){
        e.preventDefault();

        const { city } = this.state;
        const { onSubmit } = this.props;

        onSubmit(city);
        this.setState( { city: '' })
    }

    inputUpdated(e){
        const { value } = e.target;

        this.setState({ city: value});
    }

    render(){
        return (
            <div>
                <h2>Find Current Weather Conditions</h2>
                <form onSubmit={this.submitCity}>
                    <input
                        type="input"
                        placeholder="Enter Zipcode"
                        maxLength="50"
                        value={this.state.city}
                        onInput={this.inputUpdated}
                    />
                    <button type="submit">Get Forecast</button>
                </form>
            </div>
        )
    }
}


export default Search;
