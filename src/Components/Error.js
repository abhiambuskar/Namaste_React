import { useRouteError } from "react-router"

const Error = () =>{
    const err = useRouteError()
    console.log(err)
    return(
        <div>
            <h1>Oops  </h1>
            <h2 style={{color: "red"}}>{err.data}</h2>
        </div>
    )
}

export default Error