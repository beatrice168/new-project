import React from 'react'
import {NavLink} from "react-router-dom"

function Navbar() {
  return (
    <div className = "nav">
        <nav>
            <NavLink className = "van1" exact to = "/"> Home </NavLink>
            <NavLink className = "van1"to = "/music"> Music </NavLink>
            <NavLink className = "van1"to = "/musicList"> MusicList </NavLink>
        </nav>
    </div>
  )
}
export default Navbar