import React from 'react';
import { useHistory } from 'react-router';

const ShowRoom = (props) => {
    const { item } = props;
    const history = useHistory();
    const handleClickVisit = (slug) => {
        history.push(`/rooms/${slug}`);
    }
    return (
        <>
            <div onClick={() => handleClickVisit(item?.fields?.slug)} className="relative transform transition duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer">
                <div className="absolute bg-black text-white py-1 px-3 text-center rounded-br-lg tracking-widest">
                    <h4 className="text-2xl">${item?.fields?.price}</h4>
                    <em className="text-xs">per night</em>
                </div>
                <img src={item?.fields?.images[0]?.url} className="" alt=" " />
                <h4 className="absolute bottom-0 bg-gray-400 w-full text-center text-2xl">{item?.fields?.name}</h4>
            </div>
        </>
    );
};

export default ShowRoom;