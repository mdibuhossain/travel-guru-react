import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <>
            <div className="relative min-h-screen flex flex-col justify-center">
                <div className="flex flex-grow banner">
                    <span className="flex flex-grow opacity-70 bg-gray-900"></span>
                </div>
                <div className="absolute z-30 flex justify-center items-center left-0 right-0">
                    <div className="text-white text-center">
                        <h1 className="text-8xl font-bold text-center">COX'S BAZAR</h1>
                        <p className="py-5 w-9/12 mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae incidunt vel et eius porro velit sequi, tenetur magni iusto dolore.</p>
                        <button className="bg-yellow-400 text-gray-900 px-5 py-2 font-semibold rounded-lg">Booking</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;