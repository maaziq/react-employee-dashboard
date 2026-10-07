import React, { useEffect, useState } from 'react'
import './login.css'

function Student() {

    const [stdData, setStdData] = useState({
        stdname : "",
        stdemail : "",
        stdage : "",
        stdcourse : ""
    });

    const handleUserInput = (e)=> {
        const {name, value} = e.target;
        setStdData({ ...stdData, [name]: value});
    }

    const handleForm = (e) => {
        console.log(stdData)
        e.preventDefault();
    }

    useEffect(() => {
        console.log("Student Name:", stdData.stdname);
    }, [stdData.stdname]);

  return (
    <div className='form-wrapper'>
        <h1>Student Registration Form</h1>
        <br /><br />
        <form action="" onSubmit={handleForm}>
            <label htmlFor="">Name</label>
            <input type="text" name='stdname' value={stdData.stdname} onChange={handleUserInput}/>

            <label htmlFor="">Email</label>
            <input type="email" name='stdemail' value={stdData.stdemail} onChange={handleUserInput} />

            <label htmlFor="">Age</label>
            <input type="number" name='stdage' value={stdData.stdage} onChange={handleUserInput} />

            <label htmlFor="">Course</label>
            <select name="stdcourse" id="" value={stdData.stdcourse} onChange={handleUserInput}>
                <option value="" hidden>» Choose here «</option>
                <option value="java fullstack">Java FullStack Developmrnt</option>
                <option value="mern fulstack">MERN FullStack Development</option>
                <option value="devops">Devops Engineering</option>
            </select>

            <button type='submit'>Submit</button>
        </form>

    </div>
  )
}

export default Student