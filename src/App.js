
import './App.css';

import { Redirect, Route, Switch } from 'react-router-dom';
import "./Style.css"
import DashBoard from './Components/DashBoard';

import { EmployeeDetails } from './Components/User';
import NoPage from './Components/NoPage';
import { WelcomePage } from './Components/WelcomePage';

import {UserDetails} from './TeachersComponents/UserDetails';
import { EmployeesProfile } from './Components/EmployeesProfile';
import { useState } from 'react';
import { data } from './Data/data';
import AddStudent from './Components/AddStudent';
import EditStudent from './Components/EditStudent';

import { profiledata} from './Data/teachersdata';
import { TeachersProfile } from './TeachersComponents/TeachersProfile';
import EditTeachers from './TeachersComponents/EditTeachers';
import AddTeachers from './TeachersComponents/AddTeachers';
import AuthPage from './Components/AuthPage';
import AuthPageTeachers from './TeachersComponents/AuthPageTeachers';


function App() {
  const [employeesData,setEmployees]=useState(data);
  const [TeachersProfileData,setTeachersProfile]=useState(profiledata)
  return (
    <div className="App">
      

     
<Switch>
<Route exact path="/">
 
 <WelcomePage/>
 </Route>


 
 <Route path="/dashboard">
   <DashBoard/>
 
 </Route>

 {/* to view all student details */}


 <Route path="/user">
  
  <EmployeeDetails 
  employeesData={employeesData} 
  setEmployees={setEmployees}/>
 
 </Route>
  
 <Route path="/details">
  <Redirect to="/user"/>
  <EmployeeDetails/>
 
 </Route>
 <Route path="/login">
   <AuthPage/>
  
 
 </Route>

 <Route path="/addstudents">
  <AddStudent
   employeesData={employeesData} 
   setEmployees={setEmployees}
  />
 </Route>

 <Route path="/edit/:id/:employeeid">
  <EditStudent
   employeesData={employeesData} 
   setEmployees={setEmployees}
  />
 </Route>
 <Route path="/employee/:id">
  <EmployeesProfile employeesData= {employeesData}/>

 </Route>

 {/* to view teachers data */}

 <Route path="/teacherslogin">
 <AuthPageTeachers/>
 
 </Route>



 <Route path="/view">
  <UserDetails
  TeachersProfileData={TeachersProfileData} 
  setTeachersProfile={setTeachersProfile}
  />
</Route>

 <Route path="/updateteachers">
  <AddTeachers
  TeachersProfileData={TeachersProfileData} 
  setTeachersProfile={setTeachersProfile}
  />
 </Route>

 <Route path="/update/:idx/:teachersidxc">
  <EditTeachers
 TeachersProfileData={TeachersProfileData} 
 setTeachersProfile={setTeachersProfile}
  />
 </Route>
 
 <Route path="/teachers/:id">
  <TeachersProfile TeachersProfileData= {TeachersProfileData}/>

 </Route>

{/* this is end page😍 */}

 <Route path="**">
  
   <NoPage/>
   
  </Route>
 

</Switch>

 </div>
  );
}

export default App;
