import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Countries = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => setCountries(data))
    },[])

    return (
        <div>
            <h1>Welcome to new country</h1>
            <ul>
                {
                    countries.map(country => <li >
                        <Link to={country.name.common}>
                            {country.name.common}
                        </Link></li>)
                }
            </ul>
        </div>
    );
};

export default Countries;