import React from 'react';
import './App.css';
import Hero from './components/Hero';
import WeddingDetails from './components/WeddingDetails';
import RSVP from './components/RSVP';
import GettingThere from './components/GettingThere';
import Itinerary from './components/Itinerary';

function App() {
    return (
        <div className="App">
            <Hero />
            <WeddingDetails />
            <GettingThere />
            <Itinerary />
            <RSVP />
        </div>
    );
}

export default App;
