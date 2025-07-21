import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'    
import Shimmer from './Shimmer'
import { MENU_API } from '../utils/constants'
import useRestaurant_Menu from '../utils/useRestaurant_Menu'


const Restaurant_Menu = () => {

    const {resid} = useParams()
    // const [categories, setcategories] = useState([]);
    const res_info = useRestaurant_Menu(resid)


      if (!res_info?.cards) {
        return <Shimmer />;
      }
    // console.log(res_info)
      
    
    const {name, cuisines} = res_info?.cards[2]?.card?.card?.info
    console.log(name)
    // console.log(res_info?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card)
    // const {carousel} = res_info?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
    // console.log(carousel)
    // const cards = res_info?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR
    // console.log(cards)


     
    return (
        <div className='menu text-center'>
          <h1 className='font-bold'>{name}</h1>
          <p>{(cuisines.join(", "))}</p>


{/* 
          <ul>
            {carousel.map((item) => (
              <li key={item.dish.info.id}>{item.dish.info.name}  &#8377;{item.dish.info.price/100 || item.dish.info.defaultPrice/100 }</li>
            ))}
          </ul> */}


        </div>
  )
}

export default Restaurant_Menu
