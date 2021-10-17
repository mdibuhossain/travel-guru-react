import React from 'react';
import { Link } from 'react-router-dom';
import { useRoom } from '../../Hooks/useRoom';
import Banner from '../Banner/Banner';
import Hero from '../Hero/Hero';
import RoomFilter from '../RoomFilter/RoomFilter';
import ShowRoom from '../ShowRoom/ShowRoom';
import './Rooms.css';

const Rooms = () => {
    const { filterData } = useRoom();
    console.log(filterData[0]?.fields.type);
    return (
        <>
            <Hero hero="roomHero">
                <Banner
                    title="our rooms"
                >
                    <Link className="bg-blue-400 inline-block py-2 px-3 rounded-xl" to="/">return home</Link>
                </Banner>
            </Hero>
            <h4 className="text-center text-4xl font-semibold underline tracking-widest my-9">Rooms</h4>
            <RoomFilter />
            <section className="w-11/12 mb-10 mx-auto grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 sm:gap-9 gap-5">
                {
                    filterData.map(item => <ShowRoom key={item.id} item={item} />)
                }
            </section>
        </>
    );
};

export default Rooms;