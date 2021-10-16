import React from 'react';
import { useRoom } from '../../Hooks/useRoom';

const Feature = () => {
    const { featuredData } = useRoom();
    // console.log(featuredData[0]?.fields);
    return (
        <div>
            <h4 className="text-center text-4xl font-semibold underline tracking-widest">Featured Rooms</h4>
            <div className="grid grid-cols-3">
                {
                    featuredData.map(item => {
                        return (
                            <div key={item.id} className="">
                                {/* <span>{item.id}</span> */}
                                <img src={item?.fields?.images[0]?.url} className="" alt=" " />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Feature;