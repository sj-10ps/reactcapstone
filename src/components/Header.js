import React from 'react'
import Navbar from './Navbar'
import Logo from '../assets/Logo.svg'
import '../css/header.css'

const Header = () => {
  return (
    <header id='home'>
        <img src={Logo} style={{width:150,height:50}}></img>
      <Navbar/>
    </header>
  )
}

export default Header
