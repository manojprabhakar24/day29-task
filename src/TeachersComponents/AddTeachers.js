import { Button, TextField } from '@mui/material';
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import Base from '../Base/Base';

export const AddTeachers = ({TeachersProfileData,setTeachersProfile}) => {
    const history=useHistory();
  
    const [idxc, setIdxc] = useState("");
    const [name, setName] = useState("");
    const [batch, setBatch] = useState("");
    const [gender, setGender] = useState("");
    const [experiences, setExperience] = useState("");
   
   
    
    const addNewTeachersProfile = () => {
        const newTeachersProfile = {
          idxc,
          name,
          batch,
          gender,
          experiences,
        };
        // using spread operator to divide each by each element
        setTeachersProfile([...TeachersProfileData,newTeachersProfile]);
        // after add function done  immediately it refresh the input field
        setIdxc("");
        setName("");
        setBatch("");
        setGender("");
        setExperience("");
        history.push("/view")
      };
    

   
  
  return (

   <Base
   heading="Add a Teacher"
   description="you can add a teacher"
   >
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
            color="primary"
           onClick={addNewTeachersProfile}
          >
            Add data
          </Button>
     

       
         
   </Base>
  )
}

export default AddTeachers;