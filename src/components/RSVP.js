import React, { useState } from 'react';
import './RSVP.css';

const RSVP = () => {
    const [formData, setFormData] = useState({
        name: '',
        attending: '',
        guests: '',
        allergies: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const scriptURL = 'https://script.google.com/macros/s/AKfycbwSjzBT2KoyFt-5st8ABh249PIj_I-oBlpm1d5k0-NNlnSvBTEnoKdBzeH-vSUJyDFVtQ/exec'; // Replace with your Apps Script URL

        try {
            const response = await fetch(scriptURL, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert('RSVP Submitted Successfully');
            } else {
                alert('There was an issue submitting your RSVP');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error submitting RSVP. Please try again.');
        }
    };

    return (
        <section className="rsvp-section">
            <h2>RSVP</h2>
            <p>Please let us know if you'll be able to join us on our special day!</p>
            <form className="rsvp-form" onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />

                <label>Attending:</label>
                <select name="attending" value={formData.attending} onChange={handleChange} required>
                    <option value="">Select...</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>

                {/* Conditionally render "Guests" and "Allergies" if "Attending" is Yes */}
                {formData.attending === "Yes" && (
                    <>
                        <label>Number of Guests:</label>
                        <input type="number" name="guests" value={formData.guests} onChange={handleChange} required />

                        <label>Any Allergies:</label>
                        <textarea name="allergies" value={formData.allergies} onChange={handleChange}></textarea>
                    </>
                )}

                <button type="submit">Submit RSVP</button>
            </form>
        </section>
    );
};

export default RSVP;