import React from 'react';
import '../styles/HealthStatusCards.css';

const HealthStatusCards = (props) => {

    return (
        <>
            <div className="status-cards">
                <div className='card-head'>
                    <span className='card-icon'>{props.healthStatus.icon}</span>
                    <h5>{props.healthStatus.name}</h5>
                </div>
                <span className='card-date'>{props.healthStatus.date}</span>
                <div className='card-bar'><div className='bar-limit' style={{ backgroundColor: `${props.healthStatus.color}` }}></div></div>
            </div>
        </>
    )
}

export default HealthStatusCards;
