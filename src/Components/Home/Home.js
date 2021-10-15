import React from 'react';
import './Home.css';
import { FaArrowCircleRight } from 'react-icons/fa';
import Hero from '../Hero/Hero';
import Service from '../../Service/Service';
import Feature from '../../Feature/Feature';
import Banner from '../../Banner/Banner';
import { Link } from 'react-router-dom';

const Home = () => {

    return (
        <>
            <Hero hero="homeHero">
                <Banner
                    title="cox's bazar"
                    subtitle="deluxe rooms starting at $299"
                >
                    <Link className="bg-blue-400 inline-block py-2 px-3 rounded-xl" to='/login'>book now</Link>
                </Banner>
            </Hero>
            {/* <Service></Service>
            <Feature></Feature> */}
        </>
    );
};

export default Home;