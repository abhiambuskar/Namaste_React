import React, { useState } from 'react'

const User = (props) => {
    const [count, setcount] = useState(0);
    const [count2, setcount2] = useState(1);
     
  return (
    <div className='user-card'>

      <h1>Hi I am {props.name}</h1>
      <h2>I am from Akola</h2>
      <h3>I work in VWITS</h3>
    </div>
  )
}

export default User
