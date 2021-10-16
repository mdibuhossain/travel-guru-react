import { useContext } from "react"
import { RoomsContext } from "../Context/RoomsProvider"

export const useRoom = () => {
    return useContext(RoomsContext);
}