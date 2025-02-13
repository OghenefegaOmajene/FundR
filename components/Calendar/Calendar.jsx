import { useState, useEffect } from "react";
import React from "react";
import "./Calendar.css";

const Calendar = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [daysInMonth, setDaysInMonth] = useState([]);
    const [startDay, setStartDay] = useState(0);
    const [selectedDate, setSelectedDate] = useState(null);

    useEffect(() => {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        const firstDay = new Date(year, month, 1);
        const days = [];

        while (firstDay.getMonth() === month) {
            days.push(new Date(firstDay));
            firstDay.setDate(firstDay.getDate() + 1);
        }

        setDaysInMonth(days);
        setStartDay(new Date(year, month, 1).getDay());
    }, [currentDate]);

    const dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

    const prevMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
    };

    const nextMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
    };

    const handleDateClick = (date) => {
        setSelectedDate(date);
    };

    return (
        <div className="calendarBox">
            <div className="header">
                <button onClick={prevMonth}> &lt; </button>
                <span>
                    {currentDate.toLocaleString("default", { month: "long" })}{" "}
                    {currentDate.getFullYear()}
                </span>
                <button onClick={nextMonth}> &gt; </button>
            </div>

            <div className="dayNames">
                {dayNames.map((day) => (
                    <div key={day} className="dayName">
                        {day}
                    </div>
                ))}
            </div>

            <div className="days">
                {/* Fix: Properly generate empty days for start of the month */}
                {Array(startDay).fill(null).map((_, index) => (
                    <div key={`empty-${index}`} className="emptyDay"></div>
                ))}

                {daysInMonth.map((day) => (
                    <div
                        key={day.toISOString()}
                        className={`day ${
                            day.getDate() === new Date().getDate() &&
                            day.getMonth() === new Date().getMonth()
                                ? "today"
                                : ""
                        } ${selectedDate && day.toDateString() === selectedDate.toDateString() ? "selected" : ""}`}
                        onClick={() => handleDateClick(day)}
                    >
                        {day.getDate()}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Calendar;
