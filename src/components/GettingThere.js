import React from 'react';
import './GettingThere.css';

const GettingThere = () => {
    const locationAddress = "Quaid-E-Azam Grand Ballroom, Birmingham"; // Replace with actual address
    const appleMapsLink = `https://maps.apple.com/?ll=52.479727,-1.879045&q=Dropped%20Pin&t=m`;
    const googleMapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(locationAddress)}`;
    const wazeLink = `https://waze.com/ul/hgcqdt1xsz`;

    return (
        <section id="getting-there" className="getting-there">
            <h2>Getting There</h2>
            <p>The wedding will be held at the Quaid-E-Azam Grand Ballroom in Birmingham. Below is a map to help you find your way:</p>
            
            <div className="map-container">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9719.854701715121!2d-1.8790256!3d52.4797934!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870bb00723223dd%3A0x8d45b31b0a41e76e!2sQuaid-E-Azam%20Grand%20Ballroom!5e0!3m2!1sen!2suk!4v1725396688893!5m2!1sen!2suk"
                    width="100%"
                    height="450"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Quaid-E-Azam Grand Ballroom Map"
                ></iframe>
            </div>
            <div className="map-buttons">
                <a href={appleMapsLink} className="map-button" target="_blank" rel="noopener noreferrer">
                    <img src="https://developer.apple.com/assets/elements/icons/maps/maps-128x128_2x.png" alt="Open in Apple Maps" />
                </a>
                <a href={googleMapsLink} className="map-button" target="_blank" rel="noopener noreferrer">
                    <img src="https://cdn-icons-png.flaticon.com/256/2875/2875433.png" alt="Open in Google Maps" />
                </a>
                <a href={wazeLink} className="map-button" target="_blank" rel="noopener noreferrer">
                    <img src="https://cdn-icons-png.flaticon.com/256/732/732257.png" alt="Open in Waze" />
                </a>
            </div>
        </section>
    );
}

export default GettingThere;