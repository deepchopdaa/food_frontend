import React from 'react'
import { useNavigate } from 'react-router'
const Logout = () => {
    const navigate = useNavigate("");
    localStorage.removeItem('token')
    navigate("/");
  return (
    <>
      
    </>
  )
}

export default Logout
