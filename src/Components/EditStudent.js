import { Button, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import Base from '../Base/Base';

const EditStudent = ({employeesData,setEmployees}) => {
  const history=useHistory();
 
  const {id} = useParams();
  
  const [editId, setEditId] = useState("");
  const [idx, setIdx] = useState("");
  const [Name, setName] = useState("");
  const [Batch, setBatch] = useState("");
  const [Gender, setGender] = useState("");
  const [Experiences, setExperience] = useState("");
  const employee=employeesData[id]

 useEffect(()=>{
  setEditId(employee.id);
 setIdx(employee.id);
 setName(employee.Name);
 setBatch(employee.Batch);
 setGender(employee.Gender);
 setExperience(employee.yearsOfExperience)

 },[]);
  

  const updateEmployeesData = () => {
    // select and find the employee

    const editEmployeeindex = employeesData.findIndex(
      (employee) => employee.id === editId
    );
    // we need the updated object

    const updatedEmployeeObj = {
      id,
      Name,
      Batch,
      Gender,
      yearsOfExperience: Experiences,
    };

    // change the selected specific array of data
    employeesData[editEmployeeindex] = updatedEmployeeObj;

    // set the employee data
    setEmployees([...employeesData]);
    setIdx("");
    setName("");
    setBatch("");
    setGender("");
    setExperience("");
    history.push("/user")
   
  };
 
    return (
  //  <div>EditStudent{id} and employeeid {employeeid}</div>
  // )
  <Base>
  <h1 className='edit-div'>Edit and Update</h1>
     <div className="input-div">
      <TextField
          required
          id="outlined-basic"
          label="Enter your id"
          variant="outlined"
          onChange={(event) => setIdx(event.target.value)}
          value={idx}
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
            color="secondary"
            onClick={updateEmployeesData}
          >
            update data
          </Button>
     

       
         
   </Base>
    )
}

export default EditStudent