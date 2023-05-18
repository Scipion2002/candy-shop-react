import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
        <NavLink to="/" className={({ isActive, isPending }) => isPending ? "Pending": isActive ? "active" : ""}>
            Home
        </NavLink>
        <NavLink>
            Candies
        </NavLink>
    </div>
  )
}

export default Nav