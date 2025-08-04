import ContactUs from "../ContactUs"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"

test("Testing the Contact Component", () =>{
    render(<ContactUs/>)

    const heading = screen.getByRole("heading")

    expect(heading).toBeInTheDocument()
})

test("Testing the button  Component", () =>{
    render(<ContactUs/>)

    const button = screen.getByRole("button")

    expect(button).toBeInTheDocument()
})

test("Testing the button  Component", () =>{
    render(<ContactUs/>)

    const button = screen.getByText("Submit")

    expect(button).toBeInTheDocument()
})



test("Testing for the two input Component inside the component", () =>{
    render(<ContactUs/>)

    //This is querying
    const inputboxes = screen.getAllByRole("textbox")

    //This is assertion
    expect(inputboxes.length).toBe(2)
})