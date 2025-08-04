import { screen } from "@testing-library/dom"
import Restaurant_cards from "../Restaurant_cards"
import MOCK_DATA from "../mocks/resCardmock.json"
import { render } from "@testing-library/react"
import "@testing-library/jest-dom"

it("Should render Restaurant card component" , () =>{
    render(<Restaurant_cards resdata={MOCK_DATA}/>)    

    const restaurantname = screen.getByText("McDonald's")

    expect(restaurantname).toBeInTheDocument()
})