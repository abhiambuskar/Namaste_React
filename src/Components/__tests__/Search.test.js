import { act, fireEvent, render, screen } from "@testing-library/react"
import Body from "../Body"
import MOCK_DATA from "../mocks/cardsMock.json"
import { BrowserRouter } from "react-router"



global.fetch = jest.fn( () =>{
    return Promise.resolve({
        json: ()=>{
            return Promise.resolve(MOCK_DATA)
        }
    })
})

it("Should Render Body Component with  search functionalilty", async () =>{
    await act( async()=>{
        await( render(
        <BrowserRouter>
            <Body/>
        </BrowserRouter>
        ))
    })

    const serarchbtn = screen.getByRole("button", {name: "Search"})
    const beforeserach = screen.getAllByTestId("rescard")
    expect(beforeserach.length).toBe(20)

    const inputbtn = screen.getByTestId("inputbox")
    fireEvent.change(inputbtn, {target: {value:"pizza"}})

    fireEvent.click(serarchbtn)

    const cards = screen.getAllByTestId("rescard")

    expect(cards.length).toBe(3)

})


it("Should filter top rated Restaurant", async ()=>{
  await act( async()=>{
        await(render(
        <BrowserRouter>
            <Body/>
        </BrowserRouter>        
        ))
  })  

  const topratedbtn = screen.getByRole("button", {name: "Top rated restaurant"})
  const cardsbeforefilter = screen.getAllByTestId("rescard")

  expect(cardsbeforefilter.length).toBe(20)

  fireEvent.click(topratedbtn)

  const cardsafterfilter = screen.getAllByTestId("rescard")

  expect(cardsafterfilter.length).toBe(5)



})