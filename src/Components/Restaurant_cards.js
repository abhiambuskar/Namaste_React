import { CARD_URL } from "../utils/constants"

const Restaurant_cards = (props) =>{
    // console.log(props)
    const {resdata} = props
    const {cloudinaryImageId, name, cuisines, avgRating,costForTwo } = resdata?.info
    return (
        <div className="res-cards">
            
            <img alt="res-image"  className="res-image"src={CARD_URL + cloudinaryImageId}/>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
        </div>
    )
}

export default Restaurant_cards