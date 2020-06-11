import React, { useState } from 'react';

const search = () => {
    let [city, setCity] = useState('');
    return (
        <div>
            <h2>Find Current Weather Conditions</h2>
            <form onSubmit={getForecast}>
                <input
                    type="text"
                    placeholder="Enter City"
                    maxLength="50"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <button type="submit">Get Forecast</button>
            </form>
        </div>
    )
}

export default search;
