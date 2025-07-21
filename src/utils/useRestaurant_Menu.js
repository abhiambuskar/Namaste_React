import { useEffect, useState } from "react"
import { MENU_API } from "./constants"

const useRestaurant_Menu = (resid) =>{

    const [res_info, setres_info] = useState([])
    useEffect(() =>{
        fetchdata();
        console.log(res_info)
    },[])

    const fetchdata = async () =>{
        const data = await fetch(MENU_API + resid)
        const json = await data.json();

        setres_info(json?.data)

    }
    return res_info
}

export default useRestaurant_Menu