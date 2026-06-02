import React from 'react'
import { Link } from 'react-router-dom'
import { ROUTES } from '../Routes/Routes'
const Navbar = () => {
  return (
    <nav>

        <Link to ={ROUTES.HOME}>Home  </Link> {" | "}
        <Link to ={ROUTES.LOGIN}>Login</Link> { " | "} 
        <Link to ={ROUTES.SIGNUP}>Signup</Link>
        
    </nav>

  )
}
export default Navbar