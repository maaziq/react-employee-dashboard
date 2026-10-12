import React from 'react'
import Login from './pages/Login'
import Employee from './pages/Employee'
import Student from './pages/Student'
import WithAuth from './hoc/WithAuth'
import DashBoard from './hoc/DashBoard'


const UserWithAuth = WithAuth(DashBoard)

function App() {
  return (
    <div>
      {/* <Login/>
      <Employee/>
      <Student/> */}
      <UserWithAuth user="Mahfuz"/>
    </div>
  )
}

export default App