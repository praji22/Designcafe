import React from 'react'
import './header.css'
import people from '../../Assets/people.png'
import headbanner from '../../Assets/headbanner.png'

const Header = () => {
  return (
    <div className='dc_header section__padding' id="home">
      <div className='dc_header-content'>
        <h1 className='gradient__text'>Creative & Effective Advertising Solutions Crafted for You</h1>
        <p>We help business Succeed.Design cafe Delivering Brilliance, Every Time to Empower Your Brand’s Journey.</p>
        <div className='dc_header-input'>
          <input type='email' placeholder='Your Email Address'/>
          <button type='button'>Get Started</button>
        </div> 
        <div className='dc_header-content-people'>
          <img src={people} alt="people"/>
          <p>1,600 people requested access</p>
        </div>
        </div>  
        <div className='dc_header-bgimage'>
          <img src={headbanner} alt='Advertise'></img>
        </div> 
        
      
    </div>
  )
}

export default Header