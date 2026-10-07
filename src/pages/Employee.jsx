import React, { useState } from 'react'
import './login.css'

function Employee() {

  const [formData, setFormData] = useState({
    empid : "",
    empname : "",
    empdesg : ""
  });

  const handleUserInput = (e)=> {
    const {name, value} = e.target;
    setFormData({ ...formData, [name]: value});
  }

  const handleForm = (e) => {
    console.log(formData)
    e.preventDefault()
  }


  return (
    <div className='form-wrapper'>
        <h1>Employee portal</h1>
        <br /><br />
        <form action="" onSubmit={handleForm}>

          <label htmlFor="">Employee Id</label>
          <input type="text" name='empid' value={formData.empid} onChange={handleUserInput}/>

          <label htmlFor="">Full Name</label>
          <input type="text" name='empname' value={formData.empname} onChange={handleUserInput} />

          <label htmlFor="">Designation</label>
          <select name="empdesg" id="" value={formData.empdesg} onChange={handleUserInput}>
            <option value="" hidden>» –––––– Choose here –––––– «</option>
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