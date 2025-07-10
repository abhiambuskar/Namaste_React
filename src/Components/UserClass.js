import React from "react"

class UserClass extends React.Component{
    

    constructor(props){
        super(props)

        this.state = {
            UserInfo:{
                name: "Dummy",
                location: "",
            }

        }
    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/abhiambuskar")
        const json = await data.json();
        console.log(json)

        this.setState({
            UserInfo: json
        })
    }

    componentDidUpdate(){
        console.log("Component did update")
    }

    componentWillUnmount(){
        console.log("Component will Unmount")
    }
    
    render(){

        const {name} =  this.state.UserInfo

        return (
            <div className="user-card">

              <h1>Hi I am {name}</h1>
              <h2>I am from Akola</h2>
              <h3>I work in VWITS</h3>
            </div>
        )
    }
}

export default UserClass