import React, { Children, cloneElement } from 'react'
import Logo from '../assets/Logo.svg'
import '../css/footer.css'

import Logo2 from "../assets/Screenshot 2025-06-22 013344.png"


export const LinksGroup=({children,onClick})=>{
    return(
      Children.map(children,(child)=>(
        cloneElement(child,{
            ...child.props,
           onClick:(e)=>{
            e.preventDefault();
            const targetid=child.props.href?.substring(1)
            const section=document.getElementById(targetid)
            section?.scrollIntoView({behavior:"smooth"})
           }
           
           
        })
      ))
    )
}





const Footer = () => {
  return (
    <footer id='footer'>
        <img src={Logo2} style={{height:100,backfaceVisibility:'hidden'}}></img>
        <div className='navigation'>
         <span style={{color:'black',fontWeight:"bold"}}>Document Navigation</span>
            <LinksGroup>

           <a href='#home' >Home </a>
            <a href='#about' >About </a>
             <a href='#menu' >Menu </a>
              <a href='#testimonials' >Testimonials </a>
         </LinksGroup>

        </div>
        <div className='navigation'>
           <span style={{color:'black',fontWeight:"bold"}}>Social media</span>
            

           <a href='https://instagram.com' >Instagram </a>
            <a href='https://facebook.com' >Facebook </a>
             <a href='https://youtube.com' >Youtube </a>
  
        </div>

        <div className='social'>

        </div>
    </footer>
  )
}

export default Footer
