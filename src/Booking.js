import React, { act, useReducer } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import './booking.css'
import Form from './components/Form'
import { useState } from 'react'
import { fetchAPI,submitAPI } from './api'

const getrandomTimes=()=>{
     const allTimes = [
    "17:00", "17:30", "18:00", "18:30", "19:00", "19:30",
    "20:00", "20:30", "21:00", "21:30", "22:00", "22:30"
  ];
    const shuffled=[...allTimes].sort(()=>0.5-Math.random())
    return shuffled.slice(0,5)

}



// const timesreducer=(state,action)=>{
//     switch(action.type){
//         case "UPDATE_TIMES":
//             return getrandomTimes()
//         default:
//             return state
//     }

// }




const timesreducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      const selectedDate = new Date(action.payload)
      return fetchAPI(selectedDate)
    default:
      return state;
  }
};




const Booking = () => {
    const [times, dispatch] = useReducer(timesreducer, ["17:00","18:00","19:00","20:00","21:00","22:00"]);
  return (
   <div className='container'>
    <Header/>
    <Form avaialbletimes={times} dispatch={dispatch}/>
    <Footer/>
    
   </div>
  )
}

export default Booking
