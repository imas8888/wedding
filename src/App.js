import React from 'react';
import './App.css';
import Hero from './components/Hero';
import WeddingDetails from './components/WeddingDetails';
import RSVP from './components/RSVP';
import GettingThere from './components/GettingThere';

function App() {
    return (
        <div className="App">
            <Hero />
            <WeddingDetails />
            <GettingThere />
            <RSVP />
        </div>
    );
}

export default App;
