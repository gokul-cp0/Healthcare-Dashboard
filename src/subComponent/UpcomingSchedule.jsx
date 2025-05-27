import React from 'react';
import { UpSchedules } from '../data/upcomingAppoinments';
import SimpleAppointmentCard from './SimpleAppointmentCard';

const UpcomingSchedule = () => {
    const upcomingContainer = {
        paddingLeft: "20px",
        color: "rgb(38, 49, 109)"
    }
    const UpHead = { marginTop: '10px' };

    return (
        <div style={upcomingContainer} className='upcoming-container'>
            <h4 style={UpHead}>The Upcoming Schedule</h4>
            {UpSchedules.map((value, index) => (
                <SimpleAppointmentCard key={index} schedule={value} />
            ))}
        </div>
    )
}

export default UpcomingSchedule;
