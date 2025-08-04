import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'    
import Shimmer from './Shimmer'
import { MENU_API } from '../utils/constants'
import useRestaurant_Menu from '../utils/useRestaurant_Menu'
import Restaurant_Category from './Restaurant_Category'


const Restaurant_Menu = () => {

    const {resid} = useParams()
    // const [categories, setcategories] = useState([]);
    const res_info = useRestaurant_Menu(resid)
    const [showIndex, setshowIndex] = useState(null)

    const [showitems, setshowitems] = useState(false)
      if (!res_info?.cards) {
        return <Shimmer />;
      }
    // console.log(res_info)
      
    
    const {name, cuisines} = res_info?.cards[2]?.card?.card?.info
    // console.log(name)
    // console.log(res_info?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card)
    // const {carousel} = res_info?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
    // console.log(carousel)
    // const cards = res_info?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR
    // console.log(cards)
    const categories = res_info?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    )
    // console.log(categories)
     
    return (
        <div className='menu text-center'>
          <h1 className='font-bold text-2xl my-2'>{name}</h1>
          <p className='font-bold'>{(cuisines.join(", "))}</p>
          
          {categories.map((category, index) =>(
              
            <Restaurant_Category 
              key={category?.card?.card?.categoryId} 
              data={category?.card?.card}
              showitems={index=== showIndex? true: false}

              setshowIndex={() => setshowIndex((prevIndex) => (prevIndex === index ? null : index))}
            />
          ))}
        
              

        </div>
  )
}

export default Restaurant_Menu
