import React from 'react';
import '../styles/SimpleAppointmentCard.css';

const SimpleAppointmentCard = (props) => {
    const getValue = props.schedule;
    return (
        <div className="weekday-schedules">
            <div className="on-weekday">On {getValue.Weekday}</div>
            <div className="schedule-elements">
                {getValue.cardContent.map((item, ind) => (
                    <div className="schedule-card" key={ind}>
                        <div className="schedule-card-head">
                            <h6>{item.info}</h6>
                            <span>{item.icon}</span>
                        </div>
                        <span className='schedule-card-time'>{item.time}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SimpleAppointmentCard;
