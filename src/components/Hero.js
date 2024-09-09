import React, { useEffect } from 'react';
import './Hero.css';
import Countdown from './Countdown';

const Hero = () => {
    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY;
            const heroBackground = document.querySelector('.hero');
            heroBackground.style.backgroundPositionY = -(scrolled * 0.5) + 'px'; // Adjust the multiplier for desired effect
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section id="hero" className="hero">
            <div className="content">
                <Countdown />
                <div className="logo">
                    <h1>Sami & Aisha</h1>
                </div>
                <div className="pill">
                    <span className="pill-text">Saturday<br/>30th November 2024</span>
                    <div className="divider"></div>
                    <span className="pill-text">12:00pm<br/>Birmingham</span>
                </div>
            </div>
        </section>
    );
}

export default Hero;
