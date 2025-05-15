import React, { useState } from 'react'
import './navbar.css'
import logo from '../../assets/logo-3.png';
import {Link} from 'react-scroll'
import contactImg from '../../assets/contact.png'
import menu from '../../assets/menubar.png';
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <nav className='navbar' >
        
        <Link to='intro' spy={true} smooth={true} offset={-100} duration={500}>
  <img src={logo} alt='Logo' className='logo' style={{ cursor: 'pointer' }} />
</Link>

        <div className='desktopMenu'>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem' debug={true}>Home</Link>
            <Link activeClass='active' to='about' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem' debug={true}>About</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem' debug={true}>Interests</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem' debug={true}>Portfolio</Link>
        </div>

        <button className='desktopMenuBtn' onClick={()=>{
          document.getElementById('contact').scrollIntoView({behaviour: 'smooth'});
        }}>
            <img src={contactImg} alt='' className='desktopMenuImg'/>Contact Me
        </button>
        <img src={menu} alt='menu' className='mobileMenu' onClick={()=>setShowMenu(!showMenu)}/>
        <div className='navMenu' style={{display: showMenu? 'flex':'none'}}>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Home</Link>
            <Link activeClass='active' to='about' spy={true} smooth={true} offset={-70} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>About</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Interests</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-80} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Portfolio</Link>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Contact</Link>
        </div>
    </nav>
  )
}

export default Navbar
