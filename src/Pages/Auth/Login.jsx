import React, { useState } from 'react'
import Mainlayout from '../../layouts/Mainlayout'
import { login } from '../../Services/AuthService'
import { useNavigate } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { ROUTES } from '../../Routes/Routes'
const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const submitHandler = async (e) => {
    e.preventDefault()
    if (!email || !password) {
      setError("Please fill in all fields")
      return;
    } 
    else {setError("")}

    try{
    const loginData = {
      email,
      password
    }

    const response = await login(loginData);



    localStorage.setItem("token", response.token);
    localStorage.setItem("role", response.role);

    if(response.role === "CANDIDATE"){
      navigate(ROUTES.CANDIDATE_DASHBOARD)
    }
    else if(response.role === "RECRUITER"){
      navigate(ROUTES.RECRUITER_DASHBOARD)
    }
  }catch(error){
    setError("Invalid email or password");
    console.error("Login error: ", error);
  }

}
  return (
    <Mainlayout>
      <div>
      <h2>HireHub</h2>
      {error && <p>{error}</p>}

      <form onSubmit={submitHandler} >
        <div>
          <label>Email</label>
          
          <input type='email' placeholder='Enter email' value={email} 
          
          onChange={(e) => setEmail(e.target.value)}>
        
          </input>
        </div>

        <div>
          <label>Password</label>
          
          <input type='password' placeholder='enter password' value={password}
          onChange={(e)=>setPassword(e.target.value)}>
          
          
          </input>


        </div>

        <button type='subit'>Login</button>

      </form>

    </div>
    </Mainlayout>

  )
}

export default Login
