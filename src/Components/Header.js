import { useState } from "react"
import {  LOGO_URL } from "../utils/constants"
import {Link} from 'react-router'
import useOnlineStatus from "../utils/useOnlineStatus"

const Header = ()=>{
    const [btnName, setbtnName] = useState("Login")
    const onlinestatus = useOnlineStatus()

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
                    <li className="px-4 no-font hover:font-bold hover:cursor-pointer">Cart</li>
                    <li className="px-4 no-font hover:font-bold hover:cursor-pointer">
                        <Link to="/grocery">Grocery</Link> 
                    </li>
                    <button className="login px-4 no-font hover:font-bold hover:cursor-pointer" onClick={()=>{
                        if(btnName === "Login"){
                            setbtnName("Logout")
                        }else{
                            setbtnName("Login")
                        }
                    }}>{btnName}</button>
                    
                </ul>
            </div>
        </div>
    )
}

export default Header