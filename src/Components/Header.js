import { useContext, useState } from "react"
import {  LOGO_URL } from "../utils/constants"
import {Link} from 'react-router'
import useOnlineStatus from "../utils/useOnlineStatus"
import UserContext from "../utils/UserContext"
import { useSelector } from "react-redux"

const Header = ()=>{
    const [btnName, setbtnName] = useState("Login")
    const onlinestatus = useOnlineStatus()
    const data = useContext(UserContext)
    //subscribing the store using selector
    const cartItems = useSelector((store) =>store.cart.items)
    // console.log(cartItems)
    return (
        <div className="flex justify-between bg-pink-100 m-2">
            <div className="w-28">
                <img className="logo" src= {LOGO_URL} placeholder="Logo"/>
               
            </div>
            <div className="flex items-center ">
                <ul className="flex m-4 p-4">
                    <li>Online Status{onlinestatus?"✅":"🔴"}</li>
                    <li className="px-4 no-font hover:font-bold hover:cursor-pointer">
                        <Link to="/">Home</Link> 
                    </li>
                    <li className="px-4 no-font hover:font-bold hover:cursor-pointer"> 
                        <Link to="/about">About</Link> 
                    </li>
                    <li className="px-4 no-font hover:font-bold hover:cursor-pointer">
                        <Link to="/contact">Contact</Link>
                    </li>

                    <li className="px-4 no-font hover:font-bold hover:cursor-pointer">
                        <Link to="/cart">Cart ({cartItems.length} items)</Link>
                    </li>

                    <li className="px-4 no-font hover:font-bold hover:cursor-pointer">
                        <Link to="/grocery">Grocery</Link> 
                    </li>

                    <li className="hover:font-bold hover:cursor-pointer">
                        <button className="login px-4 no-font " onClick={()=>{
                            if(btnName === "Login"){
                                setbtnName("Logout")
                            }else{
                                setbtnName("Login")
                            }
                        }}>{btnName}</button>
                    </li>
                    
                    <li>
                        <p>{data.loggedInUser}</p>
                    </li>
                    
                </ul>
            </div>
        </div>
    )
}

export default Header