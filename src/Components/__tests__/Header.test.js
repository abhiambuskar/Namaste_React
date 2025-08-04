import Header from "../Header"
import { BrowserRouter } from "react-router-dom"
import { fireEvent, render, screen } from "@testing-library/react"
import { Provider } from "react-redux"
import "@testing-library/jest-dom"
import appStore from "../../utils/appStore"
import { execPath } from "process"


it("Should render Header component with Login button", () =>{
    render(
        <BrowserRouter>
            <Provider store={appStore} >
                <Header/>    
            </Provider>
        </BrowserRouter>
    )

    const Loginbuttton = screen.getByRole("button")

    expect(Loginbuttton).toBeInTheDocument()
})


it("Should render Cart ", () =>{
    render(
        <BrowserRouter>
            <Provider store={appStore} >
                <Header/>    
            </Provider>
        </BrowserRouter>
    )

    const Cart = screen.getByText(/Cart/)

    expect(Cart).toBeInTheDocument()
})


it("Should render Login button with Login written ", () =>{
    render(
        <BrowserRouter>
            <Provider store={appStore} >
                <Header/>    
            </Provider>
        </BrowserRouter>
    )

     const Loginbuttton = screen.getByRole("button", {name: "Login"})

    expect(Loginbuttton).toBeInTheDocument()
})

it("Should render Logout button after clicking Login ", () =>{
    render(
        <BrowserRouter>
            <Provider store={appStore} >
                <Header/>    
            </Provider>
        </BrowserRouter>
    )

    const Loginbuttton = screen.getByRole("button", {name: "Login"})

    fireEvent.click(Loginbuttton)
    
    const Loggout = screen.getByRole("button",{name: "Logout"})

    expect(Loggout).toBeInTheDocument()
})