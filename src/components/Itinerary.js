import React from 'react';
import { useInView } from 'react-intersection-observer';
import './Itinerary.css';

const Itinerary = () => {
    const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [ref4, inView4] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [ref5, inView5] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [ref6, inView6] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [ref7, inView7] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [ref8, inView8] = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <section id="itinerary" className="itinerary-section">
            <h2>Wedding Itinerary</h2>
            <div className="timeline">
                <div ref={ref1} className={`timeline-event ${inView1 ? 'left' : ''}`}>
                    <div className="timeline-image">
                        <img src="https://png.pngtree.com/png-clipart/20230913/original/pngtree-bmw-clipart-full-bmw-m4-car-vector-illustration-graphic-art-cartoon-png-image_11056399.png" alt="Arrival of Guests" />
                    </div>
                    <div className="timeline-details">
                        <div className="timeline-time">12:00</div>
                        <div className="timeline-content">
                            <h3>Arrival of Guests</h3>
                            <p>Please arrive promptly as canapes will be served from this time!</p>
                        </div>
                    </div>
                </div>

                <div ref={ref2} className={`timeline-event ${inView2 ? 'right' : ''}`}>
                    <div className="timeline-image">
                        <img src="https://pics.clipartpng.com/Groom_Silhouette_Clip_Art-1214.png" alt="Groom's Entrance" />
                    </div>
                    <div className="timeline-details">
                        <div className="timeline-time">13:00</div>
                        <div className="timeline-content">
                            <h3>Groom's Entrance</h3>
                            <p>Witness the groom's grand entrance.</p>
                        </div>
                    </div>
                </div>

                <div ref={ref3} className={`timeline-event ${inView3 ? 'left' : ''}`}>
                    <div className="timeline-image">
                        <img src="https://cdn2.iconfinder.com/data/icons/bride-around-the-world/2126/nev6-512.png" alt="Bride's Entrance" />
                    </div>
                    <div className="timeline-details">
                        <div className="timeline-time">13:15</div>
                        <div className="timeline-content">
                            <h3>Bride's Entrance</h3>
                            <p>The bride makes her beautiful entrance.</p>
                        </div>
                    </div>
                </div>

                <div ref={ref4} className={`timeline-event ${inView4 ? 'right' : ''}`}>
                    <div className="timeline-image">
                        <img src="https://static.thenounproject.com/png/3242500-200.png" alt="Food Service Begins" />
                    </div>
                    <div className="timeline-details">
                        <div className="timeline-time">13:45</div>
                        <div className="timeline-content">
                            <h3>Food Service Begins</h3>
                            <p>Enjoy a delicious meal as the food service starts.</p>
                        </div>
                    </div>
                </div>

                <div ref={ref5} className={`timeline-event ${inView5 ? 'left' : ''}`}>
                    <div className="timeline-image">
                        <img src="https://static.thenounproject.com/png/4632763-200.png" alt="Asr" />
                    </div>
                    <div className="timeline-details">
                        <div className="timeline-time">14:15</div>
                        <div className="timeline-content">
                            <h3>Asr</h3>
                            <p>The afternoon prayer will be offered.</p>
                        </div>
                    </div>
                </div>

                <div ref={ref6} className={`timeline-event ${inView6 ? 'right' : ''}`}>
                    <div className="timeline-image">
                        <img src="https://i.pinimg.com/originals/0c/7c/81/0c7c81eb376ae04ff649d79890925201.png" alt="Cake Cutting" />
                    </div>
                    <div className="timeline-details">
                        <div className="timeline-time">15:00</div>
                        <div className="timeline-content">
                            <h3>Cake Cutting</h3>
                            <p>Join us for the ceremonial cake cutting.</p>
                        </div>
                    </div>
                </div>

                <div ref={ref7} className={`timeline-event ${inView7 ? 'left' : ''}`}>
                    <div className="timeline-image">
                        <img src="https://static.thenounproject.com/png/1374384-200.png" alt="Maghrib" />
                    </div>
                    <div className="timeline-details">
                        <div className="timeline-time">15:57</div>
                        <div className="timeline-content">
                            <h3>Maghrib</h3>
                            <p>Evening prayer will be offered at this time.</p>
                        </div>
                    </div>
                </div>

                <div ref={ref8} className={`timeline-event ${inView8 ? 'right' : ''}`}>
                    <div className="timeline-image">
                        <img src="https://d29fhpw069ctt2.cloudfront.net/clipart/93709/preview/wedding-car_preview_8dab.png" alt="Rukhsati" />
                    </div>
                    <div className="timeline-details">
                        <div className="timeline-time">16:45</div>
                        <div className="timeline-content">
                            <h3>Rukhsati</h3>
                            <p>The bride will bid farewell as she departs with the groom.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Itinerary;
