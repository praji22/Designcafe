import React, { useState } from 'react'
import './navbar.css'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../Assets/logo.png'

const Menu =()=>(
  <>
       <p><a href='#home'>Home</a></p>
          <p><a href='#about'>About</a></p>
          <p><a href='#solutions'>Our Solutions</a></p>
          <p><a href='#work'>Our Work</a></p>
          <p><a href='#process'>Our Process</a></p>
          <p><a href='#contact'>Contact Us</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='dc_navbar'>
      <div className='dc_navbar-links'>
        <div className='dc_navbar-logo'>
          <img src={logo} alt='Logo'/>
        </div>
        <div className='dc_navbar-links_container'>
          <Menu/>
        </div>
        <div className='dc_navbar-sign'>
          <p>Sign in</p>
          <button type='button'>Sign up</button>
        </div>
        <div className='dc_navbar-menu'>
          {toggleMenu 
         ? <RiCloseLine color="#fff" size={27} onClick={()=>setToggleMenu(false)}/> 
         : <RiMenu3Line color="#fff" size={27} onClick={()=>setToggleMenu(true)}/>
          }
          {toggleMenu && (
            <div className='dc_navbar-menu_container scale-up-center'>
              <div className='dc_navbar-menu_container-links'>
                <Menu/>
                <div className='dc_navbar-menu_container-links-sign'>
                  <p>Sign in</p>
                 <button type='button'>Sign up</button>
                 </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar