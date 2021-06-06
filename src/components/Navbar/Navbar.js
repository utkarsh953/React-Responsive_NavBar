import React, { useState } from 'react'
import { MenuList } from './Menulist'
import './Navbar.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const menItems = MenuList.map(({ title, url }, index) => {
    return (
      <li key={index}>
        <NavLink exact to={url} activeClassName='active'>
          {title}
        </NavLink>
      </li>
    )
  })
  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    setClicked(!clicked)
  }
  return (
    <nav>
      <div className='logo'>
        <h3>NavBar</h3>
      </div>
      <div className='menu-icon' onClick={handleClick}>
        <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>
      <ul className={clicked ? 'menu-list' : 'menu-list close'}>{menItems}</ul>
    </nav>
  )
}

export default Navbar
