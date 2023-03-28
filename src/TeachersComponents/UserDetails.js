import React, { useEffect, useState } from "react";

import {
  Button,
  Card,
  CardActions,
  CardContent,
  
  Typography,
} from "@mui/material";
import Base from "../Base/Base";

import { useHistory } from "react-router-dom";



export function UserDetails({TeachersProfileData,setTeachersProfile}) {
  // implement of the data
 const history=useHistory();
// this is the url where we went to sign in only 
// if the password and login name correct otherwise 
// it replace to register
useEffect(()=>{
  if(!localStorage.getItem("user-name"))
  history.replace("/teacherslogin")
  },[])

 

  // delete a data

  const deleteTeachersData = (teachersID) => {
    const removedTeachers = TeachersProfileData.filter(
      (teachers) => teachers.idxc !== teachersID
    );
    setTeachersProfile(removedTeachers);
  };

  
  return (
    <div>
    <Base>
    <div className="adddata">
    <Button 
    onClick={()=>history.push("/updateteachers")} 
    variant="contained"
                color="secondary"
    >Add Data</Button>
    </div>
   
      <h1 className="head-div">
        All teachers Details</h1>
     
      <div className="main-card">
        {TeachersProfileData.map((teachers,idx) => (
          <div className="card-div" >
          <Card 
          key={teachers.idxc}>
            <CardContent className="content-div">
              <Typography gutterBottom variant="h5" component="div">
                Name:{teachers.name}
              </Typography>
             
            </CardContent>
            <CardActions className="btn-div">

              
              <Button
                onClick={() =>history.push(`/update/${idx}/${teachers.idxc}`)}
                size="small"
                variant="contained"
                color="primary"
              >
                Edit
              </Button>
              
              
             
             
              <Button
              
                onClick={() => deleteTeachersData(teachers.idxc)}
                size="small"
                variant="contained"
                color="error"
              >
                delete
                </Button>
                <Button
              
              onClick={() =>history.push(`/teachers/${idx}`)}
              size="small"
              variant="contained"
              color="secondary"
            >
              viewoptions
              </Button>
             
            </CardActions>
          </Card>
          </div>
        ))}
      </div>
     
      </Base>
    </div>
  );
}

export default UserDetails;