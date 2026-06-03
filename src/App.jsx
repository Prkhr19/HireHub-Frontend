import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Auth/Login'
import Signup from './Pages/Auth/Signup'
import { ROUTES } from './Routes/Routes'
import CDashboard from './Pages/Candidate/CDashboard'
import RDashboard from './Pages/Recruiter/RDashboard'
import ProtectedRoute from './Routes/ProtectedRoute'

const App = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.LOGIN} element={<Login />} />
      <Route path={ROUTES.SIGNUP} element={<Signup />} />
      <Route path={ROUTES.CANDIDATE_DASHBOARD} element={<ProtectedRoute><CDashboard allowedRole="CANDIDATE" /></ProtectedRoute>} />
      <Route path={ROUTES.RECRUITER_DASHBOARD} element={<ProtectedRoute><RDashboard allowedRole="RECRUITER" /></ProtectedRoute>} />

    </Routes>
      )
}

export default App
