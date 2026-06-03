import React, { useState } from 'react'
import Mainlayout from '../../layouts/Mainlayout'
import api from '../../Api/Axios'
import { useNavigate } from 'react-router-dom'
import { signup } from '../../Services/AuthService'

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState("")
  const [name, setName] = useState('')
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const submitHandler = async (e) => {
    e.preventDefault()

    if (!name || !email || !password || !role) {
      setError("Please fill in all fields")
      return;
    }
    else {setError("")}

    
    try {
      const signupData = {
      name,
      email,
      password,
      role
    }
    await signup(signupData)
    navigate("/login")
    
      }catch(error){
        setError("Signup failed. Please try again.");
        console.error("Signup error: ", error);
      }
  };

  return (
    <Mainlayout>
      <h2>HireHub Signup</h2>
      {error && <p>{error}</p>}
      <form onSubmit={submitHandler}>
        <div>
          
          <label>Name</label>
          <input
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label>Role</label>
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="">Select Role</option>
            <option value="CANDIDATE">Candidate</option>
            <option value="RECRUITER">Recruiter</option>
          </select>
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </Mainlayout>
  )
}

export default Signup