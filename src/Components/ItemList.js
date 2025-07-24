import { CARD_URL } from "../utils/constants"

const ItemList = ({items}) =>{
    console.log(items)

    return(
        <div>

            {items.map((item) =>(
               
                <div key={item.card.info.id} className="m-2 p-2 border-b-2 text-left flex justify-between">
                    <div className="w-9/12">
                        <div className="py-2" >
                            <span className="font-bold">{item?.card?.info?.name} </span>
                            <span className="font-bold"> - ₹{item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice/100}</span>
                        </div>
                        
                        <p className="text-xs">{item.card.info.description}</p>
                    </div>

                    <div className="w-3/12">
                    
                        <div className="absolute">
                            <button className="bg-white text-green-400 font-bold shadow-gray-400 rounded-sm mx-5 my-21 w-27 hover:bg-gray-200 ">ADD+</button>
                        </div>
                        <img src={CARD_URL + item.card.info.imageId} className="w-36 rounded-lg"/>
                    </div>
                </div>

               
                
                
            ))}

        </div>
    )
}

export default ItemList