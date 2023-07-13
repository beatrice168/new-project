import React from 'react'
import {NavLink} from "react-router-dom"

function Navbar() {
  return (
    <div>
        <nav>
            <NavLink exact to = "/"> Home </NavLink>
            <NavLink  to = "/music"> Music </NavLink>
            <NavLink  to = "/musicList"> MusicList </NavLink>
        </nav>
    </div>
  )
}
export default Navbar