import { useDispatch, useSelector } from "react-redux"
import ItemList from "./ItemList"
import { clearCart } from "../utils/CartSlice"


const Cart = () =>{
    const cartItems = useSelector((store) => store.cart.items)

    const dispatch = useDispatch()

    const handleClearCart = () =>{
        dispatch(clearCart())
    }

    return (
        <div className="m-4 p-4 ">
            <div className="flex items-center ">
                <ul className="flex">
                    <li>
                        <h1 className="font-bold text-2xl mx-90">Cart</h1>
                    </li>
                    <li>
                        <button className="bg-green-300 p-1 m-2 items-center rounded-lg hover:cursor-pointer font-bold"  onClick={handleClearCart}>Clear Cart</button>
                    </li>
                </ul>


            </div>
            <div className="w-6/12 m-auto h-2">
                {cartItems.length === 0? 
                <h1 className="font-bold text-2xl m-4">Your Cart is Empty please Pick some Items!!!</h1>:
                <ItemList className="bg-gray-200 rounded-lg" items={cartItems}/>}
            </div>
        </div>
    )
}

export default Cart