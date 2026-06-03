import React from 'react'
import { Navigate } from 'react-router-dom'
const ProtectedRoute = ({ children, allowedRole }) => {

 if(!localStorage.getItem("token")){
          return <Navigate to="/login" />
           
        }


        const userRole = localStorage.getItem("role")
  if(allowedRole && userRole !== allowedRole){
    return <Navigate to={`/${userRole.toLowerCase()}/dashboard`}/>
  }
  

  const role = localStorage.getItem("role")
  if(role === "CANDIDATE" && children.type.name !== "CDashboard"){
    return <Navigate to="/candidate/dashboard" />
  }
  if(role === "RECRUITER" && children.type.name !== "RDashboard"){
    return <Navigate to="/recruiter/dashboard" />
  }

  return (
    <>
       
        {children}

      
    </>
  )
}

export default ProtectedRoute

