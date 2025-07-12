import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'    
import Shimmer from './Shimmer'
import { MENU_API } from '../utils/constants'
import useRestaurant_Menu from '../utils/useRestaurant_Menu'


const Restaurant_Menu = () => {

    const {resid} = useParams()

    const res_info = useRestaurant_Menu(resid)


      if (!res_info?.cards) {
        return <Shimmer />;
      }
      
    
    const {name, cuisines} = res_info?.cards[2]?.card?.card?.info
    console.log(name)
    const {itemCards} = res_info?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
    console.log(itemCards)

    return (
        <div className='menu'>
          <h1>{name}</h1>
          
          <h3>Menu</h3>
          <p>{cuisines}</p>

          <ul>
            {itemCards.map((item) => (
              <li key={item.card.info.id}>{item.card.info.name}  &#8377;{item.card.info.price/100 || item.card.info.defaultPrice
                /100 }</li>
            ))}
          </ul>


        </div>
  )
}

export default Restaurant_Menu
