import React from 'react';
import { useRoom } from '../../Hooks/useRoom';

const RoomFilter = () => {
    const { Roomtype, type, handleChange } = useRoom();
    console.log(type);
    return (
        <div className="mb-24 w-11/12 mx-auto">
            <form>
                <div>
                    <label className="block" htmlFor="type">Room Type</label>
                    <select onChange={handleChange} className="border-2 rounded-lg p-1" name="type" id="type">
                        {
                            Roomtype.map((item, index) => {
                                return (
                                    <option key={index} value={item}>{item}</option>
                                )
                            })
                        }
                    </select>
                </div>
            </form>
        </div>
    );
};

export default RoomFilter;