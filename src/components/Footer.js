import React, { Children, cloneElement } from 'react'
import Logo from '../assets/Logo.svg'
import '../css/footer.css'


const LinksGroup=({children,onClick})=>{
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
    <footer>
        <img src={Logo} style={{height:100}}></img>
        <div className='navigation'>
         <p style={{color:'black'}}>Document Navigation</p>
            <LinksGroup>

           <a href='#home' >Home </a>
            <a href='#about' >About </a>
             <a href='#menu' >Menu </a>
         </LinksGroup>

        </div>
        <div className='contact'>

        </div>

        <div className='social'>

        </div>
    </footer>
  )
}

export default Footer
