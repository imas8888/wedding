import React from 'react';
import './WeddingDetails.css';

const WeddingDetails = () => {
    return (
        <section id="details" className="details">
            <div className="details-left">
                <h2>Wedding Details</h2>
                <p><h3>DATE</h3> Saturday 30th November 2024 <br/> 12:00pm - 5:00pm </p>
                <p><h3>VENUE</h3> Quaid-E-Azam Grand Ballroom <br/> Montague Street <br/> Birmingham B4 7XH </p>
                <p><h3>DRESS</h3> Formal | Black Tie</p>
            </div>
            <div className="details-right">
                <h2>Note from the Families</h2>
                <h3>بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</h3>
                <p>
                    We are thrilled to share the joy of this special day with all of you. For us, this celebration is about more than just a wedding; it represents the beginning of a lifelong journey, filled with love, laughter, and countless blessings from Allah (SWT).
                    <br/><br/>
                    We warmly invite you to join us for the reception on November 30th, at 12:00 pm, following the intimate nikkah ceremony.
                    <br/><br/>
                    Each of you has played a meaningful role in our lives, and we are honored to have you witness this significant moment as our children start this new chapter together, guided by faith.
                    <br/><br/>
                    With heartfelt duas (prayers) and love,
                    <br/><br/>
                    Mr & Mrs. Khan and Mr & Mrs. Anjum
                </p>
            </div>
        </section>
    );
}

export default WeddingDetails;