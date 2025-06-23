import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'    
import Shimmer from './Shimmer'
import { MENU_API } from '../utils/constants'


const Restaurant_Menu = () => {
    const [res_info, setres_info] =useState([])
    const [res_menu_info, setres_menu_info]= useState([])

    const {resid} = useParams()
    useEffect(() =>{
        fetchMenu()
    },[])

    const  fetchMenu = async () => {
        const data =  await fetch(MENU_API + resid);

        const json = await data.json()
        console.log(json)
        console.log(resid)
        setres_info(json?.data)
        console.log(res_info)
        const regularCards = json?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

        // Safely find the right nested structure:
        let itemCards = null;

        // First, try to get itemCards from categories[0]
        itemCards = regularCards?.[2]?.card?.card?.categories?.[0]?.itemCards;

        // If not found, fallback to direct itemCards
        if (!itemCards) {
          itemCards = regularCards?.[2]?.card?.card?.itemCards;
        }

        setres_menu_info(itemCards || []);

        // console.log(res_menu_info)                       
      }


      if (!res_info?.cards) {
        return <Shimmer />;
      }
      
    
    const {name, cuisines} = res_info?.cards[2]?.card?.card?.info
    console.log(name)
    const {itemCards} = res_menu_info
    console.log(itemCards)
    // const {itemcards}
    // const {list_of_menu} = res_info.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.categories[0].itemCards
    // console.log(list_of_menu)
    // data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.categories[0].itemCards

    return (
        <div className='menu'>
          <h1>{name}</h1>
          
          <h3>Menu</h3>
          <p>{cuisines}</p>
          <p>{itemCards}</p>
          <button onClick={()=>{
            console.log(res_menu_info)
          }}>Show Menu</button>

          <ul>
            {res_menu_info.map((item) => (
              <li key={item.card.info.id}>{item.card.info.name}  &#8377;{item.card.info.price/100}</li>
            ))}
          </ul>

        </div>
  )
}

export default Restaurant_Menu
