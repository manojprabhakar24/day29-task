import { Button, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import Base from '../Base/Base';

export const EditTeachers = ({TeachersProfileData,setTeachersProfile}) => {
  const history=useHistory();
  const {idx} =useParams();
  
  const [updateId, setUpdateId] = useState("");
  const [idxc, setIdxc] = useState("");
  const [name, setName] = useState("");
  const [batch, setBatch] = useState("");
  const [gender, setGender] = useState("");
  const [experiences, setExperience] = useState("");
  const teachers=TeachersProfileData[idx]

 useEffect(()=>{
  setUpdateId(teachers.idxc);
 setIdxc(teachers.idxc);
 setName(teachers.name);
 setBatch(teachers.batch);
 setGender(teachers.gender);
 setExperience(teachers.experiences)

 },[])
  

  const updateTeachersProfileData = () => {
    // select and find the employee

    const editTeachersProfileIndex = TeachersProfileData.findIndex(
      (teachers) => teachers.idxc === updateId
    );
    // we need the updated object

    const updatedTeachersProfileObj = {
      idxc,
      name,
      batch,
      gender,
      experiences,
    };

    // change the selected specific array of data
    TeachersProfileData[editTeachersProfileIndex] =updatedTeachersProfileObj;

    // set the employee data
    setTeachersProfile([...TeachersProfileData]);
    setIdxc("");
    setName("");
    setBatch("");
    setGender("");
    setExperience("");
    history.push("/view")
   
  };
 
    return (
  //  <div>EditStudent{id} and employeeid {employeeid}</div>
  // )
  <Base>
  <h1 className='edit-div'>Edit Teachers Profile</h1>
     <div className="input-div">
      <TextField
          required
          id="outlined-basic"
          label="Enter your id"
          variant="outlined"
          onChange={(event) => setIdxc(event.target.value)}
          value={idxc}
        />
           
  
        <TextField
         required
          id="outlined-required"
          label="Enter your name"
          variant="outlined"
          onChange={(event) => setName(event.target.value)}
          value={name}
        />
        <TextField
         required
          id="outlined-basic"
          label="Enter your batch"
          variant="outlined"
          onChange={(event) => setBatch(event.target.value)}
          value={batch}
        />
        <TextField
          required="text"
          id="outlined-basic"
          label="Enter your gender"
          variant="outlined"
          onChange={(event) => setGender(event.target.value)}
          value={gender}
        />
        <TextField
        required={Number}
          id="outlined-basic"
          label="Enter your experiences"
          variant="outlined"
          onChange={(event) => setExperience(event.target.value)}
          value={experiences}
        />
      </div>
      <Button
            size="small"
            variant="contained"
            color="secondary"
            onClick={ updateTeachersProfileData}
          >
            update data
          </Button>
     

       
         
   </Base>
    )
}

export default EditTeachers;