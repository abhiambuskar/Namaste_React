import { useState } from "react"
import {  LOGO_URL } from "../utils/constants"
import {Link} from 'react-router'
import useOnlineStatus from "../utils/useOnlineStatus"

const Header = ()=>{
    const [btnName, setbtnName] = useState("Login")
    const onlinestatus = useOnlineStatus()

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src= {LOGO_URL} placeholder="Logo"/>
               
            </div>
            <div className="nav-items">
                <ul>
                    <li>Online Status{onlinestatus?"✅":"🔴"}</li>
                    <li>
                        <Link to="/">Home</Link> 
                    </li>
                    <li> 
                        <Link to="/about">About</Link> 
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>Cart</li>
                    <li>
                        <Link to="/grocery">Grocery</Link> 
                    </li>
                    <button className="login" onClick={()=>{
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