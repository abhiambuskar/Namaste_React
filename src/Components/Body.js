import Restaurant_cards, {withpromoteCard} from "./Restaurant_cards";
// import resobj from "../utils/mockdata";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
    

const Body = () =>{

    const [Listofrestaurant, setListofrestaurant] = useState([])
    const [searchtext, setsearchtext] = useState("")
    const [listfilter_restaurants, setlistfilter_restaurants] = useState([])
    const {setname, loggedInUser} = useContext(UserContext)

    useEffect( () =>{
        fetchdata()
    },[])

    const Restaurant_cards_Promoted = withpromoteCard(Restaurant_cards)
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
            <div className="filter flex">
                <input type="text" className="border border-solid border-black  rounded-lg m-1" value={searchtext} onChange={(e)=>{
                    setsearchtext(e.target.value)
                }}/>
                <button className="bg-green-300 px-2 py-1 m-2 rounded-lg hover:cursor-pointer"onClick={()=>{
                    
                    const filter_restaurants = Listofrestaurant.filter(
                        (res) => res.info.name.toLowerCase().includes(searchtext.toLowerCase())
                    )
                    console.log("Serach restaurants are " + {filter_restaurants})
                    setlistfilter_restaurants(filter_restaurants)
                }}>Search</button>
                
                <div className="bg-gray-300 px-2 py-1 m-2 rounded-lg hover:cursor-pointer">
                    <button className="filter-btn hover:cursor-pointer" 
                        onClick= {()=>{
                            const filterlist = Listofrestaurant.filter(
                            (res) =>  res.info.avgRating > 4.4
                            )
                            setlistfilter_restaurants(filterlist)
                        }}>Top rated restaurant</button>
                </div>

                <div className=" px-2 py-1 m-2 rounded-lg hover:cursor-pointer">
                    <label>UserName </label>
                    <input className="border border-black" value={loggedInUser} onChange={(e) =>{
                        setname(e.target.value)
                    }}/>
                </div>



                <div className="bg-gray-400 px-2 py-1 m-2 rounded-lg hover:cursor-pointer">
                    <button className="reset-btn hover:cursor-pointer"
                        onClick={()=>{
                            setlistfilter_restaurants(Listofrestaurant)
                        }}>
                        Reset All 
                    </button>
                </div>
            </div>
            <div className="flex flex-wrap">
                
                {listfilter_restaurants.map((restaurant)=>(
                    
                    
                <Link to={"/restaurants/"+restaurant.info.id} key={restaurant.info.id}>
                    {restaurant.info.avgRating >= 4.5 ?
                    (<Restaurant_cards_Promoted key={restaurant.info.id} resdata= {restaurant}/>): 
                    (<Restaurant_cards key={restaurant.info.id} resdata= {restaurant}/>) 
                    }
                </Link>
                ))}
                
            </div>
        </div>
    )
}

export default Body;