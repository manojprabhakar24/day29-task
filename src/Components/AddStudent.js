import { Button, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';

import Base from '../Base/Base'

export function AddStudent({employeesData,setEmployees}) {
   const history=useHistory();

   useEffect(()=>{
    if(!localStorage.getItem("user-name"))
    history.replace("/login")
    },[])
  
    const [id, setId] = useState("");
    const [Name, setName] = useState("");
    const [Batch, setBatch] = useState("");
    const [Gender, setGender] = useState("");
    const [Experiences, setExperience] = useState("");
   
   
    
    const addNewEmployee = () => {
        const newEmployee = {
          id,
          Name,
          Batch,
          Gender,
          yearsOfExperience: Experiences,
        };
        // using spread operator to divide each by each element
        setEmployees([...employeesData, newEmployee]);
        // after add function done  immediately it refresh the input field
        setId("");
        setName("");
        setBatch("");
        setGender("");
        setExperience("");
        history.push("/user")
      };
  
    
  
  return (
<div>

   <Base>
  <h1 className='head'>you can add a student</h1>
     <div className="input-div">
      <TextField
          required
          id="outlined-basic"
          label="Enter your id"
          variant="outlined"
          onChange={(event) => setId(event.target.value)}
          value={id}
        />
           
  
        <TextField
         required
          id="outlined-required"
          label="Enter your name"
          variant="outlined"
          onChange={(event) => setName(event.target.value)}
          value={Name}
        />
        <TextField
         required
          id="outlined-basic"
          label="Enter your batch"
          variant="outlined"
          onChange={(event) => setBatch(event.target.value)}
          value={Batch}
        />
        <TextField
          required="text"
          id="outlined-basic"
          label="Enter your gender"
          variant="outlined"
          onChange={(event) => setGender(event.target.value)}
          value={Gender}
        />
        <TextField
        required={Number}
          id="outlined-basic"
          label="Enter your experiences"
          variant="outlined"
          onChange={(event) => setExperience(event.target.value)}
          value={Experiences}
        />
      </div>
        <Button
            size="small"
            variant="contained"
            color="primary"
           onClick={addNewEmployee}
          >
            Add data
          </Button>
        </Base>
      </div>
  )
}

export default AddStudent