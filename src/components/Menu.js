import React from 'react'
import { Link } from 'react-router-dom'

function Menu() {
  return (
    <div className="container mt-5">
      <div className='btn-group'>
        <Link className="btn btn-dark" to="">
          Home
        </Link>
        <Link to="/galeria" className="btn btn-dark" >
          Galeria
        </Link>
        <Link className="btn btn-dark" to="/mapa">
          Mapa
        </Link>
        <Link className="btn btn-dark" to="/curriculum">
          Curriculum
        </Link>
        <Link className="btn btn-dark" to="/mockups">
          Mockups
        </Link>
        <Link className="btn btn-dark" to="/login">
          Login
        </Link>
        <Link className="btn btn-dark" to="/logout">
          Logout
        </Link>
      </div>
    </div>
  )
}

export default Menu