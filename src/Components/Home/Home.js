import React from 'react';
import './Home.css';
import Hero from '../Hero/Hero';
import { Link } from 'react-router-dom';
import Service from '../Service/Service';
import Banner from '../Banner/Banner';
import Feature from '../Feature/Feature';

const Home = () => {
    return (
        <>
            <Hero hero="homeHero">
                <Banner
                    title="cox's bazar"
                    subtitle="deluxe rooms starting at $299"
                >
                    <Link className="bg-blue-400 inline-block py-2 px-3 rounded-xl" to='/rooms'>our rooms</Link>
                </Banner>
            </Hero>
            <Service />
            <Feature />
        </>
    );
};

export default Home;