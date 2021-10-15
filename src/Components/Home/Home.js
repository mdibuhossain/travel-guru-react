import React from 'react';
import './Home.css';
import { FaArrowCircleRight } from 'react-icons/fa';
import img1 from '../../Images/Sajek.png';
import img2 from '../../Images/Sreemongol.png';
import img3 from '../../Images/sundorbon.png';

const Home = () => {

    const images = [
        img1, img2, img3
    ]

    return (
        <>
            <div className="relative min-h-screen flex flex-col justify-center">
                <div className="flex flex-grow banner">
                    <span className="flex flex-grow opacity-70 bg-gray-900"></span>
                </div>
                <div className="absolute z-30 flex justify-center items-center left-0 right-0">
                    <div className="grid grid-cols-1 lg:grid-cols-2 center">
                        <div className="text-white">
                            <div className="w-full lg:w-9/12 mx-auto">
                                <h1 className="text-5xl md:text-8xl font-bold">COX'S BAZAR</h1>
                                <p className="py-5 w-90 md:w-9/12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae delectus optio, excepturi harum tempore ipsam illum quos ducimus laborum autem numquam odit nostrum aperiam atque.</p>
                                <button className="bg-yellow-400 text-gray-900 px-5 py-2 font-semibold rounded-lg">Booking <FaArrowCircleRight className="inline-block" /></button>
                            </div>
                        </div>
                        <div className="grid grid-cols-3">
                            <img className="w-60" src={img1} alt="" />
                            <img className="w-60" src={img2} alt="" />
                            <img className="w-60" src={img3} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;