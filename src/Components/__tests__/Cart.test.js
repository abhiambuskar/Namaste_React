import { act, fireEvent, render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import Restaurant_Menu from "../Restaurant_Menu"
import MOCK_CARD_DATA from "../mocks/CartMock.json"
import "@testing-library/jest-dom"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"
import Header from "../Header"
import Cart from "../Cart"

global.fetch = jest.fn( ()=>{
    return Promise.resolve( {
        json: () =>{
            return Promise.resolve(MOCK_CARD_DATA)
        } 
    })
})


it("Should add items in the cart and show on the cart Page", async() =>{
    await act( async () =>{
        await render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Restaurant_Menu/>
                    <Header/>
                    <Cart/>
                </Provider>
            </BrowserRouter>
        )
    })

    const accordianHeader = screen.getByText("Desserts (7)")

    expect(accordianHeader).toBeInTheDocument()

    fireEvent.click(accordianHeader)

    const foodlist = screen.getAllByTestId("fooditems")
    expect(foodlist.length).toBe(7)
    

    const addbtn = screen.getAllByRole("button", {name:"ADD+"})
    fireEvent.click(addbtn[0])
    expect(screen.getAllByTestId("fooditems").length).toBe(8)

    expect(screen.getByText("Cart (1 items)")).toBeInTheDocument()
    fireEvent.click(addbtn[1])
    

    expect(screen.getByText("Cart (2 items)")).toBeInTheDocument()
    expect(screen.getAllByTestId("fooditems").length).toBe(9)

    fireEvent.click(screen.getByRole("button", {name:"Clear Cart"}))
    expect(screen.getAllByTestId("fooditems").length).toBe(7)
    

})