import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Hero from '../Hero/Hero';
import HeroDynamic from '../StyledComponent/StyleComponent';

const RoomDetail = () => {
    return (
        <>
            <HeroDynamic img='/Images/details-1.jpeg'>
                <Banner
                    title="Delux Room"
                    subtitle="deluxe rooms starting at $299"
                >
                    <Link className="bg-blue-400 inline-block py-2 px-3 rounded-xl" to='/login'>book now</Link>
                </Banner>
            </HeroDynamic>
        </>
    );
};

export default RoomDetail;