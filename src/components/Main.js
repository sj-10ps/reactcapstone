import React from 'react'
import '../css/main.css'
import Button from './Button'
import Chef from '../assets/restauranfood.jpg'
import greek from '../assets/greek salad.jpg'
import bruschetta from '../assets/bruchetta.svg'
import lemon from '../assets/lemon dessert.jpg'
import { Link } from 'react-router-dom'
import Testimonials from './Testimonials'
import About from './About'






 const MenuItems=[
    {
        name:"greek salad",
        price:"$99",
        description:"famous greek salad",
        image:greek

    },
     {
        name:"bruschetta",
        price:"$9",
        description:"famous Bruschetta",
        image:bruschetta
        
    },
     {
        name:"Lemon Dessert",
        price:"$9",
        description:"famous Dessert",
        image:lemon
        
    },
    {
        name:"greek salad",
        price:"$99",
        description:"famous greek salad",
        image:greek

    },
     {
        name:"bruschetta",
        price:"$9",
        description:"famous Bruschetta",
        image:bruschetta
        
    },
     {
        name:"Lemon Dessert",
        price:"$9",
        description:"famous Dessert",
        image:lemon
        
    },
 
 ]





const Main = () => {
  return (
    <main>
      <section className='intro' >
        <section className='details'>
       <h1>Little Lemon</h1>
       <h3>Chicago</h3>
       <p>We are a restaurant</p>
      <Link to="/booking"> <Button value={"Reserve a table"}/></Link>
       </section>
       <section className='image'>
        <img src={Chef} style={{height:300,maxWidth:250}}></img>
       </section>
      </section>

      <section className='Menu' id='menu'>
        <section className='menuheader'>
         <h1>This Weeks Specials!</h1>
         <Button value={"Online menu"}/>
        </section>

    <section className='menuitems'>
        {MenuItems.map((item)=>
           
            (
                <div className='card'>
                  <img src={item.image} style={{height:100}}></img>
                  <div className='itemheader'>
                   <span style={{fontWeight:'bold'}}>{item.name}</span>
                  <span >{item.price}</span>
                 
                  </div>
                    <span >{item.description}</span>
                  <span>Order a delivery
  <i className="fa-solid fa-biking" style={{ color: 'black' ,marginLeft:2}}></i> 
</span>
                
                </div>
            )
        )}
         


        </section>
        
   

      </section>
      <Testimonials/>
      <About/>
    </main>
  )
}

export default Main
