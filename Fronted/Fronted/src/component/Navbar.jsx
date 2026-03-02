import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-sm cust_c2 navbar-dark"
      >
        <div className="container text-white">
          <NavLink className="navbar-brand" to="/">Navbar</NavLink>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" to="/" aria-current="page"
                >Home
                  <span className="visually-hidden">(current)</span></NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/add">Add</NavLink>
              </li>

            </ul>

          </div>
        </div>
      </nav>

    </>
  )
}

export default Navbar
