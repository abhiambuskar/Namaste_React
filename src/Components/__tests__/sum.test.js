import { sum } from "../sum"


test("Sum of two numbers", () =>{
    const res = sum(3,3)
    
    expect(res).toBe(6)

} )