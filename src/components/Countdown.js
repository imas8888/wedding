import React, { useState, useEffect } from 'react';
import './Countdown.css';

const Countdown = () => {
    const calculateTimeLeft = () => {
        const targetDate = new Date('2024-11-30T12:00:00');
        const now = new Date();
        const difference = targetDate - now;

        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    }, [timeLeft]);

    return (
        <div className="countdown">
            {timeLeft.days !== undefined && (
                <>
                    <div className="time-box">
                        <span className="time">{timeLeft.days}</span>
                        <span className="label">Days</span>
                    </div>
                    <span className="separator">:</span>
                </>
            )}
            {timeLeft.hours !== undefined && (
                <>
                    <div className="time-box">
                        <span className="time">{timeLeft.hours}</span>
                        <span className="label">Hours</span>
                    </div>
                    <span className="separator">:</span>
                </>
            )}
            {timeLeft.minutes !== undefined && (
                <div className="time-box">
                    <span className="time">{timeLeft.minutes}</span>
                    <span className="label">Minutes</span>
                </div>
            )}
        </div>
    );
};

export default Countdown;