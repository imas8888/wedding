import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import './RSVP.css';

const RSVP = () => {
    const [formData, setFormData] = useState({
        name: '',
        side: '',
        attending: '',
        guests: '',
        allergies: ''
    });
    const [message, setMessage] = useState('');

    // Check if the RSVP has already been submitted
    useEffect(() => {
        const rsvpSubmitted = Cookies.get('rsvpSubmitted');
        if (rsvpSubmitted) {
            // Set the message based on the cookie value
            const attending = Cookies.get('rsvpAttending');
            if (attending === 'Yes') {
                setMessage('You have successfully RSVPd. Thank you!');
            } else if (attending === 'No') {
                setMessage('Sorry to hear you won’t be attending. If you change your mind, you can RSVP again.');
            }
        }
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const scriptURL = 'https://script.google.com/macros/s/AKfycbw8Pw-rJF4Af6n48WZGthy0fzSmp1qn-eu8tRToO_A6ejymYfMd0ckPg13D4bd0l5hn_w/exec'; // Replace with your Apps Script URL

        try {
            await fetch(scriptURL, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            Cookies.set('rsvpSubmitted', 'true', { expires: 365 }); // Set cookie to indicate submission
            Cookies.set('rsvpAttending', formData.attending, { expires: 365 }); // Save attending status
            setMessage(formData.attending === 'Yes'
                ? 'You have successfully RSVPd. Thank you!'
                : 'Sorry to hear you won’t be attending. If you change your mind, you can RSVP again.');
        } catch (error) {
            console.error('Error:', error);
            setMessage('Error submitting RSVP. Please try again.');
        }
    };

    const handleChangeMind = () => {
        Cookies.remove('rsvpSubmitted');
        Cookies.remove('rsvpAttending');
        setFormData({
            name: '',
            side: '',
            attending: '',
            guests: '',
            allergies: ''
        });
        setMessage('');
    };

    return (
        <section className="rsvp-section">
            {message ? (
                <>
                    <h2>RSVP</h2>
                    <p>{message}</p>
                    {formData.attending === 'No' && (
                        <button onClick={handleChangeMind} className="change-mind-button">
                            Change My Mind
                        </button>
                    )}
                </>
            ) : (
                <>
                    <h2>RSVP</h2>
                    <p>Please let us know if you'll be able to join us on our special day!</p>
                    <form className="rsvp-form" onSubmit={handleSubmit}>
                        <label>Name:</label>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} required />

                        <label>Side:</label>
                        <select name="side" value={formData.side} onChange={handleChange} required>
                            <option value="">Select...</option>
                            <option value="Yes">Bride</option>
                            <option value="No">Groom</option>
                        </select>

                        <label>Attending:</label>
                        <select name="attending" value={formData.attending} onChange={handleChange} required>
                            <option value="">Select...</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>

                        {/* Conditionally render "Guests" and "Allergies" if "Attending" is Yes */}
                        {formData.attending === 'Yes' && (
                            <>
                                <label>Number of Guests:</label>
                                <input type="number" name="guests" value={formData.guests} onChange={handleChange} required />

                                <label>Any Allergies:</label>
                                <textarea name="allergies" value={formData.allergies} onChange={handleChange}></textarea>
                            </>
                        )}

                        <button type="submit">Submit RSVP</button>
                    </form>
                </>
            )}
        </section>
    );
};

export default RSVP;
