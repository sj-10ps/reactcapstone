import React, { useState } from 'react'
import '../css/form.css'
import { submitAPI } from '../api'

const Form = ({avaialbletimes,dispatch}) => {
    

    const [date,setDate]=useState('')
    const [time,setTime]=useState('')
    const [guests,setGuests]=useState('')
    const [occasion,setOccassion]=useState('')

    const handledatchange=(e)=>{
      
       setDate(e.target.value)
       dispatch({type:"UPDATE_TIMES",payload:e.target.value})
    }

    const handlesubmit=()=>{
        const formData={
            date,
            time,
            guests,
            occasion
        }
        submitAPI(formData)?alert("booked"):alert("failed")
    }

  return (
     

<form onSubmit={handlesubmit}>
    <h1 style={{textAlign:"center"}}>Book Now</h1>
     <label for="res-date">Choose date</label>
     <input type="date" id="res-date" value={date} onChange={handledatchange} required></input>
      <label for="res-time">Choose time</label>
      <select id="res-time " value={time} onChange={(e)=>{setTime(e.target.value)}} required>
        {avaialbletimes.map((tim)=>(
            <option value={tim} key={tim}>{tim}</option>
        ))}

        </select>
        <label for="guests">Number of guests</label>
        <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={(e)=>{setGuests(e.target.value)}} required></input>
        <label for="occasion">Occasion</label>
          <select id="occasion" value={occasion} onChange={(e)=>{setOccassion(e.target.value)}} required>
     <option>Birthday</option>
     <option>Anniversary</option>
  </select>
  <input type="submit" value="Make Your reservation" style={{borderRadius:8,backgroundColor:'yellow'}}  aria-label="submit" ></input>
       

</form>
  )
}

export default Form
