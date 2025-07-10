import { useEffect, useState } from "react"
import { MENU_API } from "./constants"

const useRestaurant_Menu = () =>{

    const [res_info, setres_info] = useState([])
    useEffect(() =>{
        fetchdata();
    },[])

    const fetchdata = async () =>{
        const data = await fetch(MENU_API)
        const json = await data.json();

        setres_info(json?.data)

    }
}

export default useRestaurant_Menu