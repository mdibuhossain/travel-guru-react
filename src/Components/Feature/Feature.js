import React from 'react';
import { useHistory } from 'react-router';
import { useRoom } from '../../Hooks/useRoom';
import ShowRoom from '../ShowRoom/ShowRoom';

const Feature = () => {
    const { featuredData } = useRoom();
    console.log(featuredData[0]);

    // const history = useHistory();
    // const handleClickVisit = (slug) => {
    //     history.push(`/rooms/${slug}`);
    // }


    return (
        <div className="my-10">
            <h4 className="text-center text-4xl font-semibold underline tracking-widest my-9">Featured Rooms</h4>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-9 w-4/5 mx-auto">
                {
                    featuredData.map(item => <ShowRoom key={item.id} item={item} />)
                }
            </div>
        </div>
    );
};

export default Feature;