import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Hero from '../Hero/Hero';
import './Rooms.css';

const Rooms = () => {
    return (
        <Hero hero="roomHero">
            <Banner
                title="our rooms"
            >
                <Link className="bg-blue-400 inline-block py-2 px-3 rounded-xl" to="/">return home</Link>
            </Banner>
        </Hero>
    );
};

export default Rooms;