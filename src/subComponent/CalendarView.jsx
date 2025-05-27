import React from 'react';
import '../styles/CalendarView.css';
import { TbArrowBigLeftLinesFilled } from "react-icons/tb";
import { TbArrowBigRightLinesFilled } from "react-icons/tb";
import { CalenderApp } from '../data/appointmentCalendar';
import { AppCardDetails } from '../data/appointmentCalendar';

const CalendarView = () => {
  return (
    <>
      <div className="month-arrow">
        <h5>October 2021</h5>
        <span className='arrow-icon-span'><TbArrowBigLeftLinesFilled /><TbArrowBigRightLinesFilled /></span>
      </div>
      <div className="calender-container">
        {CalenderApp.map((value, index) => (
          <div className="calendar-days" key={index}>
            <span className='calendar-weekday'>{value.weekday}</span>
            <h4>{value.day}</h4>
            {value.times.map((time, ind) => (
              <span key={ind} className={value.scheduled == time ? 'scheduled' : ''}>{time}</span>
            ))}
          </div>
        ))}
      </div>
      <div className="appointment-details">
        {AppCardDetails.map((value, index) => (
          <div className="appointment-cards" key={index}>
            <div className="appCard-head">
              <h6>{value.info}</h6>
              <span className='app-Card-icon'>{value.icon}</span>
            </div>
            <span className='appCard-span'>{value.time}</span>
            <span className='appCard-span'>{value.doctor}</span>
          </div>
        ))}
      </div>
    </>
  )
}

export default CalendarView;
