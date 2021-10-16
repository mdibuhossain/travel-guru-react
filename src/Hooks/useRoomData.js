import { useEffect, useState } from "react"
import { RoomData } from "../data";


export const useRoomData = () => {
    const [data, setData] = useState([]);
    const [featuredData, setFeaturedData] = useState([]);
    useEffect(() => {
        const tmpData = [...RoomData];
        setData(tmpData);
    }, [])

    useEffect(() => {
        const tmpFeatured = data.filter(item => item.fields.featured)
        setFeaturedData(tmpFeatured);
    }, [data])

    return {
        data,
        featuredData
    }
}