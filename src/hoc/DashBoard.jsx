import React from 'react'

function DashBoard(props) {
  return (
    <div>
        <h1>Hello {props.user}, {props.greet} </h1>
        <p>Welcome back to Dashboard</p>
    </div>
  )
}

export default DashBoard