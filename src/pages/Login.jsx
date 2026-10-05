import React, { useState } from 'react'
import "./login.css"

function Login() {

    const[username, setUsername] = useState("");
    const[userpass, setUserpass] = useState("");

    const handleUsername = (e)=> {
        setUsername(e.target.value);
    }

    const handleUserpass = (e)=> {
        setUserpass(e.target.value);
    }

    const handleUserLogin = ()=> {
        window.localStorage.setItem("username" , username)
        window.localStorage.setItem("password", userpass)
        alert("Login Successful")
    }

  return (
    <div className='form-wrapper'>
        <form action="">
            <label htmlFor="">Username:</label>
            <input type="text" name='username' id='' value={username} onChange={handleUsername} />
            <label htmlFor="">Password</label>
            <input type="text" name='userpass' id='' value={userpass} onChange={handleUserpass} />
            <button type='submit' onClick={handleUserLogin}>Login</button>
            <button type='cancel'>Cancel</button>
        </form>
        <h2>UserName: {username}</h2>
        <h2>Password: {userpass}</h2>
    </div>
  )
}

export default Login