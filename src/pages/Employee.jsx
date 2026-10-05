import React from 'react'
import './login.css'

function Employee() {
  return (
    <div className='form-wrapper'>
        <h1>Employee portal</h1>
        
        <form action="">

          <label htmlFor="">Employee Id</label>
          <input type="text" name='empid' id='' />
          <label htmlFor="">Full Name</label>
          <input type="text" name='empname' />
          <label htmlFor="">Designation</label>

          <select name="empdesg" id="">
            <option value="" hidden>––––––--  Choose here  --––––––</option>
            <option value="java developer">Java Developer</option>
            <option value="mern engineer">MERN Engineer</option>
            <option value="devops">Devops Engineer</option>
          </select>

          <button type='submit'>Login</button>
          <button type='cancel'>Cancel</button>

        </form>
        
    </div>
  )
}

export default Employee