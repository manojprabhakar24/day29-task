import React, { useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import Base from '../Base/Base'

export function EmployeesProfile ({employeesData}){
  const history=useHistory();
  const {id}=useParams();
  const employee=employeesData[id]

  useEffect(()=>{
    if(!localStorage.getItem("user-name"))
    history.replace("/login")
    },[])
  
  return (
   <Base
   heading="employee profile"
   description="individual student details"
   >
    <div className='profile-div'>
    <h2>Employee-Profile</h2>
    <p>Employee Name:{employee.Name}</p>
    <p>Batch:{employee.Batch} </p>
    <p>Gender:{employee.Gender}</p>
    <p>yearsOfExperience:{employee.yearsOfExperience}</p>
   </div>
   </Base>
  
  )
}

export default EmployeesProfile;