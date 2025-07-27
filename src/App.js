import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client"
import Header from "./Components/Header";
import Body from "./Components/Body";
import About from "./Components/About";
import ContactUs from "./Components/ContactUs"
import { createBrowserRouter ,RouterProvider, Outlet} from "react-router";
import Error from "./Components/Error";
import Restaurant_Menu from "./Components/Restaurant_Menu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./Components/Cart";
// import Grocery from "./Components/Grocery";


// const head = React.createElement
// ('h1',
// {  
//     id : "first_head",
//     hi:"hello",
// },"Hello from react");

// const jsxheading = <h1 id="heading">Hi there this is JSX</h1>
// console.log(jsxheading)

// const head = React.createElement('div',{id:"parent"},
//     [React.createElement("div",{id: "child1"},
//         [React.createElement('h1',{},"Hi i am h1"),
//         React.createElement('h1',{},"Hi i am h1")]
//     ),
//     React.createElement("div",{id: "child2"},
//         [React.createElement('h1',{},"Hi i am h1"),
//         React.createElement('h1',{},"Hi i am h1")]
//     )]

// );
// const React_element = (
//     <span>Hi I second React element</span>
// )

// const Title_element = (
    
//     <h1> {React_element} Hi I am React Element</h1>
// )

// //React functinal component
// const Title = () => (
//     <h1 className="title">React Functional Component</h1>
// )


// const Headingcomponent = () => (
//     <div>
//         {Title_element}
//         <Title/>
//         <h1 id="heading">Hi I am functional component</h1>
//     </div>
// )
//This can be also written  as
// const Headingcomponent = ()=>{
//     return <h1 id="heading" >Hi I am functional component</h1>
// }




const Grocery = lazy(()=> import("./Components/Grocery"))

const Applayout = ()=>{
    useEffect( () =>{
        //auth data reply i got data
        const data = {
            name: "Abhi",
        }
        setname(data.name)
    },[])

    const [name, setname] = useState("");
    return (
        <Provider store={appStore}>
            <UserContext.Provider value={{loggedInUser: name, setname}}>
                <div className="App">
                    <Header/>
                    <Outlet/>
                </div>
            </UserContext.Provider>
        </Provider>
    )
}

const approuter =  createBrowserRouter([
    {
        path:"/",
        element: <Applayout/>,
        children:[
            {
                path:"/",
                element:<Body/>
            }
            ,{
                path:"/about",
                element:<About/>
            },{
                path:"/grocery",
                element:<Suspense fallback={<h1>Loading</h1>}><Grocery/></Suspense>
            },{
                path:"/contact",
                element:<ContactUs/>
            },
            {
                path:"/cart",
                element:<Cart/>
            },{
                path:"/restaurants/:resid",
                element:<Restaurant_Menu/>
            }
        ],
        errorElement: <Error/>
    }
]) 
const root = ReactDOM.createRoot(document.getElementById("name"));
// root.render(jsxheading)
root.render(<RouterProvider router={approuter}/>)
