import Restaurant_cards from "./Restaurant_cards";
// import resobj from "../utils/mockdata";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
    

const Body = () =>{

    const [Listofrestaurant, setListofrestaurant] = useState([])
    const [searchtext, setsearchtext] = useState("")
    const [listfilter_restaurants, setlistfilter_restaurants] = useState([])

    useEffect( () =>{
        fetchdata()
    },[])


    const fetchdata = async() =>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.6486772&lng=73.7592659&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")

        const json = await data.json()
        console.log(json)
        setListofrestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setlistfilter_restaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        console.log(Listofrestaurant)
        console.log(listfilter_restaurants)
    }
    const onlinestatus = useOnlineStatus()
    if(onlinestatus === false){
        return <h1>Looks like you Lost you internet connection!!! Please try to connect 😑</h1>
    }    

    if(Listofrestaurant.length === 0){
        return <Shimmer/>
    }

    return(
        <div className="body">
            <div className="filter">
                <input type="text" className="serach-box" value={searchtext} onChange={(e)=>{
                    setsearchtext(e.target.value)
                }}/>
                <button onClick={()=>{
                    console.log(searchtext)
                    
                    console.log(Listofrestaurant)
                    console.log(listfilter_restaurants)
                    const filter_restaurants = Listofrestaurant.filter(
                        (res) => res.info.name.toLowerCase().includes(searchtext.toLowerCase())
                    )
                    console.log("Serach restaurants are " + {filter_restaurants})
                    setlistfilter_restaurants(filter_restaurants)
                }}>Search</button>

                <button className="filter-btn"
                    onClick= {()=>{
                        const filterlist = Listofrestaurant.filter(
                           (res) =>  res.info.avgRating > 4.4
                        )
                        setlistfilter_restaurants(filterlist)
                    }}>Top rated restaurant</button>
                
                <button className="reset-btn"
                    onClick={()=>{
                        setlistfilter_restaurants(Listofrestaurant)
                    }}>
                    Reset All 
                </button>
            </div>
            <div className="res-container">
                
                {listfilter_restaurants.map((restaurant)=>(
                   <Link to={"/restaurants/"+restaurant.info.id} key={restaurant.info.id}><Restaurant_cards key={restaurant.info.id} resdata= {restaurant}/></Link> 
                ))}
                
            </div>
        </div>
    )
}

export default Body;