import {useState} from "react"
import ItemList from "./ItemList"



const Restaurant_Category = ({data, showitems, setshowIndex}) =>{


    const handleClick = () =>{
        // if(showitems === false){
        //     setshowitems(true)
        // }else{
        //     setshowitems(false)
        // }
        setshowIndex()
    }
    // console.log(data)
    return (
        <div>
            {/* header */}
            <div className="w-6/12  mx-auto cursor-pointer bg-gray-100 m-2 p-2 border-b-1 shadow-gray-200">
                <div className="flex justify-between" onClick={handleClick}>
                    <span className="font-bold">{data?.title} ({data?.itemCards.length})</span>
                    <span>⬇️</span>                    
                </div>

                {showitems && <ItemList items={data?.itemCards} />}
            </div>
            

                
        
        </div>
    )
        
    
}

export default Restaurant_Category