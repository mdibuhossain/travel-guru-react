import { useEffect, useState } from "react"
import { RoomData } from "../data";


export const useRoomData = () => {
    const [data, setData] = useState([]);
    const [filterData, setFilterData] = useState([]);
    const [type, setType] = useState('all');
    const [Roomtype, setRoomtype] = useState([]);
    const [featuredData, setFeaturedData] = useState([]);

    const getUnique = (items, value) => {
        return [...new Set(items.map(item => item.fields[value]))];
    }

    const handleChange = event => {
        // const target = event.target;
        // const value = target.type === 'checkbox' ? target.checked : target.value;
        // const name = target.name;
        const value = event.target.value;
        setType(value);

        if (value !== 'all') {
            const tmpData = data.filter(item => item?.fields?.type === value);
            setFilterData(tmpData);
        }
        else {
            setFilterData(data);
        }
    }



    useEffect(() => {
        const tmpData = [...RoomData];
        setData(tmpData);
        setFilterData([...tmpData]);
    }, [])

    useEffect(() => {
        const tmpFeatured = data.filter(item => item.fields.featured)
        setFeaturedData(tmpFeatured);
        let tmpRoomtype = getUnique(data, 'type');
        tmpRoomtype = ['all', ...tmpRoomtype];
        setRoomtype(tmpRoomtype);
    }, [data])

    return {
        data,
        filterData,
        featuredData,
        Roomtype,
        type,
        handleChange
    }
}