import React from 'react';
import './Service.css';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa'

const Service = () => {
    const services = [
        {
            icon: <FaCocktail />,
            title: "Free Cocktails",
            info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ipsam, excepturi laudantium sint eos natus.",
        },
        {
            icon: <FaHiking />,
            title: "Endless Hiking",
            info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ipsam, excepturi laudantium sint eos natus.",
        },
        {
            icon: <FaShuttleVan />,
            title: "Free Shuttle",
            info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ipsam, excepturi laudantium sint eos natus.",
        },
        {
            icon: <FaBeer />,
            title: "Strongest Beer",
            info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ipsam, excepturi laudantium sint eos natus.",
        }
    ];

    return (
        <>
            <section className="py-10 bg-gray-400">
                <h4 className="text-center text-4xl font-semibold underline tracking-widest">Services</h4>
                <div className="service-item">
                    {
                        services.map((item, index) => {
                            return (
                                <article className="inline-block my-5" key={index}>
                                    <span className="inline-block text-5xl text-gray-600">{item.icon}</span>
                                    <h6 className="text-xl font-semibold tracking-widest my-4">{item.title}</h6>
                                    <p>{item.info}</p>
                                </article>
                            )
                        })
                    }
                </div>
            </section>
        </>
    );
};

export default Service;