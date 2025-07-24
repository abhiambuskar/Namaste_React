import { useContext } from "react"
import { CARD_URL } from "../utils/constants"
import UserContext from "../utils/UserContext"

const Restaurant_cards = (props) =>{
    // console.log(props)
    const {loggedInUser} = useContext(UserContext)
    
    const {resdata} = props
    const {cloudinaryImageId, name, cuisines, avgRating,costForTwo } = resdata?.info
    return (
        <div className="m-2 p-2 w-[190px] bg-gray-300 rounded-lg hover:bg-gray-400  ">
            
            <img alt="res-image"  className="rounded-lg"src={CARD_URL + cloudinaryImageId}/>
            <h3 className="font-bold">{(name).slice(0,20)}</h3>
            <h4>{(cuisines.join(", ")).slice(0, 20)}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>User: {loggedInUser}</h4>
        </div>
    )
}

export const withpromoteCard = (Restaurant_cards) =>{
    return (props) =>{
        return(
            <div>
                <label className="absolute bg-black text-white rounded-sm">Promoted</label>
                <Restaurant_cards {...props}/>
            </div>
        )
    }
}

export default Restaurant_cards