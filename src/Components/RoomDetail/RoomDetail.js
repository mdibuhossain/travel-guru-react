import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useRoomData } from '../../Hooks/useRoomData';
import Banner from '../Banner/Banner';
import HeroDynamic from '../StyledComponent/StyleComponent';

const RoomDetail = () => {
    const { data } = useRoomData();
    const { slug } = useParams();
    const selectedRoom = data.find(item => item.fields.slug === slug);
    console.log(selectedRoom);
    return (
        <>
            <HeroDynamic img={selectedRoom?.fields?.images[0]?.url}>
                <Banner
                    title={selectedRoom?.fields?.name}
                >
                    <Link className="bg-blue-400 inline-block py-2 px-3 rounded-xl" to='/login'>book now</Link>
                </Banner>
            </HeroDynamic>
            <section className="w-11/12 mx-auto">
                <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-5 my-16">
                    {
                        selectedRoom?.fields?.images.map(perImg => {
                            return (
                                <div className="">
                                    <img className="inline-block w-100" src={perImg.url} alt="RoomPic" />
                                </div>
                            )
                        })
                    }
                </div>
                <div className="grid md:gap-10 gap-6 md:grid-cols-2">
                    <article className="">
                        <h3 className="text-4xl">Details</h3>
                        <p>{selectedRoom?.fields?.description}</p>
                    </article>
                    <article>
                        <h3 className="text-4xl">Infos.</h3>
                        <h6>Price: {selectedRoom?.fields?.price}</h6>
                        <h6>Size: {selectedRoom?.fields?.size} Sqft</h6>
                        <h6>
                            Max capacity: {
                                (selectedRoom?.fields?.capacity > 1) ? `${selectedRoom?.fields?.capacity} People` : `${selectedRoom?.fields?.capacity} Person`
                            }
                        </h6>
                        <h6>
                            {
                                (selectedRoom?.fields?.pets) ? "Pets are allowed" : "Pets not allowed"
                            }
                        </h6>
                        <h6>
                            {
                                selectedRoom?.fields?.breakfast ? "Free Breakfast included" : "Breakfast not included"
                            }
                        </h6>
                    </article>
                </div>
                <div className="mt-6">
                    <h3 className="text-4xl">Extras</h3>
                    <ul className="grid md:grid-cols-2 lg:grid-cols-4">
                        {
                            selectedRoom?.fields?.extras.map(extra => {
                                return (
                                    <li className="list-disc ml-4">{extra}</li>
                                )
                            })
                        }
                    </ul>
                </div>
            </section>
        </>
    );
};

export default RoomDetail;