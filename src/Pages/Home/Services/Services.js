import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);

    // get data from services.json from public folder using fetch
    useEffect(() => {
        fetch('services.json')
            .then(result => result.json())
            .then(data => {
                setServices(data)
            })
    }, [])

    return (
        <div id="services">
            <div className="container">
                <h1 className='services-title my-5'>Services:</h1>
                <div className="services-container ">
                    {/* Map each object to create individual service components*/}
                    {
                        services.map(service => <Service
                            key={service.id}
                            service={service}
                        ></Service>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;